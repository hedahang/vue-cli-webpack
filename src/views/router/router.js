import Vue from 'vue'
import Router from 'vue-router'
/*引入页面*/
import Login from '@/views/login/login.vue'
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'
import Index from '@/views/index/index.vue'
import Manage from '@/views/manage/index.vue'

Vue.use(Router);

/*配置路由*/
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/Index',
      name: 'Index',
      component: Index
    },
    {
      path: '/manage',
      name: 'Manage',
      component: Manage
    }
  ]
})
