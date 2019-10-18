<template>
  <span v-if="false">{{ title }}</span>
</template>

<script>
// Test on: https://cards-dev.twitter.com/validator
export default {
  props: {
    'title': { type: String, default: '' },
    'image': { type: String, default: '' },
    'description': { type: String, default: '' },
    'url': { type: String, default: '' }
  },
  head () {
    return {
      title: this.title,
      meta: [
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:site', content: '@islandvibeapp' },
        { name: 'twitter:title', content: this.title },
        { name: 'twitter:description', content: this.description },
        { name: 'twitter:image', content: this.image },
        { name: 'twitter:image:alt', content: 'Logo for ' + this.title },
        { hid: 'ogDescription', property: 'og:description', content: this.description },
        { hid: 'ogTitle', property: 'og:title', content: this.title },
        { hid: 'ogImage', property: 'og:image', content: this.image },
        { hid: 'ogUrl', property: 'og:url', content: this.url },
        { property: 'og:image:width', content: '250' },
        { property: 'og:image:height', content: '250' }
      ]
    }
  }
}
</script>
