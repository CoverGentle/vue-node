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

Vue.use(VueRouter)

const routes = [
  {
    path:'/login',name:'login',component:Login,
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

      { path: '/admin_users/create', component: AdminUserEdit },
      { path: '/admin_users/list', component: AdminUserList },
      { path: '/admin_users/edit/:id', component: AdminUserEdit, props: true }

    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
