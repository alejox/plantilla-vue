import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('@/views/HomeView.vue'),
    children: [
      
    ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
