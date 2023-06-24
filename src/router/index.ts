import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../pages/login.vue'),
  },
  {
    path: '/',
    name: '',
    component: () => import('../layout/index.vue'),
    children: [
      {
        path: '/userList',
        name: 'userList',
        component: () => import('../pages/user/userList.vue'),
        children: [
          {
            path: '/chat',
            name: 'chat',
            component: () => import('../pages/chat/index.vue'),
          },
        ],
      },
      {
        path: '/userAdd',
        name: 'userAdd',
        component: () => import('../pages/user/userAdd.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  let tokenID = localStorage.getItem('token')
  if (to.name != 'login') {
    if (!tokenID) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else next()
})
export default router
