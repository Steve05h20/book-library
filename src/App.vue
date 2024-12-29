<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue';
</script>

<template>
<Header/>
<main class="w-[1200px] bg-white mx-auto p-5  rounded-lg min-h-dvh max-xl:w-auto">
  <RouterView />
</main>
</template>

