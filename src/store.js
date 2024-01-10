import {reactive} from 'vue'

export const store =reactive({
    // lik api per film 
    linkAPI :'https://api.themoviedb.org/3/search/movie?api_key=2d78ab19ebcfa0d0c2f56d826a1861d0&query=transformers',
    // array con dentro i film dell'api 
    arrayFilm:[]

})