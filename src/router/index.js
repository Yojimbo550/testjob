import { createRouter, createWebHistory } from 'vue-router'
import UserPosts from '@/components/UserPosts.vue'
import UserInfo from '@/components/UserInfo.vue'
import UserPostWithComms from '@/components/UserPostWithComms.vue'
import PostID from '@/components/PostID.vue'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes : [
    {path:'/userPosts/:id?',component:UserPosts},
    {path:'/',component:UserInfo},
    {path:'/userPostWithComms/:id?/:postId?',component:UserPostWithComms},
    {path:'/postID/:id?',component:PostID},
    
  ]
})

export default router
