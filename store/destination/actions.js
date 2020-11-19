import service from './service'

export default {
  loadDestinations(state) {
    service.getAll().then((data) => {
      state.commit('setDestinations', data)
    })
  },
  loadDreamDestinations(state) {
    service.getAllDream().then((data) => {
      state.commit('setDestinations', data)
    })
  },
}
