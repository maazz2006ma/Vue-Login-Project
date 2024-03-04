<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-toolbar color="primary">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        
        <v-toolbar-title>Example Project</v-toolbar-title>
      </v-toolbar>
      <v-main>
        <router-view></router-view>
      </v-main>
      <!-- <v-btn to="/login">Login</v-btn>
      <v-btn to="/signup">SignUp</v-btn> -->
    </v-layout>
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
});
</script>