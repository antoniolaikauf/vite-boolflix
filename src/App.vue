<script >
import comHeader from './components/ComHeader.vue';

import comMain from './components/ComMain.vue'

export default{
  components:{
    comHeader,
    comMain
  }
}
</script>

<template>
 <comHeader/>
 <comMain/>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
