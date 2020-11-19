export default {
  setDestinations(state, value) {
    state.destinations.splice(0, state.destinations.length)
    console.log('VALUE --------', value)
    state.destinations.push(...value)
  },
  setDestination(state, value) {
    state.destinations.push(...value)
    // eslint-disable-next-line no-console
    console.log(state.destinations)
  },
}
