// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//全局引入jquery
import jq from 'jquery'
Vue.prototype.jq = jq
//引入全局样式和js
import './assets/css/reset.css'
import './assets/css/index.css'
import './assets/js/remScale.js'
//全局引入轮播图的css和js
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'
import './assets/css/banSwiper.css'
//引入全局组件
import vHeader from './components/header'
Vue.component('vHeader',vHeader)
import vBanner from './components/banner'
Vue.component('vBanner',vBanner)
//全局引入vant
import VantUI from 'vant'
import "vant/lib/index.css"
Vue.use(VantUI)
//创建一个图片地址
Vue.prototype.$imgUrl = 'http://localhost:3000'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
