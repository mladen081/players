<template>
  <img
    clas="h-8 w-8 rounded-3xl object-contain"
    :src="imageLink"
    alt="Profile active"
  />
</template>

<script>
import { link } from "fs";

export default {
  name: "ProfileImage",
  data() {
    imageLink: "https://www.pngitem.com/pimgs/m/487-4876417_link-head-png-toon-link-face-png-transparent.png";
  },
};
</script>
