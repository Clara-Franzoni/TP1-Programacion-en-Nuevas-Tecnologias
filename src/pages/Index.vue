<template>
  <q-page class="flex flex-center">
    <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/reserva"
        label="Reservar"
        no-caps
      />
      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="red"
        unelevated
        to="/misReservas"
        label="Mis reservas"
        no-caps
      />
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
