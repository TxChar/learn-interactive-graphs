import { createRouter, createWebHistory } from 'vue-router'

// 1. Import your page components
import HomePage from '@/pages/index.vue'
import FlowPage from '@/pages/flow.vue'

// 2. Define your routes
const routes = [
    {
        path: '/', // The root URL
        name: 'Home',
        component: HomePage, // Shows the Home.vue component
    },
    {
        path: '/flow', // The /flow URL
        name: 'Flow',
        component: FlowPage, // Shows your Flow/index.vue component
    },
]

// 3. Create and export the router
const router = createRouter({
    history: createWebHistory(), // Uses normal browser history
    routes, // Pass in the routes we defined
})

export default router
