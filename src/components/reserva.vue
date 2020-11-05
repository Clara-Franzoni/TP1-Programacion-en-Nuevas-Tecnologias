<template>
  <div class="q-pa-md" style="max-width: 300px">
    <div class="q-gutter-md">
      <q-form @submit="onAgregar" class="q-gutter-md">
        <q-select
          v-model="reservaElegida"
          :options="reservas"
          label="Elegi tu reserva"
        />
        <q-btn label="Agregar" type="submit" color="primary" />
      </q-form>
    </div>
  </div>
</template>

<script>

import { leerReserva } from '../services'
import { AGREGAR_RESERVA } from '../store/reserva/types'

export default {
  data () {
    return {
      reservaElegida: null,
      reservas: null
    }
  },
  methods: {
    onAgregar: function () {
      const reserva = {
        reservas: this.reservaElegida
      }

      this.$store.dispatch('reserva/' + AGREGAR_RESERVA, reserva)
    }
  },
  mounted: function () {
    this.reservas = leerReserva()
  }
}
</script>
