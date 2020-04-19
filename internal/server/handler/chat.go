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
	log.Printf("Received: %v", in.GetMessage())
	s.messages = append(s.messages, in)
	return &pb.MessageResult{IsSuccess: true}, nil
}

func (s *ChatServer) ReceiveMessage(_ *empty.Empty, stream pb.Chat_ReceiveMessageServer) error {
	for _, m := range s.messages {
		if err := stream.Send(&pb.Message{Message: m.GetMessage()}); err != nil {
			return err
		}
	}

	previousCount := len(s.messages)

	for {
		currentCount := len(s.messages)
		if previousCount < currentCount {
			r := s.messages[currentCount-1]
			// log.Printf("Sent: %v", r.GetMessage())
			if err := stream.Send(&pb.Message{Message: r.GetMessage()}); err != nil {
				return err
			}
		}
		previousCount = currentCount
	}
}
