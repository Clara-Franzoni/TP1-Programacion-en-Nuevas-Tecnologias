<template>
   <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 450px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="mispublicaciones" icon="list" label="Ver mis publicaciones" />
        </q-tabs>
      </template>

      <template v-slot:after>
        <q-tab-panels
          v-model="tab"
          animated
          swipeable
          vertical
          transition-prev="jump-up"
          transition-next="jump-up"
        >
          <q-tab-panel name="mispublicaciones">
            <mis-publicaciones-component />
          </q-tab-panel>

        </q-tab-panels>
      </template>

    </q-splitter>
    <q-page class="flex flex-center">
   <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
  </q-page>
  </div>

</template>

<script>
/* eslint-disable vue/no-unused-components */
import MisPublicacionesComponent from '../components/MisPublicacionesComponent'
export default {
  name: 'misPublicaciones',
  components: {
    MisPublicacionesComponent
  },
  data () {
    return {
      tab: 'mispublicaciones',
      splitterModel: 20

    }
  }
}
</script>
