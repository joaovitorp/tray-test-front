import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    redirect: to => {
      // the function receives the target route as the argument
      // we return a redirect path/location here.
      return { name: 'sellers' }
    },
  },
  {
    path: '/sellers',
    name: 'sellers',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SellerView.vue'),
    children: []
  },
  {
    path: '/sellers/:seller_id/sales/create',
    name: 'sellers.sales.create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SaleCreateView.vue')
  },
  {
    path: '/sellers/create',
    name: 'sellers.create',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SellerCreateView.vue')
  },
  {
    path: '/sellers/:seller_id/sales',
    name: 'sellers.sales',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/SaleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
