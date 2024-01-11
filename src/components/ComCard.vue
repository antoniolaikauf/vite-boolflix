<script >
export default {
    newCom: "cardiesima",

    props: {
        films: Object
    },
    data() {
        return {
            stelle: ['src/assets/star-solid.svg', 'src/assets/star-solid.svg', 'src/assets/star-solid.svg', 'src/assets/star-solid.svg', 'src/assets/star-solid.svg'],
            en: 'th (1).jpg',
            ja: 'th (2).jpg',
            eu: 'th.jpg',
        }
    },
    methods: {
        getImagePath(img) {

            return 'src/assets/' + img
            // `../src/assets${img}`      new URL('src/assets/' + img, import.meta.url).href;
        }
    },
    computed: {
        valutazioneFilm() {
            let value = Math.round(Math.floor(this.films.vote_average) / 2)
            let valoreTolto = this.stelle.length - value
            // console.log(valoreTolto);
            this.stelle = this.stelle.splice(valoreTolto)
            return this.stelle
        },
    }
}
</script>

<template>
    <!-- <img :src="'src/assets/' + eu" alt=""> -->
    <div class=" card ">
        <!-- header immagine presa da milestone 3 insieme alla larghezza -->
        <span class="text front-face">
            <img v-if="films.poster_path" :src="`https://image.tmdb.org/t/p/w342/${films.poster_path}`" :alt="films.id">
            <span v-else>
                QUESTO FILM NON HA IMMAGINE
            </span>
        </span>
        <div class="text back-face text-center">
            <div v-if="films.hasOwnProperty('title')">
                <div><strong> titolo </strong>{{ films.title }}</div>
                <div><strong> titolo originale </strong> {{ films.original_title }}</div>
            </div>
            <div v-else>
                <div><strong> titolo </strong>{{ films.name }}</div>
                <div> <strong> titolo originale </strong> {{ films.original_name }}</div>
            </div>
            <div>
                <strong> lingua </strong>{{ films.original_language }}
                <span id="nazione">
                    <img :src="getImagePath(eu)" alt="nazione">
                    <!-- <img :src="films.original_language === 'eu' ? :" alt=""> -->
                    <!-- <img v-else-if="films.original_language === 'en'"
                        src="https://tse2.mm.bing.net/th?id=OIP.wwDmpRbHZQv8ijyk2Nb0XwHaEo&pid=Api&P=0&h=180" alt="">
                    <img v-else src="https://tse1.mm.bing.net/th?id=OIP.dA-znFMNgE62Fhiln_bTngHaE8&pid=Api&P=0&h=180"
                        alt=""> -->
                </span>
            </div>
            <div>
                <strong>voto:</strong> {{ Math.round(Math.floor(films.vote_average) / 2) }}
                <span v-for="(stella, i) in valutazioneFilm" :key="i">
                    <img :src="stella" alt="immagine film" class="valutazione">
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

<!-- hasOwnProperty ci permette di vedere se esiste quella propriet dentro all'oggetto  -->
