import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    game: {}
  },
  mutations: {
    SET_GAME(state, status) {
      state.game = status;
    }
  },
  getters: {
    game: state => state.game
  }
});