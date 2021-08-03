import { createApp } from 'vue'
import index from '@/pages/components/home/index.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = createApp(
    index
    // i18n,
    // router,
    // store
  );
  app.mount("#pages");
})
