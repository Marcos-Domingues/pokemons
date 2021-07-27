<template>
  <nav class="navbar navbar-light">
  <div class="container">
    <router-link to="/">
    <a class="navbar-brand">
      <img src="../assets/pngegg.png" id="pokemon-logo" alt="" width="30" height="24">
    </a>
    </router-link>
    <router-link to="/generations">
    <a class="navbar-brand">
      <img src="../assets/generations.png" id="generations-logo" alt="" width="30" height="24">
    </a>
    </router-link>
    <router-link to="/"></router-link>
    <router-link to="/characters"></router-link>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header',
}
</script>
<style>
.navbar{
  background-color: #E9C46A;
}
a img#pokemon-logo{
  width: 160px;
  height: 60px;
}

a img#generations-logo{
  width: 160px;
  height: 100px;
  position: absolute;
  top: -10px;
  right: 0;
}

.container{
  position: relative;
}

</style>