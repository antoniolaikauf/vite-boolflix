<script >
export default {
    comnew: "cardiesima",

    props: {
        films: Object
    },
    data() {
        return {
            cambio: false
        }
    },
    methods: {
        comparsaDettagli() {
            this.cambio = true
        }
    }
}
</script>

<template>
    <div class="card" @mouseover="comparsaDettagli" @mouseleave="cambio = false" :class="{ rotazione: cambio }">
        <img :src="`https://image.tmdb.org/t/p/w342/${films.poster_path}`" alt="" v-if="cambio === false">
        <div v-else>
            <div><strong> titolo </strong>{{ films.titlestr }}</div>
            <div><strong> titolo originale </strong> {{ films.original_title }}</div>
            <!-- <strong> titolo </strong>{{ films.name }}
           <strong> titolo </strong> {{ films.original_name }} -->
            <div>
                <strong> lingua </strong>{{ films.original_language }}
                <span id="nazione">
                    <img v-if="films.original_language === 'ja'"
                        src="https://tse1.mm.bing.net/th?id=OIP.pi5-qwhXy9IX2PyMDCaA5gHaEy&pid=Api&P=0&h=180" alt="">
                    <img v-else-if="films.original_language === 'en'"
                        src="https://tse2.mm.bing.net/th?id=OIP.wwDmpRbHZQv8ijyk2Nb0XwHaEo&pid=Api&P=0&h=180" alt="">
                    <img v-else src="https://tse1.mm.bing.net/th?id=OIP.dA-znFMNgE62Fhiln_bTngHaE8&pid=Api&P=0&h=180"
                        alt="">
                </span>
            </div>
            <div> <strong>voto:</strong> {{ Math.round(Math.floor(films.vote_average) / 2) }}</div>
            <div><strong>overwie</strong>{{ films.overview }}</div>

        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    background-color: black;
    color: white;
    border: 1px solid white;
    padding: 4px;
    text-align: center;

    #nazione {
        img {
            width: 50px;
        }
    }
}


.rotazione {
    transition: all 1s;
    transform: rotatey(180deg);
}
</style>
