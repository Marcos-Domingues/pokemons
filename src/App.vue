<template>
<section>
  <div id="app" :class="{blur : load}">
    <Header></Header>
    <router-view class="fade-in"></router-view>
  </div>
    <Spinner v-if="load" :loading="load"></Spinner>
</section>
</template>

<script>
import Header from "./components/Header.vue"
import Spinner from "./components/Spinner.vue"
export default {
  name: 'App',
  data: () => ({
    load: false
  }),
  components: {
    Header,
    Spinner
  },
  methods: {
    loading(val){
      this.load = val;
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
