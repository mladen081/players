<template>
  <div class="h-16 w-full border-b border-solid border-brand-gray-1 bg-white">
    <div class="flex h-full items-center px-8">
      <div v-if="onJobResultPage">
        <font-awesome-icon :icon="['fas', 'bone']" class="mr-3" />
        <font-awesome-icon :icon="['fas', 'search']" class="mr-3" />
        <font-awesome-icon :icon="['fas', 'cheese']" class="mr-3" />
        <span><span class="text-brand-green-1">1653</span> jobs matched</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TheSubnav",
  computed: {
    onJobResultPage() {
      return this.$route.name === "JobResults";
    },
  },
};
</script>

<style></style>
