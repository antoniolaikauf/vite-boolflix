<script >
export default {
    comnew: "cardiesima",

    props: {
        films: Object
    },
    data() {
        return {
            stelle: ['src/assets/star-solid.svg', 'src/assets/star-solid.svg', 'src/assets/star-solid.svg', 'src/assets/star-solid.svg', 'src/assets/star-solid.svg'],
        }
    },
    mounted() {
        // qua si fa vedere quante stelle ha facendo vedere il voto che ha e sottrando la 
        // lunghezza dell'array contenente le stelle con il voto cosi ti da le stelle da scartare 
        // e con spilce le tolgo 
        let value=Math.round(Math.floor(this.films.vote_average) / 2)
        let valoreTolto= this.stelle.length - value
        // console.log(valoreTolto);
        this.stelle=this.stelle.splice(valoreTolto)
        // console.log(this.stelle);     
    }
}
</script>

<template>
    <div></div>
    <div class=" card ">
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
            <div>
                <strong>voto:</strong> {{ Math.round(Math.floor(films.vote_average) / 2) }}
                <span v-for="(stella, i) in stelle">
                    <img :src="stella" alt="" class="valutazione">
                </span>
            </div>
            <div><strong>overwie</strong>{{ films.overview }}</div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    // proprieta tolta da bootstrap
    --bs-card-border-width: var(user-select: none);
    --bs-card-border-width: var(user-select: none);
    background-color: black;
    color: white;
    position: relative;
    height: 513px;
    transform-style: preserve-3d;
    /* Preserva la struttura 3D durante la rotazione */
    transition: transform 0.5s ease;

    /* Aggiunge una transizione per una rotazione fluida */
    .text {
        position: absolute;
        height: 100%;
        backface-visibility: hidden;
        /* Nasconde la faccia posteriore durante la rotazione */
    }

    .back-face {
        transform: rotatey(180deg);
        /* Ruota la faccia posteriore */
    }

    #nazione {
        img {
            width: 50px;
        }
    }

    .valutazione {
        filter: invert(1);
    }
}

.card:hover {
    transform: rotatey(180deg);
    /* Ruota l'elemento al passaggio del mouse */
    // transform: rotate3d(0,1,0,180deg);
}
</style>

<!-- backface-visibility permette di nascondere la faccia posteriore dell elemento.

essendo che ci sono due div che hanno la classe text che ha position absolute, sono uno sopra l'altro 
e il testo non si vede. il testo non si vede perchè viene ruotato e grazie a  backface-visibility 
lo nasconde  (essendo che nasconde il dietro di un elemento ) , all'hover
dell'immagine fa ruotare tutte e due gi elementi quindi l'immagine ruota e non si vede e il testo ruota ancora e si vede 
perche ritorna alla facciata iniziale -->
