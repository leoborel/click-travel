export default {
  setTickets(state, value) {
    state.tickets.splice(0, state.tickets.length)
    state.tickets.push(...value)
  },
  setTicket(state, value) {
    state.ticket = value
    console.log(state.ticket)
  },
}
