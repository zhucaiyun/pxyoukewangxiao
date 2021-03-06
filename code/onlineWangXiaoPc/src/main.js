// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import promise from 'es6-promise'
import qs from 'qs'
// import WXConfig from './assets/js/wx.jsapi' // 微信分享
promise.polyfill()

Vue.config.productionTip = false;
Vue.prototype.axios = axios;
// Vue.prototype.axios.defaults.baseURL = 'http://zhibo.pxjy.com/';
// Vue.prototype.WXConfig = WXConfig;
Vue.prototype.qs = qs;
Vue.prototype.bus = new Vue;

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App},
  template: '<App/>'
})
