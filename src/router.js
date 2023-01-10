import { createRouter, createWebHistory } from "vue-router"


const routes =[
  {
    path:'/',
    name:'HomePage',
    component: ()=> import('./pages/Homepage.vue'),
    meta:{
      title: 'Home'
    }
  },
  {
    path:'/about',
    name:'About',
    component: ()=> import('./pages/About.vue'),
    meta:{
      title: 'About'
    }
  },
  {
    path:'/auth',
    name:'Auth',
    component: ()=> import('./pages/auth/Auth.vue'),
    meta:{
      title:'Auth'
    }
  }
]

// /
// /about
// /auth

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to,from,next)=>{
  document.title = `${to.meta.title}`
  next()
})

export default router