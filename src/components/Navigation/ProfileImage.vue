<template>
  <img
    class="h-8 w-8 rounded-3xl object-contain"
    :src="imageLink"
    alt="User profile photo"
  />
</template>

<script lang="ts" setup>
import { ref } from "vue";

const imageLink = ref(
  "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png"
);
</script>
