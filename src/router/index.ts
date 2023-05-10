import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'start',
      component: () => import('../layouts/PublicLayout.vue'),
      children: [
        {
          path: '',
          name: 'home',
          component: () => import('../views/HomePage.vue')
        },
        {
          path: 'articles',
          name: 'articles',
          component: () => import('../views/ArticlesPage.vue')
        },
        {
          path: 'cv',
          name: 'cv',
          component: () => import('../views/CurriculumVitae.vue')
        },
      ]
    },
    
  ]
})

export default router
