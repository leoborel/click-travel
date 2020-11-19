<template>
  <a href="#" class="giant-button"> {{ destination.name }} </a>
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
