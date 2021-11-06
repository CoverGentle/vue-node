import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import main from '../views/main.vue'
import categoryEdit from '../views/CategoryEdit.vue'
import categoryList from '../views/CategoryList.vue'

import itemEdit from '../views/itemEdit.vue'
import itemList from '../views/itemList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    children:[
      {path:'/categories/create',component:categoryEdit},
      {path:'/categories/list',component:categoryList},
      {path:'/categories/edit/:id',component:categoryEdit,props:true},

      {path:'/items/create',component:itemEdit},
      {path:'/items/list',component:itemList},
      {path:'/items/edit/:id',component:itemEdit,props:true}
      
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
