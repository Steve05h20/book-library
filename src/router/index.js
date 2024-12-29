import Accueil from '@/pages/Accueil.vue'
import AjouterLivre from '@/pages/AjouterLivre.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ZoomLivre from "@/pages/ZoomLivre.vue";



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'Accueil', component: Accueil },
    { path: '/ajout-livre', name: 'Ajout de livre', component: AjouterLivre },
    { path: '/livre-detail/:id', name: 'Details', component: ZoomLivre },
  ],
})

export default router
