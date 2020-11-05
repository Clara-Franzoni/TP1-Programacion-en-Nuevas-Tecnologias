import * as types from './types'

export default {
  [types.AGREGAR_RESERVA]: function (state, data) {
    state.listaReservas.push(data)
  },
  [types.ELIMINAR_RESERVA]: function (index) {
    this.listaReservas.splice(index, 1)
  }
}
