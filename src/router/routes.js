
const routes = [
  {
    path: '/',
    redirect: { name: 'login' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'login', path: 'login', component: () => import('pages/Login.vue') },
      { name: 'register', path: 'register', component: () => import('pages/Register.vue')},
      { name: 'participants', path: 'participants', component: () => import('pages/Participants.vue')},
      { name: 'coaches', path: 'coaches', component: () => import('pages/CoachesUpload.vue')},
      { name: 'result', path: 'result', component: () => import('pages/ResultScreen.vue')}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
