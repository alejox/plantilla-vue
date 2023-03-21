import { createStore } from 'vuex'

import vuexPersistence from '../plugins/vue-persistence'

export default createStore({
  state: {
    appName: 'KodexPay',
    loading: false,
    progressBar: null
  },
  mutations: {},
  actions: {},
  modules: {
  },
  plugins: [vuexPersistence.plugin]
})
