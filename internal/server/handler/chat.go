package handler

import (
	"context"
	"github.com/golang/protobuf/ptypes/empty"
	pb "github.com/koba1108/grpc-server-go/pkg/protos/chat"
	"log"
)

type ChatServer struct {
	pb.UnimplementedChatServer
	messages []*pb.Message
}

func (s *ChatServer) PostMessage(ctx context.Context, in *pb.Message) (*pb.MessageResult, error) {
	if in != nil && in.GetMessage() != "" {
		log.Printf("Received: %v", in.GetMessage())
		s.messages = append(s.messages, in)
	}
	return &pb.MessageResult{IsSuccess: true}, nil
}

func (s *ChatServer) ReceiveMessage(_ *empty.Empty, stream pb.Chat_ReceiveMessageServer) error {
	if s.messages != nil {
		for _, m := range s.messages {
			if err := stream.Send(&pb.Message{Message: m.GetMessage()}); err != nil {
				return err
			}
		}
	} else {
		_ = stream.Send(&pb.Message{Message: "init"})
	}

	previousCount := len(s.messages)

	for {
		currentCount := len(s.messages)
		if currentCount > 0 && previousCount < currentCount {
			r := s.messages[currentCount-1]
			if r != nil {
				if err := stream.Send(&pb.Message{Message: r.GetMessage()}); err != nil {
					return err
				}
			}
		}
		previousCount = currentCount
	}
}
