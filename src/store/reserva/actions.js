import * as types from './types'

export default {
  [types.AGREGAR_RESERVA]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_RESERVA, data)
  },
  [types.ELIMINAR_RESERVA]: function ({ commit, state }, id) {
    console.log(state)
    commit(types.ELIMINAR_RESERVA, id)
  }
}
