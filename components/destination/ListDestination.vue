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
}
</script>
