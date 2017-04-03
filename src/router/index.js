import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/views/hello'
import works from '@/views/works'
import life from '@/views/life'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/works',
      name: 'works',
      component: works
    }, {
      path: '/life',
      name: 'life',
      component: life
    }

  ]
})
