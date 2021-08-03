<template>
  <div id="app">
    <p>{{ message }}</p>
  </div>
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'index',
  setup() {
    const message = ref('Hello World. testing')
    return {
      message
    }
  }
}
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
