import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    game: {},
    loading: false
  },
  mutations: {
    SET_GAME(state, status) {
      state.game = status;
    },
    SET_LOADING(state, status) {
      state.loading = status;
    },
  },
  getters: {
    game: state => state.game,
    loading: state => state.loading
  }
});