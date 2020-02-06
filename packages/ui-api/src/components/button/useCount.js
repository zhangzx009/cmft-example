import {computed, reactive} from "@vue/composition-api";

export default function useCount(initNum, initMessage) {
    const state = reactive({count: initNum})
    const increment = () => {
        state.count += 1
    }
    return {
        state,
        increment,
        uppercaseMessage: computed(() => initMessage.toUpperCase())
    }
}
