<script >
import comHeader from './components/ComHeader.vue';

import comMain from './components/ComMain.vue'

export default {
  components: {
    comHeader,
    comMain
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
