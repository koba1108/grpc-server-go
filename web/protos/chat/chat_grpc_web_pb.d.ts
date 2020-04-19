import * as grpcWeb from 'grpc-web';

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

import {
  Message,
  MessageResult} from './chat_pb';

export class ChatClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  postMessage(
    request: Message,
    metadata: grpcWeb.Metadata | undefined,
    callback: (err: grpcWeb.Error,
               response: MessageResult) => void
  ): grpcWeb.ClientReadableStream<MessageResult>;

  receiveMessage(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Message>;

}

export class ChatPromiseClient {
  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: string; });

  postMessage(
    request: Message,
    metadata?: grpcWeb.Metadata
  ): Promise<MessageResult>;

  receiveMessage(
    request: google_protobuf_empty_pb.Empty,
    metadata?: grpcWeb.Metadata
  ): grpcWeb.ClientReadableStream<Message>;

}

