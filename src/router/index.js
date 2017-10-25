import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '@/components/HomeComponent'
import LifeComponent from '@/components/LifeComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeComponent
    },
    {
      path: '/life',
      name: 'life',
      component: HomeComponent
    },
    {
      path: '/tour',
      name: 'tour',
      component: HomeComponent
    },
    {
      path: '/experience',
      name: 'exp',
      component: HomeComponent
    }
  ]
})
