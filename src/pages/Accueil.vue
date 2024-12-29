<script setup lang="js">
import Card from '@/components/Card.vue'
import { computed, watch } from "vue"
import Banner from "@/components/Banner.vue"
import useCollection from "@/composables/UseCollection.js"
import useModal from "@/composables/useModal.js"
import DialogSuppression from "@/components/dialogSuppression.vue"
import EmptyList from "@/components/EmptyList.vue"


const collection = useCollection()
const books = computed(() => collection.listLivre.value)
const { openModal, modalResponse, currentId, openModalWithId, closeModal } = useModal()

watch(modalResponse, (newValue) => {
  if (newValue === 'valide' && currentId.value) {
    collection.supprimerLivre(currentId.value)
  } else if (newValue === 'annuler') {
    console.log("annulation de la suppression")
  }
  closeModal()
})

const supprimerLivre = (id) => {
  openModalWithId(id)
}

const toggleLu = (id) => {
  collection.luLivre(id)
}


</script>

<template>
  <Banner background-color="green" page-name="Ma Collection"/>
  <empty-list v-if="books.length === 0">Votre collection est vide</empty-list>

  <section
      v-else
      class="grid grid-cols-4 my-5 gap-4 max-lg:grid-cols-3 max-sm:grid-cols-2 max-[514px]:grid-cols-1"
  >
    <Card
        v-for="book in books"
        :key="book.id"
        :id="book.id"
        :titre="book.volumeInfo.title"
        :auteur="book.volumeInfo.authors"
        :image="book.volumeInfo.imageLinks?.thumbnail"
        :est-ajouter="true"
        :lu="book.lu"
        @luId="toggleLu"
        @supprimerLivre="supprimerLivre"
    />
  </section>
  <dialog-suppression
      v-model="modalResponse"
      :open-modal="openModal"
  />
</template>