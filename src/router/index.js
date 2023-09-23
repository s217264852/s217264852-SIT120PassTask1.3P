import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue' // Importing Home.vue component from views directory
import AboutView from '../views/AboutView.vue' // Importing AboutViews.vue component from views directory

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, // Adding route for Home page
  {
    path: '/about',
    name: 'About',
    component: AboutView
  } // Adding route for About page
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
