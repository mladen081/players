<template>
  <h1 class="text-6xl font-bold">Job Results page</h1>
  <button
    class="my-8 mx-4 border border-solid border-brand-blue-2"
    v-on:click="goToHome"
  >
    Go to homepage
  </button>
</template>

<script>
export default {
  name: "JobResultsView",
  methods: {
    goToHome() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
