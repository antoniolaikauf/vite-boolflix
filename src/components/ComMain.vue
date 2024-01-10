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
    <ul class="list-group list-group-horizontal">
        <li class="list-group-item border-0" v-for="(card, i) in store.arrayFilm">
            <cardiesima :films="card"/>
        </li>
    </ul>
</template>

<style scoped lang="scss">
ul{
    flex-wrap: wrap;
    li{
        width: 20%;
    }
}
</style>