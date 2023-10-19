import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import LayoutPage from '../views/LayoutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/',
          name: 'layout',
          component: LayoutPage

        },

        {
          path: '/about',
          name: 'about',
          component: AboutView

        }
      ]
    },

  ]
})

export default router
