import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/paidan',
        name: 'paidan',
        meta: { A: 'paidan' },
        component: () => import('../views/paidan/Paidan.vue'),
        redirect: {
            name: 'maoxiansuo'
        },
        children: [
            {
                path: 'maoxiansuo',
                name: 'maoxiansuo',
                meta: { A: 'paidan' },
                component: () => import('../views/paidan/Maoxiansuo.vue')
            },
            {
                path: 'genjinzhong',
                name: 'genjinzhong',
                meta: { A: 'paidan' },
                component: () => import('../views/paidan/Genjinzhong.vue')
            }
        ]
    },
    {
        path: '/yinyue',
        name: 'yinyue',
        meta: { A: 'yinyue' },
        component: () => import('../views/yinyue/Yinyue.vue')
    },
    {
        path: '/travel',
        name: 'travel',
        meta: { A: 'travel' },
        component: () => import('../views/travel/Travel.vue')
    },
    {
        path: '/index',
        name: 'index',
        meta: { A: 'index' },
        component: () => import('../views/index/Index.vue')
    },
    {
        path: '/mendiandetail/:id',
        name: 'mendiandetail',
        meta: { A: 'index' },
        component: () => import('../views/mendiandetail/Mendiandetail.vue')
    },
    {
        path: '*',
        redirect: {
            name: 'yinyue'
        }
    }
];

const router = new VueRouter({
    routes
});

export default router;
