<script setup>
import { computed } from "vue"

/**
 @typedef {'orange' | 'blue' | 'red' | 'green' } ButtonColor
 */

const props = defineProps({
  onClick: { type: Function, required: true },

  /** @type {ButtonColor}*/
  color: { type: String, required: false, default: "orange" },
  validator: (value) => {
    return ["orange", "blue", "red", "green"].includes(value)
  }
})

const colorClasses = computed(() => {
  const colorMap = {
    orange: 'bg-orange-300 hover:bg-orange-400',
    blue: 'bg-blue-300 hover:bg-blue-400',
    red: 'bg-red-300 hover:bg-red-400',
    green: 'bg-green-300 hover:bg-green-400'
  }
  return colorMap[props.color] || colorMap.orange // orange par défaut
})
</script>

<template>
  <button
      :class="['text-lg rounded-lg font-medium invisible group-hover:visible px-4 py-1 max-lg:visible', colorClasses]"
      @click="onClick"
  >
    <slot/>
  </button>
</template>