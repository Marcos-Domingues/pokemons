import axios from "axios"
import Vue from "vue"

Vue.use(axios)

export default {
    listPokemons(next) {
        return axios.get(next ? "https://pokeapi.co/api/v2/pokemon/?limit=60&offset=60" : "https://pokeapi.co/api/v2/pokemon")
    },
    listGames() {
        return axios.get("https://pokeapi.co/api/v2/generation/")
    },
    fetchGame(data, key) {
        return axios.get(key ? `https://pokeapi.co/api/v2/generation/${data}`: `https://pokeapi.co/api/v2/generation/${data}/?limit=60&offset=60`)
    },
    previous(url) {
        return axios.get(url)
    },
}