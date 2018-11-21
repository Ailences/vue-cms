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

// 按需导入 mint-ui 组件 
import {
  Header,
  Swipe,
  SwipeItem,
  Button 
} from 'mint-ui'

// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
Vue.component(Button.name, Button)


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
