import Vue from 'vue'
import Router from 'vue-router'

import homeComponent from '../pages/home/'
import memberComponent from '../pages/member/'
import shopcarComponent from '../pages/shopcar/'
import searchComponent from '../pages/search/'
import newslistComponent from '../pages/newslist/'
import newsinfoComponent from '../pages/newsinfo/'
import photoslistCompoent from '../pages/photoslist/'
import photoinfoComponent from '../pages/photoinfo/'

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
    }, {
      path:'/home/photoslist',
      component: photoslistCompoent
    },{
      path:'/home/photoinfo/:id',
      component: photoinfoComponent
    }
  ],
  linkActiveClass: 'mui-active'
})
