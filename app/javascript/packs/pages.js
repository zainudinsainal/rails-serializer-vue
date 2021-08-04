// Import SCSS files
import '@/assets/stylesheets/home.scss'

// Import JS files
import { createApp } from 'vue'
// import store from '@/services/pages/stores'
// import router from '@/services/pages/router'
import pages from '@/layouts/index.vue'
import * as ActiveStorage from "@rails/activestorage"

ActiveStorage.start()
createApp(pages).mount("#app");
// document.addEventListener('DOMContentLoaded', () => {
//   const app = createApp(pages).mount("#pages");
//   // app.use(store)
//   // app.use(router)
//   app.mount("#pages");
// })
