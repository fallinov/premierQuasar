
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'hello', component: () => import('pages/Hello.vue') },
      { path: 'ex1', component: () => import('pages/Exercice1.vue') },
      { path: 'ex1s', component: () => import('pages/Exercice1-solution.vue') },
      { path: 'ex2', component: () => import('pages/Exercice2.vue') },
      { path: 'ex2s', component: () => import('pages/Exercice2-solution.vue') },
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
