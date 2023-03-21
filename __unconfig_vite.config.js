
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite';
import { dirname, resolve } from 'node:path';

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(
        dirname(fileURLToPath(import.meta.url)),
        './src/locales/**'
      ),
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/styles.scss";`,
      },
    },
  },
});

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;