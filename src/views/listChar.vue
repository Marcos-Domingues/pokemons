<template>
  <section>
    <div class="container mt-5">
      <div class="d-flex justify-content-evenly mb-4">
      <button @click="changePage(false)" class="btn btn-danger">
        Previous
      </button>
      <button @click="changePage(true)" class="btn btn-danger">Next</button>
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
      previousPage: "",
    };
  },
  created() {
    api.listPokemons(false).then((item) => {
      this.pokemons = item.data.results;
      this.previousPage = item.data.previous;
    });
  },
  methods: {
    changePage(i) {
      if (i) {
        api.listPokemons(i).then((item) => {
          this.pokemons = item.data.results;
          this.previousPage = item.data.previous;
        });
      }else{
        api.previous(this.previousPage)
        .then((item) => {
          this.pokemons = item.data.results;
          this.previousPage = item.data.previous;
        })
      }
    },
  },
};
</script>