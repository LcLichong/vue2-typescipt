import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
const Home = () => import('../views/Home.vue')
const View = () => import('../views/View.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/View',
    name: 'View',
    component: View
  }
]

const router = new VueRouter({
  routes
})

export default router
