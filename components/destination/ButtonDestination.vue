<template>
  <NuxtLink class="giant-button" :to="`/tickets/${destination.code}`">
    {{ destination.name }}
  </NuxtLink>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'ButtonDestination',
  props: {
    destination: {},
  },
  methods: {
    ...mapActions({}),
  },
}
</script>
