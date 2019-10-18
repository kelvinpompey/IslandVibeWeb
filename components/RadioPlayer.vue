<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="info" fixed="top">
      <b-navbar-brand v-if="isHome" href="#">
        <img src="/icon.png" width="40"><strong> {{ $store.state.radio.currentStation.title || "Island Vibe" }}</strong>
      </b-navbar-brand>

      <b-navbar-brand v-if="!isHome" href="#" @click.prevent="goBack">
        <i class="fa fa-chevron-left" /> Back <strong> {{ $store.state.radio.currentStation.title || " Island Vibe" }}</strong>
      </b-navbar-brand>

      <b-navbar-brand v-if="status === 'PLAYING'" href="#" @click="stop">
        <i class="fa fa-stop" />
      </b-navbar-brand>
      <b-navbar-brand v-if="status === 'PAUSED'" href="#" @click="play">
        <i class="fa fa-play" />
      </b-navbar-brand>
      <b-navbar-brand v-if="status === 'LOADING'">
        <i class="fa fa-circle-o-notch fa-spin" />
      </b-navbar-brand>
    </b-navbar>
    <audio
      ref="audio"
      autoplay
    >
      Your browser does not support the <code>audio</code> element.
    </audio>
  </div>
</template>

<script>
export default {

  computed: {
    currentStation () {
      return this.$store.state.radio.currentStation
    },

    status () {
      return this.$store.state.radio.status
    },

    isHome () {
      return this.$route.path === '/'
    }
  },

  watch: {
    currentStation (station) {
      const audio = this.$refs.audio
      audio.setAttribute('src', station.url)
      audio.play()
    }
  },

  mounted () {
    const audio = this.$refs.audio

    audio.addEventListener('loadstart', (info) => {
      this.$store.commit('radio/setStatus', 'LOADING')
    })

    audio.addEventListener('error', (info) => {
      this.$store.commit('radio/setStatus', 'ERROR')
      alert('Error playing stream')
    })

    audio.addEventListener('play', (info) => {
    })

    audio.addEventListener('playing', (info) => {
      this.$store.commit('radio/setStatus', 'PLAYING')
    })

    audio.addEventListener('pause', (info) => {
      this.$store.commit('radio/setStatus', 'PAUSED')
    })
  },

  methods: {
    stop () {
      this.$refs.audio.pause()
    },
    play () {
      this.$refs.audio.play()
    },

    goBack () {
      if (!this.isHome) {
        this.$router.back()
      }
    }
  }
}

</script>

<style scoped>
    .navbar-brand a:link {
        color: white !important;
        text-decoration: none !important;
    }
</style>
