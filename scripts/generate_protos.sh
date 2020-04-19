#!/bin/bash

INPUT_DIR="pkg/protos"
INPUT_PROTO_PATH="chat/chat.proto"

# go
GO_OUTPUT_PATH="pkg/protos"
protoc -I=$INPUT_DIR \
  $INPUT_PROTO_PATH \
  --go_out=plugins=grpc:$GO_OUTPUT_PATH

# js
JS_OUTPUT_PATH="web/protos"
GRPC_WEB_OUTPUT_PATH="web/protos"
protoc -I=$INPUT_DIR \
  $INPUT_PROTO_PATH \
  --js_out=import_style=commonjs:$JS_OUTPUT_PATH \
  --grpc-web_out=import_style=commonjs+dts,mode=grpcwebtext:$GRPC_WEB_OUTPUT_PATH
