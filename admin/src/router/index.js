import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import main from '../views/main.vue'
import categoryEdit from '../views/CategoryEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: main,
    children:[
      {path:'/categories/create',component:categoryEdit}
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
