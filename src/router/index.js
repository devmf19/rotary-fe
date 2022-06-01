import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'IndexPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/IndexPage.vue')
  },
  {
    path: '/logIn',
    name: 'LogInPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/LogInPage.vue')
  },
  {
    path: '/signUp',
    name: 'SignUpnPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/SignUpPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
