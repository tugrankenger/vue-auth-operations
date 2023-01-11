import { createRouter, createWebHistory } from "vue-router"
import store from './store'

const routes =[
  {
    path:'/',
    name:'HomePage',
    component: ()=> import('./pages/Homepage.vue'),
    meta:{
      title: 'Home'
    },
    beforeEnter: (to, from, next) => {
      if(store.getters.isAuthenticated){
        next()
      }else{
        next({name:'Auth'})
      }
    },
  },
  {
    path:'/about',
    name:'About',
    component: ()=> import('./pages/About.vue'),
    meta:{
      title: 'About'
    },
    beforeEnter : (to, from, next)=>{
      if(store.getters.isAuthenticated){
        next()
      }else{
        next({name:'Auth'})
      }
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

const router = createRouter({
  routes,
  history: createWebHistory()
})

router.beforeEach((to,from,next)=>{
  if(store.getters.isAuthenticated){
    document.title = `${to.meta.title}`
  }
  next()
})

export default router