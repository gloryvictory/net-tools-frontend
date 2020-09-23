import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: Home
  },
  {
    path: '/dnslookup',
    name: 'DNS_Lookup',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/DNS_Lookup.vue')
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
