import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 导入vue-resource
import VueResource from 'vue-resource'
// 注册vue-resource
Vue.use(VueResource)


// 按需导入 mint-ui 组件 
import {
  Header,
  Swipe,
  SwipeItem
} from 'mint-ui'

// 注册组件
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)


// 导入 mui 样式
import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

// 导入自定义的全局样式
import './css/common.less'
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
