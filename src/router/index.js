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
import goodlistComponent from '../pages/goodlist/'
import goodsinfoComponent from '../pages/goodsinfo/'
import goodscommentComponent from "../pages/goodscomment/"
import goodsdescComponent from "../pages/goodsdesc/"
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
      path: '/home/photoslist',
      component: photoslistCompoent
    }, {
      path: '/home/photoinfo/:id',
      component: photoinfoComponent
    }, {
      path: '/home/goodlist',
      component: goodlistComponent
    }, {
      path: '/home/goodsinfo/:id',
      component: goodsinfoComponent
    }, {
      path: '/home/goodscomment/:id',
      component: goodscommentComponent,
      name: 'goodscomment'
    }, {
      path: '/home/goodsdesc/:id',
      component: goodsdescComponent,
      name: 'goodsdesc'
    }
  ],
  linkActiveClass: 'mui-active'
})
