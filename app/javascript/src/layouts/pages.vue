<template>
  <div>
    <h1>Test</h1>

    <p>{{ message }}</p>
  </div>

</template>

<script>
import { ref } from 'vue'

export default {
  name: 'pages',
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
