import { createRouter, createWebHistory } from 'vue-router'
import zhHome from '../views/zh/home.vue'

const routes = [
  {
    path: '/',
    name: 'zh-home',
    component: zhHome
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
