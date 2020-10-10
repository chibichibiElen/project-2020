import Vue from 'vue'
import Router from 'vue-router'
import TopPage from '@/components/TopPage'
import FrontPage from '@/components/FrontPage'
import ReversePage from '@/components/ReversePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TopPage',
      component: TopPage
    },
    {
      path: '/frontpage',
      name: 'FrontPage',
      component: FrontPage
    },
    {
      path: '/reversepage',
      name: 'ReversePage',
      component: ReversePage
    }
  ]
})
