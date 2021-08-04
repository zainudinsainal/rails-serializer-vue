// Import SCSS files
import '@/assets/stylesheets/home.scss'

// Import JS files
import { createApp } from 'vue'
import router from '@/services/pages/router'
import pages from '@/services/pages/components/home/index.vue'
import * as ActiveStorage from "@rails/activestorage"

ActiveStorage.start()
document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(pages);
  app.use(router)
  app.mount("#pages");
})
