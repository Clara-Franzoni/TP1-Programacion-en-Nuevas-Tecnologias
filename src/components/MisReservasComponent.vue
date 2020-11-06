<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple
      v-for="rv in publicacion"
      :key="rv.nombre">
        <q-item-section>
          <q-item-label overline>{{rv.nombre}}</q-item-label>
          <q-item-label>{{rv.price}}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      reserva: 'reserva/listaReservas'
    })
  }
}
</script>
