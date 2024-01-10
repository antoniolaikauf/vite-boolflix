<script >
import axios from 'axios';
// componente header
import comHeader from './components/ComHeader.vue';
// componente main 
import comMain from './components/ComMain.vue'

import{store} from './store'

export default {
  components: {
    comHeader,
    comMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    richiestaapi(){
      axios.get(store.linkAPI)
      .then((risposta)=>{
        console.log(risposta.data);
      })
      .catch((err)=>{
        console.log("ritornato errore" + err);
      })
    }
  },
  created(){
    this.richiestaapi()
  }



}
</script>

<template>
  <comHeader />
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
