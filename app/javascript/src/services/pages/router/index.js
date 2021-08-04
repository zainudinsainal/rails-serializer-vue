import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '../components/home/index.vue';
import BlogIndex from '../components/blog/index.vue';

const routes = [
  { path: '/', component: HomeIndex, name: 'root_path' },
  { path: '/blogs', component: BlogIndex, name: 'blogs_path' },
]

const router = createRouter({
  history: createWebHistory(),
  // base: `${I18n.prefix}`,
  routes,
});

export default router;
