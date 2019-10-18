<template>
  <div class="row justify-content-center main">
    <div class="col-md-4 col-sm-12 p-0">
      <navigation />
      <o-g-component
        :title="`Island Vibe: ${station.title}`"
        :description="`Listen to ${station.title} on Island Vibe`"
        :url="`https://islandvibeapp.com/radio/${station.countryCode}/${station.tag}`"
        :image="station.logoURL"
      />

      <!--
        <h1 class="title">{{station.title}}</h1>
        <div class="station-logo" :style="{backgroundImage: 'url(' + station.logoURL + ')' }">
            <i v-if="!isPlaying" class="fa fa-play-circle fa-3x play-button" v-on:click="play"></i>
            <i v-if="isPlaying" class="fa fa-stop-circle fa-3x play-button" v-on:click="stop"></i>
        </div>
        -->

      <b-card
        :title="station.title"
        :img-src="station.logoURL"
        :img-alt="`Image for ${station.title}`"
        img-top
        tag="div"
        style=""
        class="mb-2"
      >
        <p class="card-text">
          {{ station.countryName }}
        </p>
        <b-button v-if="!isPlaying" href="#" variant="primary" class="w-100">
          <i class="fa fa-play-circle fa-3x" @click="play" />
        </b-button>

        <b-button v-if="isPlaying" href="#" variant="primary" class="w-100">
          <i class="fa fa-stop-circle fa-3x" @click="stop" />
        </b-button>
      </b-card>
    </div>
  </div>
</template>

<script>

import firebase from '~/firebase'
import OGComponent from '~/components/OGComponent'
import Navigation from '~/components/Navigation'

export default {
  components: {
    OGComponent,
    Navigation
  },

  computed: {
    isPlaying () {
      return this.$store.state.radio.status === 'PLAYING'
    },

    isPaused () {
      return this.$store.state.radio.status === 'PAUSED'
    }
  },

  async asyncData ({ route }) {
    const snap = await firebase.database().ref(`stations/${route.params.station}`).once('value')
    const station = snap.val()

    return { station }
  },

  methods: {
    play () {
      if (this.isPaused) {
        document.querySelector('audio').play()
      } else {
        this.$store.commit('radio/setStation', this.station)
      }
    },

    stop () {
      // this.$store.commit('radio/setStation', {});
      document.querySelector('audio').pause()
    }
  }
}

</script>

<style scoped>

    .title {
        text-align: center;
    }

    .station-logo {
        height: 100px;
        background-repeat: no-repeat;
        background-size: contain;
        width: 100px;
        margin: auto;
    }

    .play-button {
        margin-top: 20px;
        color: white;
        border-radius: 25px;
        border-width: 5px;
        border-style: solid;
        background-color: rgba(0,0,0,0.7);
    }

</style>
