<template>
  <header :class="['w-full', 'text-sm', headerHeightClass]">
    <div class="fixed top-0 left-0 h-16 w-full bg-white">
      <div
        class="mx-auto flex h-full flex-nowrap border-b border-solid border-brand-gray-1 px-8"
      >
        <router-link
          class="flex h-full items-center text-xl"
          :to="{ name: 'Home' }"
          >Man Utd</router-link
        >

        <nav class="ml-12 h-full">
          <ul class="flex h-full list-none">
            <li
              v-for="menuItem in menuItems"
              :key="menuItem.text"
              class="ml-9 h-full first:ml-0"
            >
              <router-link
                :to="menuItem.url"
                class="flex h-full items-center py-2.5"
                >{{ menuItem.text }}</router-link
              >
            </li>
          </ul>
        </nav>
        <div class="ml-auto flex h-full items-center">
          <profile-image v-if="isLoggedIn" />
          <action-button v-else text="Sign in" @click="loginUser" />
        </div>
      </div>
      <the-subnav v-if="isLoggedIn" />
    </div>
  </header>
</template>

<script>
// import { mapStores } from "pinia";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "@/stores/user.js";

import ActionButton from "@/components/Shared/ActionButton.vue";
import ProfileImage from "@/components/Navigation/ProfileImage.vue";
import TheSubnav from "@/components/Navigation/TheSubnav.vue";

export default {
  name: "MainNav",
  components: {
    ActionButton,
    ProfileImage,
    TheSubnav,
  },
  data() {
    return {
      menuItems: [
        { text: "Teams", url: "/" },
        { text: "Life at Man Utd", url: "/" },
        { text: "Players", url: "/" },
        { text: "Jobs", url: "/jobs/results" },
      ],
    };
  },
  computed: {
    // ...mapStores(useUserStore), // this.userStore --- "user" + "Store" // {}
    ...mapState(useUserStore, ["isLoggedIn"]),
    headerHeightClass() {
      return {
        "h-16": !this.isLoggedIn, // "h-16": !this.userStore.isLoggedIn,
        "h-32": this.isLoggedIn, // "h-32": this.userStore.isLoggedIn,
      };
    },
  },
  methods: {
    ...mapActions(useUserStore, ["loginUser"]),
  },
};
</script>

<!-- :is-primary="true" -- type="primary" -->

<!-- type="primary" -->
