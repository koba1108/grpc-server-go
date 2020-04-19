import { ChatPromiseClient } from '../protos/chat/chat_grpc_web_pb'
import { Message } from '../protos/chat/chat_pb'

export const hostUrl = 'http://localhost:8080'
export const request = new Message()
export const client = new ChatPromiseClient(hostUrl)

export default {
  hostUrl,
  request,
  client,
}
