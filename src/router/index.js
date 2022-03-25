import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Basket from '../views/Basket.vue'
import SkinCard from '../views/SkinCard'
import Orders from '../views/Orders'
import Order from '../views/Order'
import Connection from '../views/Connection'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connexion',
    name: 'Connection',
    component: Connection
  },
  {
    path: '/commandes',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/commandes/fiche-produit',
    name: 'Order',
    component: Order
  },
  {
    path: '/panier',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/fiche-produit/:championId/:skinId',
    name: 'SkinCard',
    component: SkinCard
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
