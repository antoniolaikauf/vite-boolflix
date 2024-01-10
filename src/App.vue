<script >
import axios from 'axios';
// componente header
import comHeader from './components/ComHeader.vue';
// componente main 
import comMain from './components/ComMain.vue'

import { store } from './store'

export default {
  components: {
    comHeader,
    comMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // funzione richiesta api 
    richiestaapi() {
      let urlAPI = store.linkAPI
      urlAPI += `&query=${store.searchFilm}`
      axios.get(urlAPI)
        .then((risposta) => {
          store.arrayFilm=risposta.data.results
          console.log(store.arrayFilm);
        })
        .catch((err) => {
          console.log("ritornato errore" + err);
        })
      console.log(store.searchFilm);
    }
  },
  // created() {
  //   this.richiestaapi()
  // }
}
</script>

<template>
  <comHeader @searchfilm="richiestaapi" />
  <main class="bg-secondary">
    <div class="container">
      <div class="row">
        <comMain />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
