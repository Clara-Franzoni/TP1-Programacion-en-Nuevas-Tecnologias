import Vue from 'vue'
import Vuex from 'vuex'

import publicacion from './publicacion'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    publicacion
  }
})
