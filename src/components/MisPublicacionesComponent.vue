<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item
      v-for="publicacion in publi"
      :key="publicacion.nombreLibro">
        <q-item-section>
          <q-item-label overline>{{publicacion.nombreLibro}}</q-item-label>
          <q-item-label>{{publicacion.precio}}</q-item-label>
        </q-item-section>
        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />
        </q-item-section>
      </q-item>
       <button @click="deletePublicacion">
       Eliminar publicacion
    </button>
    </q-list>

  <h4>Ganancia estimada: {{ gananciaTotal() }} </h4>
  </div>

</template>

<script>
import { ELIMINAR_PUBLICACION } from '../store/publicacion/types'
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      sum: 0,
      publicaciones: []
    }
  },
  computed: {
    ...mapGetters({
      public: 'publicacion/listaPublicaciones'
    })
  },
  methods: {
    deletePublicacion: function (index) {
      this.$store.dispatch('publicacion/' + ELIMINAR_PUBLICACION)
    },
    gananciaTotal: function () {
      var sum = 0
      this.public.forEach(e => {
        sum += parseInt(e.precio)
      })
      return sum
    }
  }
}

</script>
