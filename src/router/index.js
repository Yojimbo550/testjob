import { createRouter, createWebHistory } from 'vue-router'
import UserPosts from '@/components/UserPosts.vue'
import UserInfo from '@/components/UserInfo.vue'
import UserPostWithComms from '@/components/UserPostWithComms.vue'



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path:'/userPosts/:id?',component:UserPosts},
    {path:'/',component:UserInfo},
    {path:'/userPostWithComms/:id?',component:UserPostWithComms},
    
  ]
})

export default router
