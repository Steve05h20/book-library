<script setup>
import {computed} from'vue'
import router from '@/router';
import { RouterLink } from 'vue-router';



const styleRouterLink ="mx-2 px-4 py-2 hover:bg-orange-300 rounded-lg transition-all"


const excludedRoutes = ['Details'];


const navigationLink = computed(() => {
  return router.getRoutes().filter(route => !excludedRoutes.includes(route.name))
})


</script>

<template>
    <header class="bg-orange-100 p-5 rounded-lg text-amber-950 ">
        <div class="container mx-auto h-26 flex justify-between items-center max-lg:flex-col">
            <h1 class="font-semibold text-lg">Book Store</h1>
            <nav class="flex justify-between items-center" >
                <RouterLink :class="styleRouterLink" v-for="link in navigationLink" :key="link" :to="link.path">{{ link.name }}</RouterLink>
            </nav>
        </div>
    </header>
</template>

