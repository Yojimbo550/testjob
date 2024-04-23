import { createRouter, createWebHistory } from 'vue-router'
import UserPost from '@/components/UserPost.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path:'/userPost/:userName?',component:UserPost}
  ]
})

export default router
