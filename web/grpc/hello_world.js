import { GreeterPromiseClient } from '../protos/helloworld/helloworld_grpc_web_pb'
import { HelloRequest } from '../protos/helloworld/helloworld_pb'

export const hostUrl = 'http://localhost:8080'
export const request = new HelloRequest()
export const client = new GreeterPromiseClient(hostUrl)

export default {
  hostUrl,
  request,
  client,
}
