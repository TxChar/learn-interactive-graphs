import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/pages/index.vue'
import FlowPage from '@/pages/flow.vue'
import CustomFlowPage from '@/pages/custom.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage,
    },
    {
        path: '/flow',
        name: 'Flow',
        component: FlowPage,
    },
    {
        path: '/custom',
        name: 'Custom',
        component: CustomFlowPage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
