<script >
export default {
    newCom: "cardiesima",

    props: {
        films: Object
    },
    data() {
        return {
            // array con stelle
            stelle: [],
            // array di bandiere
            // flags: [{
            //     en: 'th.jpg',
            //     ja: 'th (1).jpg',
            //     eu: 'th (2).jpg',
            // }],
            flag: ['eu', 'en', 'ja'],
            // percorso immagini
            immaginePercorso: 'src/assets/',
            // icona stella
            starIcon: '<i class="fa-solid fa-star"></i>'
        }
    },
    methods: {
        // funzione per le bandiere 
        getImagePath(img) {


            if (this.flag.includes(img)) {
                return `src/assets/${img}.jpg`
            }
        },
        // funzione per arrotondare il voto
        CalcoloVoto(voto) {
            return Math.ceil(voto / 2)
        }
    },
    // valutazioni stelle che cambiano in base al film messo in computed (cosi funziona anche senza cliccare un evento )
    computed: {
        valutazioneFilm() {
            // riempito array di stelle
            for (let i = 0; i < 5; i++) {
                // this.stelle.push('src/assets/star-solid.svg')
                this.stelle.push(this.starIcon)
            }
            // console.log(this.stelle);
            // fatto stelle meno lunghezza array e tolto il risultato dall'array 
            let value = this.CalcoloVoto(this.films.vote_average)
            let valoreTolto = this.stelle.length - value
            // console.log(valoreTolto);
            this.stelle = this.stelle.splice(valoreTolto)
            return this.stelle
        }
    },

}
</script>

<template>
    <div class=" card ">
        <span class="text front-face">
            <!-- header immagine presa da milestone 3 insieme alla larghezza -->
            <!-- controlllo se ci sono immagini o no -->
            <img v-if="films.poster_path" :src="`https://image.tmdb.org/t/p/w342/${films.poster_path}`" :alt="films.id">
            <h3 v-else class="text-center">
                QUESTO FILM NON HA IMMAGINE
            </h3>
        </span>
        <div class="text back-face text-center">
            <!-- controllo se c'è la proprietà/chiave dentro all'oggetto  -->
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
                    <!-- comparsa bandiere nazioni -->
                    <img :src="getImagePath(films.original_language)" alt="nazione">
                </span>
            </div>
            <div>
                <!-- valutazione voto del film  -->
                <strong>voto:</strong> {{ CalcoloVoto(films.vote_average) }}
                <!-- stambaggio delle stelle in base a quanto da la funzione valutazione film  -->
                <span v-for="(stella, i) in valutazioneFilm" :key="i">
                    <span v-html="stella"></span>
                </span>
            </div>
            <!-- descrizione film  -->
            <p><strong>overwie</strong>{{ films.overview }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    // proprieta tolta da bootstrap
    --bs-card-border-width: unset;
    background-color: black;
    color: white;
    // caratteristiche per far si che ruota l'immagine e veda il testo c'è anche descrizione come avviene in fondo 
    position: relative;
    height: 513px;
    transform-style: preserve-3d;
    /* Preserva la struttura 3D durante la rotazione */
    transition: transform 0.5s ease;

    /* Aggiunge una transizione per una rotazione fluida */
    .text {
        position: absolute;
        height: 100%;
        width: 100%;
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

    // filtro per le stelle cosi da colorarle 
    .valutazione {
        filter: invert(1);
    }

    p {
        height: 350px;
        overflow-y: scroll;
    }

    p::-webkit-scrollbar {
        display: none;
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

<!-- v-html vine utilizzato per inserire i tag in modo dinamico  è come quando creavi delle card dentro a javascript prima con i backtick e lo inserivi dentro con innerhtml
se non si usasse quello vedrebbe '<i class="fa-solid fa-star"></i>' come usa semplice stringa   -->