import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/views/LoginPage'

Vue.use(Router)

const routes = [{
  path: '/login',
  name: 'LoginPage',
  component: LoginPage
}]

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
