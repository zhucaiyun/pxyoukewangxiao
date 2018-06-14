import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login/login'
import signIn from '@/components/login/signIn'
import signUp from '@/components/login/signUp'
import signInAccount from '@/components/login/signInAccount'
// todo import forgetPwd from '@/components/login/forgetPwd'
import mainPage from '@/components/common/mainPage'

import index from '@/components/index/index'
import chooseCourse from '@/components/chooseCourse/chooseCourse'
import courseDetail from '@/components/chooseCourse/courseDetail'
import publicCourse from '@/components/publicCourse/publicCourse'
import studyCenter from '@/components/studyCenter/studyCenter'
import settlement from  '@/components/pay/settlement'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'mainPage',
      component: mainPage,
      meta: {
        title:'朴新优课-首页'
      },
      children:[
        {
          path: '/',
          name:'index',
          component: index,
          meta:{
            title: '朴新优课-首页'
          }
        },
        {
          path: '/chooseCourse',
          name: 'chooseCourse',
          component: chooseCourse,
          meta: {
            title:'朴新优课-选课报班'
          }
        },
        {
          path: '/publicCourse',
          name: 'publicCourse',
          component: publicCourse,
          meta: {
            title:'朴新优课-公开课'
          }
        },
        {
          path: '/studyCenter',
          name: 'studyCenter',
          component: studyCenter,
          meta: {
            title:'朴新优课-学习中心'
          }
        },
        {
          path: '/courseDetail',
          name: 'courseDetail',
          component: courseDetail,
          meta: {
            title: '朴新优课-课程详情'
          }
        },
        {
          path: '/settlement',
          name: 'settlement',
          component: settlement,
          meta: {
            title: '朴新优课-结算中心'
          }
        }
      ]
    },
    {
      path:'/login',
      name: 'login',
      component: login,
      meta: {
        title:'朴新优课-登录注册'
      },
      children:[
        {
          path:'/login',
          name: 'signIn',
          component: signIn,
          meta: {
            title:'朴新优课-登录'
          },
        },
        {
          path: 'signInAccount',
          name: 'signInAccount',
          component: signInAccount,
          meta: {
            title:'朴新优课-登录'
          },
        },
        {
          path: 'signUp',
          name: 'signUp',
          component: signUp,
          meta: {
            title:'朴新优课-注册'
          },
        }
        // todo 暂不要
        // {
        //   path: 'forgetPwd',
        //   name: 'forgetPwd',
        //   component: forgetPwd,
        //   meta: {
        //     title:'朴新优课-忘记密码'
        //   },
        // }
      ]
    },    


  ]
})
