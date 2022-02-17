import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Logout from '../views/Logout.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue'),
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem('access_token')) {
        next('/')
      } else {
        next()
      }
    }
  }
  // {
  //   path: '/wishlist',
  //   name: 'WishList',
  //   component: () => import("../views/Wishlist.vue"),
  //   beforeEnter: (to, from, next) => {
  //     if (localStorage.getItem('access_token')) {
  //       next()
  //     } else {
  //       next('/login')
  //     }
  //   }
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
