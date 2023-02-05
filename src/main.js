import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { loadFonts } from "./plugins/webfontloader";
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'

loadFonts();

createApp(App).use(router).use(BootstrapVue3).use(store).mount("#app");
