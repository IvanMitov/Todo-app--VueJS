import Vue from 'vue'
import Router from 'vue-router'
import Todos from './views/Todos.vue'
import About from './views/About.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todos',
      component: Todos
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})
