import Vue from 'vue'
import Router from 'vue-router'
const HelloWorld = () => import('@/components/HelloWorld')
const userInfo = () => import('@/components/userInfo')
const login = () => import('@/components/login')
const lagin = () => import('@/components/lagin')
const userpage = () => import('@/components/userpage')
const center = () => import('@/components/center')
const page = () => import('@/components/page')
const shoucang = () => import('@/components/shoucang')
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },{
      path: '/userInfo/:id',
      name: 'userInfo',
     component:userInfo
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/lagin',
      name: 'lagin',
      component: lagin
    } ,{
      path:'/userpage',
      name:'userpage',
      component:userpage
    },{
      path:'/center/:name',
      name:'center',
      component:center
    },{
      path:'/page',
      name:'page',
      component:page
    },
    {
      path:'/shoucang/:loginname',
      name:'shoucang',
      component:shoucang
    }


  ]
})
