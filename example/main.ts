import { createApp } from 'vue'
import App from './App.vue'
import JalzLoadingPlugin from '../src/plugin'

const app = createApp(App)

// Install the loading plugin
app.use(JalzLoadingPlugin)

app.mount('#app')
