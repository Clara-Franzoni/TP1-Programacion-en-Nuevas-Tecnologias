import Vue from 'vue'
import Vuex from 'vuex'

import reserva from './reserva'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    reserva
  }
})
