<script>
    import useCount from "./useCount.js"
    /*
    *    Provider logic tier
    *
    *
    * */
    export default {
        props: {
            message: {
                type: String
            }
        },
        setup(props) {
            const {state, increment, uppercaseMessage} = useCount(0, props.message)
            return {state, increment, uppercaseMessage}
        },

        render() {
            return this.$scopedSlots.default(
                {
                    result: this.state,
                    upMessage: this.uppercaseMessage,
                    increment: this.increment
                })
        }
    }
</script>
