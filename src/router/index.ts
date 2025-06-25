import RegistryView from '@/views/RegistryView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'registry',
      component: RegistryView,
    },
  ],
})

export default router
