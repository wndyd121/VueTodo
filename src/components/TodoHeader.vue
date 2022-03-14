<template>
  <header>
    <h1>TODO it!</h1>
    <h3>{{ this.$store.getters["getItemLength"] }}</h3>
  </header>
</template>

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