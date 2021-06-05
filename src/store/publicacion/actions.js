import * as types from './types'

export default {
  [types.AGREGAR_PUBLICACION]: function ({ commit, state }, data) {
    console.log(state)
    commit(types.AGREGAR_PUBLICACION, data)
  },

  [types.ELIMINAR_PUBLICACION]: function ({ commit, state }, id) {
    console.log(state)
    commit(types.ELIMINAR_PUBLICACION, id)
  }
}
