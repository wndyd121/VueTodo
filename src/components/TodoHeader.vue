<template>
  <header>
    <h1>TODO it!</h1>
    <h3>{{ this.getItemLength }}</h3>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getItemLength"]),
  },
};
</script>

<style scoped>
h1 {
  color: #2f3c52;
  font-weight: 900;
  margin: 2.5rem 0 1.5rem;
}
h3 {
  color: #2f3c52;
}
</style>