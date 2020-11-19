<template>
  <div id="app">
    <div class="row">
      <ButtonDestination
        v-for="item in destinations"
        :key="item.fakeId"
        :destination="item"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ButtonDestination from '~/components/destination/ButtonDestination'

export default {
  components: { ButtonDestination },
  computed: {
    ...mapGetters({
      destinations: 'destination/getDestinations',
    }),
  },
  // eslint-disable-next-line vue/order-in-components
  data() {
    return {
      dismissSecs: 3,
      dismissCountDown: 0,
    }
  },
  watch: {
    totalPrice() {
      this.showAlert()
    },
  },
  methods: {
    countDownChanged(dismissCountDown) {
      this.dismissCountDown = dismissCountDown
    },
    showAlert() {
      this.dismissCountDown = this.dismissSecs
    },
  },
}
</script>
