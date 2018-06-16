import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index/index'
import login from '@/components/login/login'
// import studentInfo from '@/components/studentInfo/studentInfo'
// import createOrder from '@/components/createOrder/createOrder'
// import payResult from '@/components/payResult/payResult'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name: 'login',
      component: login,
      meta: {
        title:'朴新优课-登录'
      }
    }
  ]
})
