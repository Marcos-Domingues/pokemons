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
    this.$parent.loading(true)
    api.listPokemons(false).then((item) => {
      this.pokemons = item.data.results;
      this.previousPage = item.data.previous;
      this.nextPage = item.data.next
      this.$parent.loading(false)
    }).catch((err) => {
      this.$parent.loading(false)
      console.log(err);
    })
  },
  methods: {
    changePage(i) {
      if (i) {
        this.$parent.loading(true)
        api.next(this.nextPage).then((item) => {
          this.pokemons = item.data.results;
          this.nextPage = item.data.next
          this.previousPage = item.data.previous;
          this.$parent.loading(false)
        }).catch((err) => {
          this.$parent.loading(false)
          console.log(err);
        })
      }else{
        this.$parent.loading(true)
        api.previous(this.previousPage)
        .then((item) => {
          this.pokemons = item.data.results;
          this.nextPage = item.data.next
          this.previousPage = item.data.previous;
          this.$parent.loading(false)
        }).catch((err) => {
          this.$parent.loading(false)
          console.log(err);
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