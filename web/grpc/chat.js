import { ChatPromiseClient } from '../protos/chat/chat_grpc_web_pb'
import { Message } from '../protos/chat/chat_pb'
import { Empty } from 'google-protobuf/google/protobuf/empty_pb'

export const hostUrl = 'http://localhost:8080'

export const newChatClient = () => {
  return new ChatPromiseClient(hostUrl).receiveMessage(new Empty())
}

export const postMessage = (message) => {
  const client = new ChatPromiseClient(hostUrl)
  const req = new Message()
  req.setMessage(message)
  return client.postMessage(req)
}

export default {
  hostUrl,
  newChatClient,
  postMessage,
}
