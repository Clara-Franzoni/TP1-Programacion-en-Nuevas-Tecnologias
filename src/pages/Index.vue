<template>
  <q-page class="flex flex-center">
    <q-btn
        class="q-mt-xl"
        color="white"
        style="height: 100px"
        text-color="blue"
        unelevated
        to="/publicacion"
        label="Publicar"
        no-caps
      />
      <q-btn
        class="q-mt-xl"
        color="white"
        style="height: 100px"
        text-color="red"
        unelevated
        to="/misPublicaciones"
        label="Mis publicaciones"
        no-caps
      />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
