import * as jspb from "google-protobuf"

import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';

export class Message extends jspb.Message {
  getMessage(): string;
  setMessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Message.AsObject;
  static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
  static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Message;
  static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
  export type AsObject = {
    message: string,
  }
}

export class MessageResult extends jspb.Message {
  getIsSuccess(): boolean;
  setIsSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MessageResult.AsObject;
  static toObject(includeInstance: boolean, msg: MessageResult): MessageResult.AsObject;
  static serializeBinaryToWriter(message: MessageResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MessageResult;
  static deserializeBinaryFromReader(message: MessageResult, reader: jspb.BinaryReader): MessageResult;
}

export namespace MessageResult {
  export type AsObject = {
    isSuccess: boolean,
  }
}

