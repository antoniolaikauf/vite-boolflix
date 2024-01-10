import { reactive } from 'vue'

export const store = reactive({
    // lik api per film 
    linkAPIfilm: 'https://api.themoviedb.org/3/search/movie?api_key=2d78ab19ebcfa0d0c2f56d826a1861d0',
    // link api per serie 
    linkAPIserie: 'https://api.themoviedb.org/3/search/tv?api_key=2d78ab19ebcfa0d0c2f56d826a1861d0',
    // array con dentro i film dell'api 
    arrayFilm: [],
    // array con dentro  le serie dell'api
    arraySerie:[],
    // variabile per ricerca dei film
    searchFilm: ""

})