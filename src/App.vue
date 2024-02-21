<template>
  <RouterLink to="/login" @click.prevent="enableRoute"> Login</RouterLink>
  <RouterLink to="/signup" @click.prevent="enableRoute"> SignUp</RouterLink>

</template>

<script setup lang="ts">
import { ref } from 'vue';
const isLogin =  ref(false)

function enableRoute(){
  isLogin.value = !isLogin.value
}

</script>

