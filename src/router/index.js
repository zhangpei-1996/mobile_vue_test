import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/paidan',
        name: 'paidan',
        component: () => import('../views/paidan/Paidan.vue'),
        redirect: {
            name: 'maoxiansuo'
        },
        children: [
            {
                path: 'maoxiansuo',
                name: 'maoxiansuo',
                component: () => import('../views/paidan/Maoxiansuo.vue')
            },
            {
                path: 'genjinzhong',
                name: 'genjinzhong',
                component: () => import('../views/paidan/Genjinzhong.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: {
            name: 'paidan'
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
