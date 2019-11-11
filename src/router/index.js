import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: () => import('../views/Index.vue')
    },
    {
        path: '/haha',
        name: 'haha',
        component: () => import('../views/Haha.vue'),
        children: [
            {
                path: 'daxiao',
                name: 'daxiao',
                component: () => import('../views/Daxiao.vue')
            },
            {
                path: 'pixiaoroubuxiao',
                name: 'pixiaoroubuxiao',
                component: () => import('../views/Pixiaoroubuxiao.vue')
            },
            {
                path: '*',
                redirect: {
                    name: 'daxiao'
                }
            }
        ]
    },
    {
        path: '/xixi',
        name: 'xixi',
        component: () => import('../views/Xixi.vue'),
        children: [
            {
                path: ':id',
                name: 'xiaohua',
                component: () => import('../views/Xiaohua.vue')
            }
        ]
    },
    {
        path: '*',
        redirect: '/'
    }
];

const router = new VueRouter({
    routes
});

export default router;
