import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/main',
    children: [
      {
        path: 'main',
        name: 'main',
        component: () => import('@/layouts/MainLayout.vue')
      }
    ]
  },
  {
    path: '/map',
    name: 'map',
    component: () => import('@/layouts/mapCompontent.vue')
  }
]
