<template>
  <!-- q-page : composant page de Quasar avec marge intérieure -->
  <q-page padding>

    <input v-model="message"
           v-autofocus
           @keyup.enter="alertMessage"
           @keyup.esc="clearMessage"
           ref="inputNom"
           :class="{'error' : message.length > 5 }"
    />

    <button @click="clearMessage">Effacer</button>
    <button @click="cpt+=1">{{ cpt }}</button>

    <!-- {{ message }} Affiche le valeur de la donnée message du cmposant -->
    <h5 v-if="message.length"
        :style="error"
    >{{ message }}</h5>

    <h6 v-else>Pas de message ...</h6>

    <p>Majuscules cmp : {{ messageUppercase }}</p>
    <p>Minuscules : {{ message | lowercase }}</p>
  </q-page>
</template>

<script>
  // Déclaration du composant Vue
  export default {
    name: 'PageHello',
    // Déclaration des données
    data() {
      return {
        // Déclaration de la donnée message
        message: "J'adore Vue.js !",
        cpt: 0
      }
    },
    methods: {
      clearMessage () {
        this.message = ''
      },
      alertMessage() {
        alert(this.message)
      },
    },
    computed: {
      messageUppercase () {
        return this.message.toUpperCase()
      },
      error() {
        if( this.message.length > 5 )
          return {
            'color': 'red',
            'background-color' : 'pink'
          }
      }
    },
    filters: {
      lowercase: function (value) {
        return value.toLowerCase();
      }
    },
    directives: {
      autofocus: {
        inserted(el) {
          el.focus()
        }
      }
    },
    beforeCreate() {
      console.log('beforeCreate')
    },
    created() {
      console.log('created')
    },
    beforeMount() {
      console.log('beforeMount')
    },
    mounted() {
      console.log('mounted', this.$refs.inputNom)
    },
    beforeUpdate() {
      console.log('beforeUpdate')
    },
    updated() {
      console.log('updated')
    },
    beforeDestroy() {
      console.log('beforeDestroy')
    },
    destroyed() {
      console.log('destroyed')
    }
  }
</script>

<!-- Utilise le langage SCSS https://sass-lang.com/guide -->
<style lang="scss">
  h5 {
    /* $primary est une variable décalrer dans src/css/quasar.variables.sass */
    background-color: $primary;
    color: white;
    border: 2px solid red;
    padding: .3em;
  }

  .error {
    color: red;
    background-color: pink;
  }
</style>
