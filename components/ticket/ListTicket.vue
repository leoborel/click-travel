<template>
  <div id="app">
    <div class="row">
      <Ticket v-for="item in tickets" :key="item.fakeId" :ticket="item" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Ticket from '~/components/ticket/Ticket'

export default {
  components: { Ticket },
  computed: {
    ...mapGetters({
      tickets: 'ticket/getTickets',
    }),
  },
}
</script>
