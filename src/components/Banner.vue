<script setup>/**  @typedef {'orange' | 'blue' | 'red' | 'green' } BgColor */
import {computed, ref} from "vue";

const props=defineProps({
    pageName:{valueOf:String,required:true},
    /** @type {BgColor}*/
    backgroundColor:{type:String,required:true},
    validator: (value) => {
      return ["orange", "blue", "red", "green"].includes(value)
    }
  })

const colorClasses = computed(() => {
  const colorMap = {
    orange: 'bg-orange-100',
    blue: 'bg-blue-100',
    red: 'bg-red-100',
    green: 'bg-green-100'
  }
  return colorMap[props.backgroundColor] || colorMap.orange // orange par défaut
})

</script>

<template>
  <div :class="colorClasses" class="h-40 rounded-lg flex justify-evenly items-center max-[700px]:justify-center p-8 max-[700px]:flex-col">
    <h1 class="font-semibold text-2xl">{{pageName}}</h1>
    <slot/>
  </div>
</template>

<style scoped>

</style>