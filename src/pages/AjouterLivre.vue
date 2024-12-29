<script setup>
import {ref} from "vue"
import Card from '@/components/Card.vue'
import Banner from "@/components/Banner.vue"
import Recherche from "@/components/Recherche.vue"
import useAPI from "@/composables/UseAPI.js"
import useSpaceByPlus from "@/composables/UseSpaceByPlus.js"
import useCollection from "@/composables/UseCollection.js";
import EmptyList from "@/components/EmptyList.vue";
import router from "@/router/index.js";

const search = ref("")
const books = ref([])
const isLoading = ref(false)
const error = ref(null)
const update = (update) => {
  search.value = update
}

const recherche = async () => {
  if (!search.value.trim()) return

  try {
    isLoading.value = true
    error.value = null
    books.value = []

    const data = await useAPI(
        `https://www.googleapis.com/books/v1/volumes?q=${useSpaceByPlus(search.value)}`
    )
    books.value = data
  } catch{
    error.value = "Une erreur est survenue lors de la recherche"
  } finally {
    isLoading.value = false
  }
}



const {ajouterCollection,listLivre} = useCollection()


const estDansCollection = (id) => {
  return listLivre.value.some(livre => livre.id === id)
}


const ajouterAlaCollection = (id) => {
  const livre = books.value.find(book => book.id === id)
  if (livre) {
    ajouterCollection(livre)

    books.value = []
    search.value = ""
  }
}



</script>

<template>

  <banner background-color="orange" page-name="Ajouter vos Livres">
    <Recherche
        v-model="search"
        :is-loading="isLoading"
        :on-submit="recherche"
        @valueSearch="update"
    />
  </banner>

  <p v-if="error" class="text-red-500 mt-4">{{ error }}</p>
<empty-list v-if="!isLoading && books.length === 0">Veuillez chercher un livre</empty-list>

  <section
      v-if="books.length > 0"
      class="grid grid-cols-4 my-5 gap-4 max-lg:grid-cols-3  max-sm:grid-cols-2 max-[514px]:grid-cols-1"
  >
    <Card
        v-for="book in books"
        :key="book.id"
        :id="book.id"
        :titre="book.volumeInfo.title"
        :auteur="book.volumeInfo.authors"
        :image="book.volumeInfo.imageLinks?.thumbnail"
        :est-ajouter="estDansCollection(book.id)"

        @ajouterLivre="ajouterAlaCollection(book.id)"
        @luId="alert('lu ou non lu')"
        />
  </section>
</template>