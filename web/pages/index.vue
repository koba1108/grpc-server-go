<template>
  <div class="container">
    <p>message: {{ message }}</p>
    <p>reply: {{ reply }}</p>
    <label>
      <input type="text" v-model="message">
    </label>
    <button @click="helloWorld">helloWorld</button>
  </div>
</template>

<script>
  import { client, request } from '../grpc/hello_world'
  export default {
    data() {
      return {
        message: '',
        reply: '',
      }
    },
    methods: {
      async helloWorld() {
        request.setName(this.message)
        const res = await client.sayHello(request)
        this.reply = res.getMessage()
      },
    },
  }
</script>
