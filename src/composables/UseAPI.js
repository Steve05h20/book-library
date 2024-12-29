import {ref} from 'vue'

export default async function useAPI(url){
    try{
    const lists = ref({})
    const appel = (await fetch(url)).json()
    lists.value=await appel.then(data => data.items)
    return lists.value
    }catch (e){
        console.error("Erreur lors de la recuperation de donnée",e.message)
        return lists.value={}
    }
}
