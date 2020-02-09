<script>
    import {reactive, ref, computed, watch} from '@vue/composition-api'

    const COMPONENT_NAME = 'api-checkbox'
    const EVENT_INPUT = 'input'
    const EVENT_CHECKED = 'checked'
    const EVENT_CANCLE_CHECKED = 'cancel-checked'

    export default {
        name: COMPONENT_NAME,
        props: {
            value: {
                type: [Boolean, String]
            },
            label: {
                type: [Boolean, String]
            },
            disabled: {
                type: Boolean,
                default: false
            },
            option: {
                type: [Boolean, String, Object],
                default() {
                    return {
                        _def_option: true
                    }
                }
            },
            position: {
                type: String,
                default: 'left'
            },
            shape: {
                type: String,
                default: 'circle'
            },
            hollowStyle: {
                type: Boolean,
                default: false
            }
        },
        setup(props, context) {
            /*
            *  data parent
            *  may not need parent variable
            *
            * */
            const isInGroup = Boolean(context.parent._checkboxGroup)
            const isInHorizontalGroup = isInGroup && (context.parent.horizontal || context.parent.colNum > 1)

            console.log(context)

            const checkValue = ref(false)

            const computedOption = reactive({
                label: computed(() => {
                    if (props.option._def_option === true) {
                        return props.label
                    } else {
                        return props.option.label
                    }
                }),
                value: computed(() => {
                    if (props.option._def_option === true) {
                        return props.label
                    } else {
                        return props.option.value
                    }
                }),
                disabled: computed(() => {
                    if (props.option._def_option === true) {
                        return props.disabled
                    } else {
                        return false
                    }
                }),
            })

            const changeCheck = watch(checkValue, (newVal) => {
                const value = computedOption.value
                const emitValue = value && newVal ? value : newVal
                const parentEmitEvent = newVal ? EVENT_CHECKED : EVENT_CANCLE_CHECKED
                context.emit(EVENT_INPUT, emitValue)
                if (isInGroup) {
                    context.parent.emit(parentEmitEvent, value || newVal)
                }
            })


            /*
            *   style section
            *   todo: css property to handle
            *
            * */
            const isSquare = computed(() => {
                let checkTrue = (props.shape === 'square' || props.hollowStyle)
                return checkTrue
            })
            const _rightIconClass = computed(() => {

                return isSquare.value ? 'cubeic-square-border' : 'cubeic-round-border'
            })
            const _borderIconClass = computed(() => {
                return isSquare.value ? 'cubeic-square-right' : 'cubeic-right'
            })


            /*
            *    useHook method
            *
            * */


            const _containerClass = reactive({
                'cube-checkbox-hollow': props.hollowStyle,
                'cube-checkbox_checked': checkValue,
                'cube-checkbox_disabled': computedOption.disabled,
                'border-right-1px': false
            })

            return {
                isSquare,
                _containerClass,
                _rightIconClass,
                _borderIconClass,
                checkValue,
                computedOption,
                isInGroup
            }
        },
        render() {
            return this.$scopedSlots.default(
                {
                    isSquare: this.isSquare,
                    _containerClass: this._containerClass,
                    _rightIconClass: this._rightIconClass,
                    _borderIconClass: this._borderIconClass,
                    checkValue: this.checkValue,
                    computedOption: this.computedOption,
                    isInGroupt: this.isInGroupt
                })
        }
    }
</script>
