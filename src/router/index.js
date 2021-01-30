import Vue from 'vue'
import Router from 'vue-router'
//引入一级路由
import Index from '../pages/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/index',
      component:Index,
      children:[
        {
          path:'/home',
          component:()=>import('../views/home'),
          name:'小U商城'
        },
        {
          path:'/classify',
          component:()=>import('../views/classify'),
          name:'分类'
        },
        {
          path:'/cart',
          component:()=>import('../views/cart'),
          name:"购物车"
        },
        {
          path:'/mine',
          component:()=>import('../views/mine'),
          name:"个人中心"
        },
        {
          path:'',
          redirect:'/home'
        }
      ]
    },
    {
      path:'/list',
      component:()=>import('../pages/list'),
      name:'商品列表'
    },
    {
      path:'/detail',
      component:()=>import('../pages/detail'),
      name:'商品详情'
    },
    {
      path:'/login',
      component:()=>import('../pages/login'),
      name:'登录'
    },
    {
      path:'/register',
      component:()=>import('../pages/register'),
      name:'注册'
    },
    {
      path:'/',
      redirect:'/index'
    }
  ]
})
