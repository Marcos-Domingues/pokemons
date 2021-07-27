<template>
  <section>
    <div class="container mt-5">
      <div class="d-flex justify-content-between mb-3">
        <h2>Game name: {{ name }}</h2>
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
      name: this.$store.getters.game.name,
      pokemons: [],
      pokeNumber: "",
    };
  },
  created() {
    if (this.$store.getters.game?.name) {
      api.fetchGame(this.$store.getters.game.name).then((item) => {
        this.pokemons = item.data.pokemon_species;
        this.pokeNumber = item.data.pokemon_species.length;
      });
    }else{
        this.$router.push({path: "/generations"})
    }
  },
};
</script>
<style scoped>
h2 {
  color: #fff;
}
</style>