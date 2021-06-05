import * as types from './types'

export default {
  [types.AGREGAR_PUBLICACION]: function (state, data) {
    state.listaPublicaciones.push(data)
  },

  [types.ELIMINAR_PUBLICACION]: function (index) {
    this.listaPublicaciones.splice(index, 1)
  }
}
