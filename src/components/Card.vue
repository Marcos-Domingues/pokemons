<template>
  <section>
    <div class="row row-cols-1 row-cols-sm-1 row-cols-md-4 g-4">
      <div v-for="(pokes, i) in list" :key="i" class="card h-100">
        <div class="col">
          <img src="../assets/pokebola1.jpg" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{{ pokes.name }}</h5>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ["list"],
};
</script>
<style>
.card {
  width: 20%;
  margin-right: 60px;
  margin-bottom: 20px;
}
.card-img-top {
  width: 40% !important;
  padding-top: 17px;
}
</style>