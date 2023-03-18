import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import BootstrapVue3 from 'bootstrap-vue-3';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/sass/_typography.scss';
import { i18n } from './plugins/i18n.js';

const app = createApp(App)
  .use(router)
  .use(BootstrapVue3)
  .use(i18n);
app.mount('#app');
