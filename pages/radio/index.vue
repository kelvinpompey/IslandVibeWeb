<template>
  <div class="row justify-content-center main">
    <b-col md="6" class="p-0">
      <navigation />

      <h1 class="title">
        Radio
      </h1>

      <b-list-group>
        <b-list-group-item v-for="country in countries" :key="country">
          <img class="border rounded-circle border-secondary" :src="`https://cdn.rawgit.com/hjnilsson/country-flags/master/svg/${country}.svg`" height="50" width="50">
          <nuxt-link :to="`/radio/${country}`">
            {{ countryTable[country] }}
          </nuxt-link>
        </b-list-group-item>
      </b-list-group>
    </b-col>
  </div>
</template>

<script>
import _ from 'lodash'
import Navigation from '~/components/Navigation.vue'
import firebase from '~/firebase'
global.firebase = firebase

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

  async asyncData () {
    const snap = await firebase.database().ref('stations').once('value')
    const stations = Object.values(snap.val())
    const stationsByCountries = _.groupBy(stations, 'countryCode')
    const countries = _.keys(stationsByCountries)
    return { countries, countryTable }
  },

  created () {
  }
}
</script>

<style>
</style>
