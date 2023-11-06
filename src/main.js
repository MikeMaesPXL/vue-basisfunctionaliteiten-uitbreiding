import { createApp } from 'vue'
import App from './App.vue'
import taskComponent from '/src/components/taskComponent.vue'

const app = createApp(App)
//Lokaal

// Globaal
app.component('taskComponent', taskComponent);
app.mount('#app')
