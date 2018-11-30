import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

// 注册vuex
import Vuex from 'vuex'
Vue.use(Vuex)

// 打开网页获取car中的数据
var car = JSON.parse(localStorage.getItem('car') || '[]')
// 创建store
const store = new Vuex.Store({
  state: {
    car: car // 存储购物车中的数据
  },
  mutations: {
    addToCar(state, goodsinfo) {
      // 假设购物车中没有对应的商品
      var flag = false
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      if (!flag) {
        state.car.push(goodsinfo)
      }

      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateGoodsInfo(state, goodsinfo) {
      // 修改购物车的值
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.count = parseInt(goodsinfo.count)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    removeFromCar(state, id) {
      state.car.some((item, i) => {
        if (item.id == id) {
          state.car.splice(i, 1)
          return true
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    },
    updateSelected(state, goodsinfo) {
      state.car.some(item => {
        if (item.id == goodsinfo.id) {
          item.selected = goodsinfo.selected
        }
      })
      localStorage.setItem('car', JSON.stringify(state.car))
    }
  },
  getters: {
    getAllCount(state) {
      var c = 0;
      state.car.forEach(item => {
        c += item.count
      })
      return c
    },
    getGoodsCount(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.count
      })
      return o
    },
    getGoodsSelected(state) {
      var o = {}
      state.car.forEach(item => {
        o[item.id] = item.selected
      })
      return o
    },
    getGoods(state) {
      var o = {
        count: 0,
        amount: 0
      }
      state.car.forEach(item => {
        if (item.selected) {
          o.count += item.count,
            o.amount += item.price * item.count
        }
      })
      return o
    }
  }
})

// 导入vue-resource
import VueResource from 'vue-resource'
// 注册vue-resource
Vue.use(VueResource)
// 配置 vue-resource 的请求根域名
Vue.http.options.root = 'http://www.lovegf.cn:8899/'
// 全局设置 post 表单数据格式组织形式
Vue.http.options.emulateJSON = true
// 按需导入 mint-ui 组件 
// import {
//   Header,
//   Swipe,
//   SwipeItem,
//   Button,
//   Lazyload
// } from 'mint-ui'

// // 注册组件
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Button.name, Button)
// Vue.use(Lazyload);

import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

// 图片预览插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

// 导入 mui 样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 定义时间全局过滤器
Vue.filter('dateFormat', function (datestr, pattern = 'YY-MM-DD HH:mm:ss') {
  return moment(datestr).format(pattern)
})

// 导入自定义的全局样式
import './css/common.less'
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  store // 挂载 store 状态管理对象
})
