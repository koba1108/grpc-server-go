package main

import (
	"github.com/koba1108/grpc-server-go/internal/server/handler"
	"google.golang.org/grpc"
	"google.golang.org/grpc/reflection"
	"log"
	"net"
)

const (
	address = ":9090"
)

func main() {
	listener, err := net.Listen("tcp", address)
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}
	s := grpc.NewServer()
	handler.BindHandlers(s)
	reflection.Register(s)
	log.Printf("server running port %v", address)
	if err := s.Serve(listener); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
