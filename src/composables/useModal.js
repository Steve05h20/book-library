import {ref} from 'vue'
export default function useModal ()  {
    const openModal = ref(false)
    const modalResponse = ref('')
    const currentId = ref(null)

    const openModalWithId = (id) => {
        currentId.value = id
        openModal.value = true
    }

    const closeModal = () => {
        openModal.value = false
        modalResponse.value = ''
        currentId.value = null
    }

    return {
        openModal,
        modalResponse,
        currentId,
        openModalWithId,
        closeModal
    }
}