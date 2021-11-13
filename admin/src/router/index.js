import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import Login from '../views/login.vue'

import main from '../views/main.vue'
import categoryEdit from '../views/CategoryEdit.vue'
import categoryList from '../views/CategoryList.vue'

import itemEdit from '../views/itemEdit.vue'
import itemList from '../views/itemList.vue'

import heroEdit from '../views/heroEdit.vue'
import heroList from '../views/heroList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

import articleEdit from '../views/articleEdit.vue'
import articleList from '../views/articleList.vue'

import adEdit from '../views/adEdit.vue'
import adList from '../views/adList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',name:'login',component:Login,meta:{isPublic:true}
  },
  {
    path: '/',
    name: 'main',
    component: main,
    children: [
      {path: '/', component: Home},
      { path: '/categories/create', component: categoryEdit },
      { path: '/categories/list', component: categoryList },
      { path: '/categories/edit/:id', component: categoryEdit, props: true },

      { path: '/items/create', component: itemEdit },
      { path: '/items/list', component: itemList },
      { path: '/items/edit/:id', component: itemEdit, props: true },

      { path: '/heros/create', component: heroEdit },
      { path: '/heros/list', component: heroList },
      { path: '/heros/edit/:id', component: heroEdit, props: true },

      { path: '/articles/create', component: articleEdit },
      { path: '/articles/list', component: articleList },
      { path: '/articles/edit/:id', component: articleEdit, props: true },

      { path: '/ads/create', component: adEdit },
      { path: '/ads/list', component: adList },
      { path: '/ads/edit/:id', component: adEdit, props: true },

      { path: '/admin_users/create', component: AdminUserEdit },
      { path: '/admin_users/list', component: AdminUserList },
      { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true }

      

    ]
  },

]

const router = new VueRouter({
  routes
})
router.beforeEach((to,from,next)=>{
if(!to.meta.isPublic && !localStorage.token){
  return next('/login')
}
next()
})

export default router
