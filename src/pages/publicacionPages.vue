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
          <q-tab name="publicacion" icon="shop" label="Publicar" />
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
          <q-tab-panel name="publicacion">
            <publicacion-component />
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
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="red"
        unelevated
        to="/misPublicaciones"
        label="Go Home"
        no-caps
      />
  </q-page>

  </div>

</template>

<script>

import PublicacionComponent from '../components/PublicacionComponent'
export default {
  name: 'publicacion',
  components: {
    PublicacionComponent
  },
  data () {
    return {
      tab: 'publicacion',
      splitterModel: 20

    }
  }
}
</script>
