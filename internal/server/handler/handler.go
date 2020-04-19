package handler

import (
	"github.com/koba1108/grpc-server-go/pkg/protos/chat"
	"github.com/koba1108/grpc-server-go/pkg/protos/helloworld"
	"google.golang.org/grpc"
)

func BindHandlers(s *grpc.Server) {
	helloworld.RegisterGreeterServer(s, &GreeterServer{})
	chat.RegisterChatServer(s, &ChatServer{})
}
