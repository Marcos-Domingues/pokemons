<template>
  <section>
      <img src="../assets/generations.png" alt="">
    <div class="container center">
      <ul class="list-group">
          <li v-for="(gen, i) in generations" :key="i" @click="redirect(gen)" class="list-group-item">{{ gen.name }} <img class="pokebola" src="../assets/pokebola.png" alt=""></li>
      </ul>
    </div>
  </section>
</template>
<script>
import api from "../service/index";
export default {
  data() {
    return {
      generations: [],
    };
  },
  created() {
    this.$parent.loading(true)
    api.listGames().then((item) => {
      this.generations = item.data.results;
      this.$parent.loading(false)
    }).catch((err) => {
      this.$parent.loading(false)
      console.log(err);
    })
  },
  methods: {
    redirect(data){
    this.$store.commit("SET_GAME", data);
    this.$router.push({name:"game"})
    }
  }
};
</script>

<style>
.list-group-item {
  background-color: #181818 !important;
  color: #fff;
}
.list-group li{
  background-color: #000 !important;
  color: #fff;
  padding: 10px 100px;
  font-weight: bold;
  font-size: 22px;
  border: 1px solid transparent;
}

.list-group li:hover{
  cursor: pointer;
  background-color: #181818 !important;
  border: 1px solid #fff;
}

li:first-child {
  border-top-left-radius: 2.25rem !important;
  border-top-right-radius: 2.25rem !important;
}
li:last-child {
  border-bottom-left-radius: 2.25rem !important;
  border-bottom-right-radius: 2.25rem !important;
}
ul{
  width: fit-content;
  border-radius: 5px;
  width: 45%;
}
.center{
  display: flex;
  justify-content: center;
}

.pokebola{
  width: 22px;
}
</style>