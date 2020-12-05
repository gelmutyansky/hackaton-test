
const routes = [
  {
    path: '/',
    redirect: { name: 'login' },
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { name: 'login', path: 'login', component: () => import('pages/Login.vue') },
      { name: 'index', path: 'index', component: () => import('pages/Index.vue')}
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
