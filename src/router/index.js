import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/hello'
import blog from '@/views/blog'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    }

  ]
})
