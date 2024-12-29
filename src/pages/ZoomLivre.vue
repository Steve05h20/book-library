<script setup>
import Banner from "@/components/Banner.vue";
import { useRoute } from 'vue-router';
import useCollection from "@/composables/UseCollection.js";
import { ref, onMounted } from "vue";

const route = useRoute();
const id = route.params.id;
const { afficherUnlivre, luLivre } = useCollection();
const livre = ref(null);

onMounted(() => {
  livre.value = afficherUnlivre(id)
  console.log("Livre trouvé:", livre.value)
})

const toggleLu = () => {
  luLivre(livre.value.id)
  livre.value = afficherUnlivre(id)
}
</script>

<template>
  <Banner
      v-if="livre"
      background-color="blue"
      :page-name="'Detail: ' + livre.volumeInfo.title"
  />

  <div v-if="livre" class="p-4 max-w-4xl mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">


        <img
            :src="livre.volumeInfo.imageLinks?.thumbnail"
            :alt="livre.volumeInfo.title"
            class="w-64 object-contain rounded shadow-lg"

        />


      <!-- Informations du livre -->
      <div class="space-y-4">

        <p class="text-lg">
          <span class="font-semibold">Auteur(s):</span>
          {{ livre.volumeInfo.authors?.join(', ') }}
        </p>

        <p>
          <span class="font-semibold">Date de publication:</span>
          {{ livre.volumeInfo.publishedDate }}
        </p>

        <p>
          <span class="font-semibold">Nombre de pages:</span>
          {{ livre.volumeInfo.pageCount }}
        </p>

        <p>
          <span class="font-semibold">ISBN-13:</span>
          {{ livre.volumeInfo.industryIdentifiers?.find(id => id.type === 'ISBN_13')?.identifier || 'Non disponible' }}
        </p>

        <div class="my-4">
          <span class="font-semibold">État de lecture:</span>
          <button
              @click="toggleLu"
              class="ml-2 px-4 py-2 rounded"
              :class="livre.lu ? 'bg-green-500 text-white' : 'bg-gray-200'"
          >
            {{ livre.lu ? 'Lu' : 'Non lu' }}
          </button>
        </div>

        <div class="mt-6">
          <h2 class="text-xl font-semibold mb-2">Description:</h2>
          <p class="text-gray-700">{{ livre.volumeInfo.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>