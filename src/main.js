import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import './assets/sass/_typography.scss';
import { i18n } from './plugins/i18n.js';
import globalComponents from './plugins/global';
import mixing from './plugins/mixing';

const app = createApp(App)

app.use(router)
app.use(BootstrapVue3)
app.use(i18n)
app.use(globalComponents);
app.mixin(mixing)

app.mount('#app');
