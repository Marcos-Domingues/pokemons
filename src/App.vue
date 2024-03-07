<template>
<section>
  <div id="app" :class="{blur : getLoading}">
    <Header></Header>
    <router-view class="fade-in"></router-view>
  </div>
    <Spinner v-if="getLoading"></Spinner>
</section>
</template>

<script>
import Header from "./components/Header.vue"
import Spinner from "./components/Spinner.vue"
export default {
  name: 'App',
  data: () => ({
  }),
  components: {
    Header,
    Spinner
  },
  computed: {
    getLoading() {
      return this.$store.getters.loading
    }
  }
}
</script>

<style>
#app {
  font-family: monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #181818;
}
.blur{
  filter: blur(4px);
}
html{
  background-color: #181818;
}
</style>
