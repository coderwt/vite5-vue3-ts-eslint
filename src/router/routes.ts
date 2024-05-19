import { type RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/main',
    children: [
      {
        path: '/cesium',
        name: 'cesium',
        component: () => import('@/layouts/mapCompontent.vue')
      }
    ]
  },
  {
    path: '/CSSContainer',
    name: 'CSSContainer',
    component: () => import('@/layouts/MainLayout.vue')
  }
]
