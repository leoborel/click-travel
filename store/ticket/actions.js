import service from './service'

export default {
  loadTickets(state, code) {
    service.getAllByCode(code).then((data) => {
      state.commit('setTickets', data)
    })
  },
  loadTicket(state, number) {
    service.get(number).then((data) => {
      state.commit('setTicket', data)
    })
  },
}
