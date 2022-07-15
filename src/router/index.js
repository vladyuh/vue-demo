import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProjectsView from "@/views/ProjectsView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/projects/',
    name: 'projects',
    component: ProjectsView
  }
]

const router = new VueRouter({
  routes,
  mode: 'history',
  scrollBehavior(to,from,savedPosition) {
    if(to.hash || from.hash){
      return savedPosition
    }
    else{
      return { x: 0, y: 0 };
    }

  },
})

export default router
