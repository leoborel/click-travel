import service from './service'

export default {
  loadTickets(state, code) {
    console.log('test')
    service.getAllByCode(code).then((data) => {
      state.commit('setTickets', data)
    })
  },
}
