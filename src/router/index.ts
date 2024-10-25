import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    key: 'Home',
    component: () => import('@/views/Home/index.vue'),
    children: [
      {
        path: '/home1',
        name: 'Home1',
        key: 'Home1',
        component: () => import('@/views/Home/index.vue'),
        children: [
          {
            path: '/home11',
            name: 'home11',
            key: 'home11',
            component: () => import('@/views/Home/index.vue'),
          },
          {
            path: '/home12',
            name: 'home12',
            key: 'home12',
            component: () => import('@/views/Home/index.vue'),
          },
        ],
      },
      {
        path: '/home2',
        name: 'home2',
        key: 'home2',
        component: () => import('@/views/Home/index.vue'),
      },
      {
        path: '/home3/:id',
        name: 'home3',
        key: 'home3',
        component: () => import('@/views/Home/index.vue'),
      },
    ],
  },
  {
    path: '/about',
    name: 'About',
    key: 'About',
    component: () => import('@/views/About/index.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export { router as default, routes };
