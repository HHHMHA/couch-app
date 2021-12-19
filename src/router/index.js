import { createRouter, createWebHistory } from 'vue-router';
import coachRoutes from './coach-routes'
import NotFound from '@/pages/NotFound';

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
      component: NotFound,
    },
  ]
});

export default router;
