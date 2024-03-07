<template>
  <section>
    <div class="container mt-5">
      <div class="d-flex justify-content-between mb-3">
        <h2>Game name: {{ getGameName }}</h2>
        <h2>Number of pokemons: {{ pokeNumber }}</h2>
      </div>
      <Card :list="pokemons"></Card>
    </div>
  </section>
</template>
<script>
import api from "../service/index";
import Card from "../components/Card.vue";
export default {
  components: {
    Card,
  },
  data() {
    return {
      pokemons: [],
      pokeNumber: "",
    };
  },
  created() {
    if (this.$store.getters.game?.name) {
      this.$store.commit("SET_LOADING", true)
      api.fetchGame(this.$store.getters.game.name).then((item) => {
        this.pokemons = item.data.pokemon_species;
        this.pokeNumber = item.data.pokemon_species.length;
      }).catch((err) => {
        console.log(err);
      })
      .finally(() => this.$store.commit("SET_LOADING", false))
    }else{
        this.$router.push({path: "/generations"})
    }
  },
  computed: {
    getGameName() {
      return this.$store.getters.game.name
    }
  }
};
</script>
<style scoped>
h2 {
  color: #fff;
}
</style>