<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list bordered separator>
      <q-item clickable v-ripple
      v-for="rv in reserva"
      :key="rv.id">
        <q-item-section>
          <q-item-label overline>rv.label</q-item-label>
          <q-item-label>rv.price</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>
