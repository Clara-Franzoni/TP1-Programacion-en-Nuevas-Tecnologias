<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple
      v-for="reserva in reserv"
      :key="reserva.nombre">
        <q-item-section>
          <q-item-label overline>{{reserva.nombre}}</q-item-label>
          <q-item-label>{{reserva.price}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    <button @click="deletePublicacion">
  Eliminar publicacion
  </button>
  <h4>Ganancia estimada: {{ gananciaTotal() }} </h4>
  </div>

</template>

<script>
import { ELIMINAR_RESERVA } from '../store/reserva/types'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sumaTotal: 0,
      reservas: []
    }
  },
  computed: {
    ...mapGetters({
      reserv: 'reserva/listaReservas'
    })
  },
  methods: {
    deletePublicacion: function (index) {
      this.$store.dispatch('reserva/' + ELIMINAR_RESERVA)
    },
    gananciaTotal: function () {
      this.reserv.forEach((reserva) => { this.sumaTotal += this.reserv.price })
      return this.sumaTotal
    }
  }
}
</script>
