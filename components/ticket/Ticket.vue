<template>
  <div class="col-12">
    <NuxtLink class="giant-button" :to="`/tickets/boarding/${ticket.number}`">
      <span>{{ ticket.passenger }}</span>
      <span>{{ ticket.flight }}</span>
      <span>{{ ticket.gate }}</span>
      <span>{{ ticket.seat }}</span>
    </NuxtLink>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'Ticket',
  props: {
    ticket: {},
  },
  methods: {
    ...mapActions({}),
  },
}
</script>
