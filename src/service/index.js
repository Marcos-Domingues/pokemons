import axios from "axios"
import Vue from "vue"

Vue.use(axios)

export default {
    listPokemons() {
        return axios.get("https://pokeapi.co/api/v2/pokemon")
    },
    listGames() {
        return axios.get("https://pokeapi.co/api/v2/generation/")
    },
    fetchGame(data) {
        return axios.get( `https://pokeapi.co/api/v2/generation/${data}`)
    },
    previous(url) {
        return axios.get(url)
    },
    next(url) {
        return axios.get(url)
    },
}