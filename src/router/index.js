import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'homescreen.index',
        component: () => import("@/homescreen/index.vue")
    },
    {
        path: '/detailscreen',
        name: 'detailscreen.index',
        component: () => import("@/detailscreen/index.vue")
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;