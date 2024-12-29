import {ref} from "vue";

export default function useSpaceByPlus(value) {
    const mots = ref(value)
    mots.value = mots.value.replaceAll(" ", '+');
    return mots.value
}


