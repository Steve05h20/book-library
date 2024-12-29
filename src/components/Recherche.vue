<script setup>


const props = defineProps({
  onSubmit: { type: Function, required: true },
  isLoading: { type: Boolean, required: true },
  modelValue: { type: String, required: true },
})

const emit = defineEmits(['valueSearch', 'update:modelValue'])


const updateValue = (e) => {
  emit('update:modelValue', e.target.value)
  emit('valueSearch', e.target.value)
}
</script>

<template>
  <form class="grid grid-cols-4  gap-2 max-sm:grid-cols-1 max-sm:w-full " @submit.prevent="onSubmit">
    <input
        name="search"
        id="search"
        type="text"
        class="h-10 col-span-3 rounded-lg w-full px-4"
        placeholder="Rechercher un livre..."
        :value="modelValue"
        @input="updateValue"
    />
    <input
        type="submit"
        class="h-10 rounded-lg bg-blue-300 hover:bg-blue-400 px-4 py-2"
        :value="isLoading ? 'Recherche...' : 'Rechercher'"
        :disabled="isLoading"
    />
  </form>
</template>