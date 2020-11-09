<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple
      v-for="reserva in reservas"
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
  <h3>Importe a Pagar: {{ sumaTotal() }} </h3>
  </div>

</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sumaTotal
    }
  },
  computed: {
    ...mapGetters({
      reservas: 'reserva/listaReservas'
    })
  },
  methods: {
    deletePublicacion: function (index) {
      this.$store.dispatch('reserva/' + ELIMINAR_RESERVA)
    },
    sumaTotal: function () {
      array.forEach(reservas => total += reservas.price)
    }
  }
}
</script>
