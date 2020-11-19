<template>
  <div class="col-12">
    <span>{{ ticket.passenger }}</span>
    <span>{{ ticket.flight }}</span>
    <span>{{ ticket.gate }}</span>
    <span>{{ ticket.seat }}</span>
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
