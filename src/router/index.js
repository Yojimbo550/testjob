import { createRouter, createWebHistory } from 'vue-router'
import UserPost from '@/components/UserPost.vue'
import UserInfo from '@/components/UserInfo.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path:'/userPost/:id?',component:UserPost},
    {path:'/',component:UserInfo}
  ]
})

export default router
