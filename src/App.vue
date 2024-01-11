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
    comMain,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    // funzione richiesta api 
    richiestaapi() {
      let urlAPI = store.linkAPIfilm
      urlAPI += `&query=${store.searchFilm}`
      let urlapiserie = store.linkAPIserie
      urlapiserie += `&language=it_IT&query=${store.searchFilm}`
      // api per film
      axios.get(urlAPI)
        .then((risposta) => {
          store.arrayFilm = risposta.data.results
          // console.log(store.arrayFilm);
        })
        .catch((err) => {
          console.log("ritornato errore" + err);
        })
      // api per serie 
      axios.get(urlapiserie)
        .then((risposta) => {
          store.arraySerie = risposta.data.results
          // console.log(store.arraySerie);
          store.arrayFilm = [...store.arrayFilm, ...store.arraySerie]
          // console.log(store.arrayFilm);
        })
        .catch((err) => {
          console.log("ritornato errore" + err);
        })
    },
    trasformazioneVote(numero) {
      Math.floor(numero)
      console.log(numero);
    }
  }
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
