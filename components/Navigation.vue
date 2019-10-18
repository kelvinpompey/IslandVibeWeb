<template>
  <div>
    <nav aria-label="breadcrumb" role="navigation">
      <ol class="breadcrumb">
        <li class="breadcrumb-item big-text">
          <nuxt-link to="/">
            <i class="fa fa-home" />
          </nuxt-link>
        </li>
        <li v-for="(path, index) in paths" :key="path" class="breadcrumb-item big-text" aria-current="page">
          <nuxt-link :to="'/' + paths.slice(0,index + 1).join('/')">
            {{ path }}
          </nuxt-link>
        </li>
      </ol>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    const paths = this.$route.path.split('/')
    paths.shift()
    return { paths }
  }
}
</script>

<style scoped>
</style>
