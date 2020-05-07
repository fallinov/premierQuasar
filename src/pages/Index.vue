<template>
  <q-page class="padding">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-full.svg"
    >
    <router-link :to="{ path: 'hello' }">Hello page</router-link>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
