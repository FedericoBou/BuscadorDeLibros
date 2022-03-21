import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)

function guest(to, from, next) {
  if (localStorage.activeUser) {
    next({ name: "Dashboard" });
  } else next();
}

function guard(to, from, next) {
  if (localStorage.activeUser) {
    next();
  } else next({ name: "Login" });
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    beforeEnter: guard,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),
    beforeEnter: guard,
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../components/Register.vue'),
    beforeEnter: guest,
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login.vue'),
    beforeEnter: guest,
  },
]

const router = new VueRouter({
  routes
})

export default router
