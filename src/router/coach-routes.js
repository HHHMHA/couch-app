import CoachList from '@/pages/coach/CoachList';
import CoachDetail from '@/pages/coach/CoachDetail';
import CoachContact from '@/pages/coach/CoachContact';
import CoachRegister from '@/pages/coach/CoachRegister';
import CoachRequests from '@/pages/coach/CoachRequests';

export default [
  {
    name: 'coach-list',
    path: '/coaches',
    component: CoachList,
  },
  {
    name: 'coach-detail',
    path: '/coaches/:id',
    component: CoachDetail,
    children: [
      {
        name: 'coach-contact',
        path: 'contact',
        component: CoachContact,
      },
    ]
  },
  {
    name: 'coach-register',
    path: '/register',
    component: CoachRegister,
  },
  {
    name: 'coach-requests',
    path: '/request',
    component: CoachRequests,
  },
]
