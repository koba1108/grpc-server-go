<template>
  <div class="container">
    <div>
      <p v-for="(r, index) in reply" :key="index">{{ r }}</p>
    </div>
    <label>
      <input type="text" v-model="message">
    </label>
    <button @click="doPost">POST</button>
  </div>
</template>

<script>
  import { newChatClient, postMessage } from '../grpc/chat'

  export default {
    data() {
      return {
        stream: null,
        message: '',
        reply: [],
      }
    },
    methods: {
      async doPost() {
        const res = await postMessage(this.message)
        if(res.getIsSuccess()) {
          this.message = ''
        } else {
          alert('error!')
        }
      },
      onReceiveMessage(message) {
        console.log('onReceiveMessage', message)
        this.reply.push(message.getMessage())
      },
      streamErrorHandler(e) {
        console.error('stream error', e)
      },
    },
    mounted() {
      this.stream = newChatClient()
      this.stream.on('data', this.onReceiveMessage)
      this.stream.on('error', this.streamErrorHandler)
      this.stream.on('status', m => console.log('status', m))
      this.stream.on('end', m => console.log('end', m))
    },
  }
</script>
