<template>
    <div>
        <div class="message">{{message}}</div>
        <div class="count text-purple-500">
            Count: {{ state.count }}
        </div>
        <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" @click="increment">Increment</button>
    </div>
</template>
<script>
    //import {computed, reactive} from "@vue/composition-api";
    import useCount from "./useCount.js"

    export default {
        props: {
            message: {
                type: String
            }
        },
        setup(props) {
            const {state, increment, uppercaseMessage} = useCount(0, props.message)
            // const state = reactive({
            //     count: 0
            // })
            //
            // const increment = () => {
            //     state.count += 1
            // }
            //
            // return {
            //     state,
            //     increment,
            //     uppercasedMessage: computed(() => props.message.toUpperCase())
            // }
            return {state, increment, uppercaseMessage}
        }
    }


</script>
