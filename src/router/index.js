import Vue from 'vue'
import VueRouter from 'vue-router'

//一级路由
import Main from '../views/Main.vue'
import Detail from '../views/Detail.vue'

//二级路由
import Home from '../views/Main/Home.vue'
import Edu from '../views/Main/Edu.vue'
import Idea from '../views/Main/Idea.vue'
import Message from '../views/Main/Message.vue'
import My from '../views/Main/My.vue'

//三级路由
import Type from '../views/Main/Home/Type.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Main/Home/Attention'
  },
  {
    path: '/Detail/:id?',
    component:Detail
  },
  {
    path:'/Main',
    component:Main,
    children:[{
      path:'/Main/Home',
      redirect: '/Main/Home/Attention',
      component:Home,
      children:[{
        path:'/Main/Home/:type',
        component:Type
      }]
    },
    {
      path:'/Main/Edu',
      component:Edu
    },{
      path:'/Main/Idea',
      component:Idea
    },
    {
      path:'/Main/Message',
      component:Message
    },
    {
      path:'/Main/My',
      component:My
    }]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
