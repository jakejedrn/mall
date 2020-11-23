import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


// Vue.config.productionTip = false

// Vue.config.devtools = true;
createApp(App).use(router).mount('#app')
