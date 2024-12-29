<script setup>
import ButtonCard from "@/components/Button-Card.vue";

import router from '@/router';
const props = defineProps({
    image:{typeof:String,required:true},
    titre:{typeof:String,required:true},
    lu:{typeof:Boolean,required:false,default:false},
    estAjouter:{typeof:Boolean,required:true},
    id:{typeof:Number,required:true},
})

const displayDetail = () => {
  router.push('/livre-detail/'+props.id)
}
  const emit= defineEmits(["ajouterLivre","supprimerLivre","luId"])
  const supprimerId = () => {emit("supprimerLivre",props.id)}
  const ajouterId = () => {emit("ajouterLivre",props.id)}
  const luId = () => {emit("luId",props.id)}
</script>

<template>
       <div :class="{
      'border-8 border-green-200': lu
    }" class="w-60 h-72 shadow-2xl text-no m-4 group hover:h-80 p-5 rounded-lg all-transition duration-300 ease-out bg-white flex max-lg:h-64 flex-col justify-between items-center mx-auto">
            <img @click='displayDetail' :src="image" :alt="titre" class="object-fit w-40 bg-gray-100 rounded-lg h-40">
            <p class="text-md font-medium">{{titre}}</p>
         <div class="flex items-center gap-2">
            <ButtonCard :color="estAjouter?'red':'orange'" :on-click="estAjouter?supprimerId:ajouterId">{{estAjouter ? "supprimer" : "Ajouter"}}</ButtonCard>
            <ButtonCard v-show="estAjouter" :color="lu?'green':'blue'" :on-click='luId'>{{lu ? "Non-lu" : "Lu"}}</ButtonCard>
         </div>
       </div>
</template>

