import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'generalContainer',
    component: () => import('/src/components/generalContainer/generalContainer.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
