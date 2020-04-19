<template>
  <div class="container">
    <div>
      <p v-for="(r, index) in reply" :key="index">{{ r.getMessage }}</p>
    </div>
    <p>message: {{ message }}</p>
    <label>
      <input type="text" v-model="message">
    </label>
    <button @click="postMessage">POST</button>
  </div>
</template>

<script>
  import { Empty } from 'google-protobuf/google/protobuf/empty_pb'
  import { client, request } from '../grpc/chat'

  export default {
    data() {
      return {
        stream: null,
        message: '',
        reply: [],
      }
    },
    methods: {
      async postMessage() {
        request.setMessage(this.message)
        const res = await client.postMessage(request)
        if(!res.getIsSuccess()) {
          alert('error!')
        }
      },
      onReceiveMessage(message) {
        console.log('onReceiveMessage', message)
      }
    },
    mounted() {
      this.stream = client.receiveMessage(new Empty())
      this.stream.on('data', m => {
        this.onReceiveMessage(m)
      })
      this.stream.on('error', e => {
        console.error('stream error', e)
      })
    },
  }
</script>
