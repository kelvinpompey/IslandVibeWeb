<template>
  <section class="main row justify-content-center">
    <div class="col-md-6" align="center">
      <img src="/icon.png" width="200" height="200">
      <h1 class="title">
        Island Vibe
      </h1>

      <h2 class="subtitle">
        Caribbean Radio
      </h2>
      <div class="links">
        <nuxt-link class="btn btn-primary btn-lg" to="/radio">
          Radio
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>

export default {
}
</script>

<style scoped>

  .main {
    background: #29b6f6;
    height: 100vh;
  }

  .title {
    text-align: center;
    color: white;
    font-size: 30pt;
  }

  .subtitle {
    color: aliceblue;
    font-size: 24pt;
  }

</style>
