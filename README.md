# vue-cli-study

>这是一个 vue-cms 项目

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
## 使用 vue-cli 初始化项目

## header 和 tabbar 制作
- 使用mint-ui完成 header、使mui 完成 tabbar

- 按需导入 mint-ui 组件 ，并注册 注意 需要在 .babelrc 文件中进行相关配置

- 修改 tabbar 图标 

## 设置当前选中的tab栏高亮

- 结合路由的`linkActiveClass`属性完成使用`mui-active`类样式的高亮

## 配置路由规则实现路由跳转

- 项目文件的结构,参考现有的开源项目, `src => pages => home => index.vue`
配置路由规则:

  ```javascript
  import HomeComponent from '../pages/home/'
  import MemberComponent from '../pages/member/'
  import ShopcarComponent from '../pages/shopcar/'
  import SearchComponent from '../pages/search/'

  Vue.use(Router)

  export default new Router({
    routes: [
      { path: '/', redirect: '/home' },
      { path: '/home', component: HomeComponent },
      { path: '/member', component: MemberComponent },
      { path: '/shopcar', component: ShopcarComponent },
      { path: '/search', component: SearchComponent },
    ],
    linkActiveClass: 'mui-active'
  })
  ```

## 制作首页轮播图
- 通过mint-ui的swipe组件完成样式
- 使用vue-resource获取接口中的数据, 进行渲染

## 首页九宫格的样式改造

- 使用mui的代码片段作为改造的基础模板
- 修改结构并覆盖mui的默认样式
- 抽取全局的common.less样式, 通过main.js引入

## 添加组件切换动画

- **注意:切换动画的起点和终点不同, 需要单独设置v-enter和v-leave-to的样式**

```css
.v-enter {
  transform: translateX(100%);
  opacity: 0;
}

.v-leave-to {
  position: absolute;
  transform: translateX(-100%);
  opacity: 0;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.6s ease;
}
```