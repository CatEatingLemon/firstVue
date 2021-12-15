import Vue from 'vue'
import VueRouter from 'vue-router'

//引入页面
import Login from '../views/Login'
import Index from '../views/Index'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Index',
    name: 'Index1',
    component: Index
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router