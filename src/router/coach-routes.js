export default [
  {
    name: 'coach-list',
    path: '/coaches',
    component: null,
  },
  {
    name: 'coach-detail',
    path: '/coaches/:id',
    component: null,
    children: [
      {
        name: 'coach-contact',
        path: 'contact',
        component: null,
      },
    ]
  },
  {
    name: 'coach-register',
    path: '/register',
    component: null,
  },
  {
    name: 'coach-requests',
    path: '/requests',
    component: null,
  },
]
