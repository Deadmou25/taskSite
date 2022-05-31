import Vue from 'vue'
import VueRouter from 'vue-router'
import Cats from '@/views/Cats.vue'
import Favorites from '@/views/Favorites.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/cats',
    name: 'cats',
    component: Cats
  },
  {
    path: '/favorites',
    name: 'favorites',
    component: Favorites
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
