import { ref } from "vue"

const listLivre = ref([])

export default function useCollection() {
    const ajouterCollection = (livre) => {
        if (!listLivre.value.some(item => item.id === livre.id)) {
            livre = { ...livre, lu: false }
            listLivre.value.push(livre)
            console.log("Livre ajouté:", livre)
        } else {
            alert("Livre déjà présent dans la collection")
        }
    }

    const supprimerLivre = (id) => {
        const livreExiste = listLivre.value.find(item => item.id === id)

        if (livreExiste) {
            listLivre.value = listLivre.value.filter(item => item.id !== id)
            console.log("Livre supprimé avec succès")
        } else {
            alert("Livre non trouvé dans la collection")
        }
    }

    const luLivre = (id) => {
        listLivre.value = listLivre.value.map(livre =>
            livre.id === id ? { ...livre, lu: !livre.lu } : livre
        )
    }

    const afficherUnlivre = (id)=>{
        return listLivre.value.find(item => item.id === id)
    }

    const logList = () => {
        console.log("Collection actuelle:", listLivre.value)
    }

    return {
        listLivre,
        ajouterCollection,
        supprimerLivre,
        logList,
        luLivre,
        afficherUnlivre
    }
}