export const state = () => ({
  currentStation: {},
  status: ''
})

export const mutations = {
  setStation (state, station) {
    state.currentStation = station
  },

  setStatus (state, status) {
    state.status = status
  }
}
