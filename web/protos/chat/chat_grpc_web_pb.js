/**
 * @fileoverview gRPC-Web generated client stub for chat
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.chat = require('./chat_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.chat.ChatPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.chat.Message,
 *   !proto.chat.MessageResult>}
 */
const methodDescriptor_Chat_PostMessage = new grpc.web.MethodDescriptor(
  '/chat.Chat/PostMessage',
  grpc.web.MethodType.UNARY,
  proto.chat.Message,
  proto.chat.MessageResult,
  /**
   * @param {!proto.chat.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.MessageResult.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.chat.Message,
 *   !proto.chat.MessageResult>}
 */
const methodInfo_Chat_PostMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.MessageResult,
  /**
   * @param {!proto.chat.Message} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.MessageResult.deserializeBinary
);


/**
 * @param {!proto.chat.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.chat.MessageResult)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.chat.MessageResult>|undefined}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.postMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/chat.Chat/PostMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_PostMessage,
      callback);
};


/**
 * @param {!proto.chat.Message} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.chat.MessageResult>}
 *     A native promise that resolves to the response
 */
proto.chat.ChatPromiseClient.prototype.postMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/chat.Chat/PostMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_PostMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.chat.Message>}
 */
const methodDescriptor_Chat_ReceiveMessage = new grpc.web.MethodDescriptor(
  '/chat.Chat/ReceiveMessage',
  grpc.web.MethodType.SERVER_STREAMING,
  google_protobuf_empty_pb.Empty,
  proto.chat.Message,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.google.protobuf.Empty,
 *   !proto.chat.Message>}
 */
const methodInfo_Chat_ReceiveMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.chat.Message,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.chat.Message.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Message>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatClient.prototype.receiveMessage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/ReceiveMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_ReceiveMessage);
};


/**
 * @param {!proto.google.protobuf.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.chat.Message>}
 *     The XHR Node Readable Stream
 */
proto.chat.ChatPromiseClient.prototype.receiveMessage =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/chat.Chat/ReceiveMessage',
      request,
      metadata || {},
      methodDescriptor_Chat_ReceiveMessage);
};


module.exports = proto.chat;

