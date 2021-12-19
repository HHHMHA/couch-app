import { createRouter, createWebHistory } from 'vue-router';
import coachRoutes from './coach-routes'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/coaches'
    },
    ...coachRoutes,
    {
      path: '/:notFound(.*)',
      component: null,
    },
  ]
});

export default router;
