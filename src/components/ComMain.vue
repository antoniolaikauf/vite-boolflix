<script >
import { store } from '../store';
import cardiesima from '../components/ComCard.vue'

export default {
    newCopm: "comMain",

    components: {
        cardiesima
    },

    data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <ul class="list-group list-group-horizontal flex-wrap justify-content-between">
        <li  class="list-group-item border-0 p-0 m-1 " v-for="(card, i) in store.arrayFilm" >
            <!-- card dentro all'array dato da API -->
            <cardiesima :films="card" />
        </li>
    </ul>
</template>

<style scoped lang="scss">
li {
    width: 342px;
    background-color: unset;
}
</style>