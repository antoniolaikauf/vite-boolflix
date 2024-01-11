<script >
export default {
    comnew: "cardiesima",

    props: {
        films: Object
    },
    data() {
        return {
            cambio: false,
            rotazione: "rotazione",
            inversione: "inversione"
        }
    },
    methods: {
        comparsaDettagli() {
            this.cambio = true
        },
        scomparsaDettagli() {
            this.cambio = false
        }
    }
}
</script>

<template>
    <!-- <div class="rotating-container"> -->
        <div class=" card rotating-element">
            <img :src="`https://image.tmdb.org/t/p/w342/${films.poster_path}`" alt="" class="text front-face">
            <div class="text back-face text-center">
                <div><strong> titolo </strong>{{ films.titlestr }}</div>
                <div><strong> titolo originale </strong> {{ films.original_title }}</div>
                <strong> titolo </strong>{{ films.name }}
                <strong> titolo </strong> {{ films.original_name }}
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
    <!-- </div> -->
</template>

<style scoped lang="scss">
.card {
    background-color: black;
    color: white;
    text-align: center;

    #nazione {
        img {
            width: 50px;
        }
    }
}
.rotating-element {
    position: relative;
    height: 513px;
    perspective: 1000px;
    /* Aggiunge prospettiva per l'effetto 3D */
    transform-style: preserve-3d;
    /* Preserva la struttura 3D durante la rotazione */
    transition: transform 0.5s ease;
    /* Aggiunge una transizione per una rotazione fluida */
}

.rotating-element:hover {
    transform: rotateY(180deg);
    /* Ruota l'elemento al passaggio del mouse */
}

.text {
    position: absolute;
    width: 100%;
    height: 100%;
    // display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    backface-visibility: hidden;
    /* Nasconde la faccia posteriore durante la rotazione */
}

.back-face {
    transform: rotateY(180deg);
    /* Ruota la faccia posteriore */
}
</style>
