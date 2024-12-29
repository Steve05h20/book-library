<script setup>
const Props = defineProps({
  image:String,
})
</script>

<template>
  <div class="flex flex-col justify-center items-center w-full max-sm:text-2xl  max-lg:text-4xl text-6xl">
  <img src="../../public/no_book.png" alt="no_book_image" class="w-96">
  <slot/>
  </div>
</template>
<style scoped>

</style>