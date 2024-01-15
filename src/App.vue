<script >
import axios from 'axios';
// componente header
import comHeader from './components/ComHeader.vue';
// componente main 
import comMain from './components/ComMain.vue'
// importazione store 
import { store } from './store'


export default {
  components: {
    comHeader,
    comMain,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    // funzione richiesta api 
    richiestaapi() {
      // controllo se utente ha scritto dentro all'input 
      if (store.searchFilm === '') {
        alert("devi scrivere un film")
      }
      // link api per film 
      let urlAPI = store.linkAPIfilm
      urlAPI += `&query=${store.searchFilm}`
      // link per api serie 
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
      // svuotamento input
      // store.searchFilm = ''
    }
  },
}
</script>

<template>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
    integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
    crossorigin="anonymous" referrerpolicy="no-referrer" />
  <!-- componenste header -->
  <comHeader @searchfilm="richiestaapi" />
  <main class="bg-secondary">
    <div class="container">
      <div class="row">
        <!-- componente main -->
        <comMain />
      </div>
    </div>
  </main>
</template>

<style lang="scss">
@use './style/general.scss'
</style>

// sistemare problema che da con immagini  