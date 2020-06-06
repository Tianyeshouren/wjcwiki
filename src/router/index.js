import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    components: {
      default: Home,
      e: () => import(/* webpackChunkName: "about" */ '../views/every.vue')
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      e: () => import(/* webpackChunkName: "about" */ '../views/every.vue')
    }
  },
  {
    path: '/test',
    name: 'test',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/test.vue'),
    children: [
      {
        path: '/test1',
        name: 'test1',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/test1.vue')
      },
      {
        path: '/test2',
        name: 'test2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/test2.vue')
      }
    ]
  },
  {
    path: '/page1',
    name: 'page1',
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/page1.vue'),
      e: () => import(/* webpackChunkName: "about" */ '../views/every.vue')
    },
    children: [
      {
        path: 'page11',
        name: 'page11',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/page11.vue')
      },
      {
        path: 'page12',
        name: 'page12',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/page12.vue')
      }
    ]
  },
  {
    path: '/page2',
    name: 'page2',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/page2.vue'),
      e: () => import(/* webpackChunkName: "about" */ '../views/every.vue')
    }
  },
  {
    path: '/page3',
    name: 'page3',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    components: {
      default: () => import(/* webpackChunkName: "about" */ '../views/page3.vue'),
      e: () => import(/* webpackChunkName: "about" */ '../views/every.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
