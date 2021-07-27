<template>
  <div id="app">
    <Header></Header>
    <router-view class="fade-in"></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
export default {
  name: 'App',
  components: {
    Header
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
html{
  background-color: #181818;
}
</style>
