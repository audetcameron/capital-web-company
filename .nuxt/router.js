import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7d616d74 = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _fef89668 = () => interopDefault(import('../pages/projects/index.vue' /* webpackChunkName: "pages/projects/index" */))
const _b6b3c0a0 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _67a602d3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _e90c84ba = () => interopDefault(import('../pages/blog/_blog.vue' /* webpackChunkName: "pages/blog/_blog" */))
const _1e2a3c60 = () => interopDefault(import('../pages/projects/_project.vue' /* webpackChunkName: "pages/projects/_project" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _7d616d74,
    name: "blog"
  }, {
    path: "/projects",
    component: _fef89668,
    name: "projects"
  }, {
    path: "/services",
    component: _b6b3c0a0,
    name: "services"
  }, {
    path: "/",
    component: _67a602d3,
    name: "index"
  }, {
    path: "/blog/:blog",
    component: _e90c84ba,
    name: "blog-blog"
  }, {
    path: "/projects/:project",
    component: _1e2a3c60,
    name: "projects-project"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
