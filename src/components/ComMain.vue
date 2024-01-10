<script >
import { store } from '../store';
import cardiesima from '../components/ComCard.vue'

export default {
    newCopm: "comMain",

    components:{
        cardiesima
    },

    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <ul class="list-group list-group-horizontal flex-wrap">
        <li class="list-group-item border-0 p-0 m-1" v-for="(card, i) in store.arrayFilm">
            <cardiesima :films="card"/>
        </li>
    </ul>
</template>

<style scoped lang="scss">
</style>