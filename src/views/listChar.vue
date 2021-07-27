<template>
  <section>
    <div class="container mt-5">
      <div class="d-flex justify-content-evenly mb-4">
      <button @click="changePage(false)" :class="{ disabled : !previousPage}" class="btn btn-danger">
        Previous
      </button>
      <button @click="changePage(true)" :class="{ disabled : !nextPage}" class="btn btn-danger">Next</button>
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
      nextPage: "",
    };
  },
  created() {
    api.listPokemons(false).then((item) => {
      this.pokemons = item.data.results;
      this.previousPage = item.data.previous;
      this.nextPage = item.data.next
    });
  },
  methods: {
    changePage(i) {
      if (i) {
        api.next(this.nextPage).then((item) => {
          this.pokemons = item.data.results;
          this.nextPage = item.data.next
          this.previousPage = item.data.previous;
        }).catch((err) => {
          console.log(err);
        })
      }else{
        api.previous(this.previousPage)
        .then((item) => {
          this.pokemons = item.data.results;
          this.nextPage = item.data.next
          this.previousPage = item.data.previous;
        })
      }
    },
  },
};
</script>
<style scoped>
.disabled{
  cursor:not-allowed;
}
</style>