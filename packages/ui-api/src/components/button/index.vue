<template>
    <div>
        <some-button message="这个是example" :state="state" :increment="increment"></some-button>
        <h1>this is the uppercaseMessage {{uppercaseMessage}}</h1>
    </div>
</template>
<script>
    //import {computed, reactive} from "@vue/composition-api";
    import useCount from "./useCount.js"
    import buttonTemplate from './buttonTemplate'

    export default {
        components: {
            someButton: buttonTemplate
        },
        props: {
            message: {
                type: String
            }
        },
        setup(props) {
            const {state, increment, uppercaseMessage} = useCount(0, props.message)
            return {state, increment, uppercaseMessage}
        }
    }


</script>
