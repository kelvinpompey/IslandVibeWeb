<template>
  <div class="container-fluid">
    <radio-player />
    <nuxt />
  </div>
</template>

<script>

import RadioPlayer from '~/components/RadioPlayer'

export default {
  components: {
    RadioPlayer
  }
}
</script>

<style>
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  /*
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  */
  box-sizing: border-box;
}

  body {
    background: #f5f5f5;
  }

.bg-info {
  background-color: #03a9f4 !important;
}

.main {
  padding-top: 70px;
}

.breadcrumb-item {
  font-size: 1.4em !important;
  font-weight: bold;
}

.breadcrumb-item a {
  color: #42a5f5;
}

.breadcrumb-item a:hover {
  color: #2196F3;
}

a {
  color: #666;
  text-decoration: none;
}

a:hover {
  color: #000;
  text-decoration: none !important;
}

h1.title {
  color: #757373;
  font-size: 24pt;
}
</style>
