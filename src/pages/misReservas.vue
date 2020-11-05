<template>
   <div>
    <q-splitter
      v-model="splitterModel"
      style="height: 250px"
    >

      <template v-slot:before>
        <q-tabs
          v-model="tab"
          vertical
          class="text-teal"
        >
          <q-tab name="misreservas" icon="list" label="Ver mis reservas" />
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
          <q-tab-panel name="misreservas">
            <misReservas> </misReservas>
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
import misReservas from '../components/misReservas'
export default {
  name: 'misReservas',
  components: {
    misReservas
  },
  data () {
    return {
      tab: 'misreservas',
      splitterModel: 20

    }
  }
}
</script>
