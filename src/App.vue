<template>
  <v-app>
   <the-header></the-header>
   <v-main> <router-view/></v-main>
  </v-app>
</template>

<script lang="ts">
import TheHeader from './components/Base/TheHeader.vue';
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components:{ TheHeader }
});
</script>