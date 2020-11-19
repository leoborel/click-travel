export default {
  setTickets(state, value) {
    state.tickets.splice(0, state.tickets.length)
    console.log('VALUE --------', value)
    state.tickets.push(...value)
  },
  setTicket(state, value) {
    state.tickets.push(...value)
    // eslint-disable-next-line no-console
    console.log(state.tickets)
  },
}
