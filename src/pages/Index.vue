<template>
  <q-page class="padding">
    <h6>Logo sauvegardé dans assets</h6>
    <img alt="Quasar logo" :src="logoDansAssets">

    <h6>Logo sauvegardé dans statics (recommandé pour les images)</h6>
    <img alt="Quasar logo" :src="logoDansStatics">

    <div>
      <router-link :to="{ path: 'hello' }">Hello page</router-link>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data() {
    return {
      logoDansAssets: require('assets/quasar-logo-full.svg'),
      logoDansStatics: 'statics/quasar-logo-full.svg'
    }
  },
}
</script>
