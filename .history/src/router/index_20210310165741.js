import {createRouter,createWebHashHistory} from 'vue-router';
import Layout from '../components/layout/Layout.vue'

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            redirect: '/index'
        },
        {
            path: '/index',
            component: Layout
        },
        {
            path: '/user',
            component: () => import('../views/User.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    console.log(to, from, next);
    next();
})

export default router;
