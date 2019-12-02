/* eslint-disable */
import Vue from "vue"
import Router from "vue-router"
import Login from "@/views/Login"
import Index from "@/views/Index"
import Home from "@/views/Home"


// 常用组件路由
import Tpl from "./modules/tpl"

Vue.use(Router)


export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: {
        title: '登录页'
      }
    },
    {
      path: "/",
      name: "home",
      component: Home,
      redirect: "/index",
      children: [
        {
          path: "/index",
          name: "index",
          component: Index,
          meta: {
            title: '首页'
          }
        },
        Tpl,
      ]
    }
  ]
});
