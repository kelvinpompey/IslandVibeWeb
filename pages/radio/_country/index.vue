<template>
  <div class="row justify-content-center main">
    <div class="col-md-6 col-sm-12 p-0">
      <navigation />
      <h1 class="title">
        {{ countryTable[$route.params.country] }}
      </h1>
      <b-list-group>
        <b-list-group-item v-for="station in stations" :key="station.tag" @click="setStation(station)">
          <!-- <i class="fa fa-2x fa-play-circle-o" aria-hidden="true"></i> -->
          <img :src="station.logoURL" class="rounded-circle border border-secondary" style="width: 50px; height: 50px; margin-right: 10px">
          <nuxt-link :to="`/radio/${station.countryCode}/${station.tag}`">
            {{ station.title }}
          </nuxt-link>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
import firebase from '~/firebase'
import Navigation from '~/components/Navigation'

const countryTable = {
  'ag': 'Antigua',
  'vc': 'Saint Vincent and the Grenadines',
  'gd': 'Grenada',
  'lc': 'Saint Lucia',
  'dm': 'Dominica',
  'sk': 'Saint Kitts',
  'jm': 'Jamaica',
  'tt': 'Trinidad and Tobago',
  'bb': 'Barbados'
}

export default {
  components: {
    Navigation
  },

  async asyncData ({ route }) {
    const snap = await firebase.database().ref('stations').orderByChild('countryCode').equalTo(route.params.country).once('value')
    const stations = Object.values(snap.val())

    return { stations, countryTable }
  },
  created () {
  },
  methods: {
    setStation (station) {
      this.$store.commit('radio/setStation', station)
    }
  }
}
</script>
