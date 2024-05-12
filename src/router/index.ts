import {
  createWebHistory,
  createRouter,
  createWebHashHistory
} from 'vue-router'
import { routes } from '../router/routes'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`router beforeEach: from ${from.path} to ${to.path}`)
  next()
})

// router.afterEach((to, from) => {})

export default router
