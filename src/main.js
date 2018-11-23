import Vue from 'vue'
import App from './App'
import router from './router'
import moment from 'moment'

Vue.config.productionTip = false

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
  render: h => h(App)
})
