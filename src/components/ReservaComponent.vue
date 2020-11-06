<template>
  <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onAgregar"
      @reset="onLimpiar"
      class="q-gutter-md"
    >

    <q-select
          v-model="reservaElegida"
          :options="reservas"
          label="Elegi tu reserva"
        />

      <q-input
        filled
        v-model="nombre"
        label="Titulo *"
        hint="Name and surname"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        lazy-rules
      />

      <q-input
        filled
        v-model="autor"
        label="Autor *"
        hint="Name and surname"
        :rules="[ val => val && val.length > 0 || 'Please type something']"
        lazy-rules
      />

      <q-input
        filled
        type="number"
        v-model="price"
        label="Precio"

        :rules="[
          val => val !== null && val !== '' || 'Please type your age',
          val => val > 0 && val < 100000 || 'Please type a real age']"
          lazy-rules
      />

       <div>
        <q-btn label="Publicar" type="submit" color="primary"/>
        <q-btn label="Limpiar" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
</template>

<script>

import { leerReserva } from '../services'
import { AGREGAR_RESERVA } from '../store/reserva/types'

export default {
  data () {
    return {
      reservaElegida: null,
      nombre: '',
      autor: '',
      price: 0,
      reservas: null
    }
  },
  methods: {
    onAgregar: function () {
      const publicacion = {
        nombreLibro: this.nombre,
        autor: this.autor,
        precio: this.price,
        genero: this.reservaElegida
      }

      this.$store.dispatch('reserva/' + AGREGAR_RESERVA, publicacion)
    },
    onLimpiar: function () {
      this.reservaElegida = null
      this.nombreLibro = ''
      this.autor = ''
      this.price = 0
    }
  },
  mounted: function () {
    this.reservas = leerReserva()
  }
}
</script>
