import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopcarComponent from '../pages/shopcar/'
import searchComponent from '../pages/search/'
import newslistComponent from '../pages/newslist/'
import newsinfoComponent from '../pages/newsinfo/'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: homeComponent
    },
    {
      path: '/member',
      component: memberComponent
    },
    {
      path: '/shopcar',
      component: shopcarComponent
    },
    {
      path: '/search',
      component: searchComponent
    },
    {
      path: '/home/newslist',
      component: newslistComponent
    }, {
      path: '/home/newsinfo/:id',
      component: newsinfoComponent
    }
  ],
  linkActiveClass: 'mui-active'
})
