import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

/* --- ADD THESE TWO LINES --- */
import '@vue-flow/core/dist/style.css' // Base Vue Flow styles
import '@vue-flow/core/dist/theme-default.css' // Default theme (you can skip this if you make your own)
/* -------------------------- */
import '@vue-flow/controls/dist/style.css'
import '@vue-flow/minimap/dist/style.css'

createApp(App).use(router).mount('#app')
