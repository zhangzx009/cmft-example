<template>
    <div>
        <div class="message">{{message}}</div>
        <div class="count text-purple-100">
            Count: {{ state.count }}
        </div>
        <button @click="increment">Increment</button>
    </div>
</template>
<script>
    import {computed, reactive} from "@vue/composition-api";

    export default {
        props: {
            message: {
                type: String
            }
        },
        setup(props) {
            const state = reactive({
                count: 0
            })

            const increment = () => {
                state.count += 1
            }

            return {
                state,
                increment,
                uppercasedMessage: computed(() => props.message.toUpperCase())
            }
        }
    }


</script>
