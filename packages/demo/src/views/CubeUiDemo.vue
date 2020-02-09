<template>
    <div class="cube-scontainer">
        <p>this is the cube ui demo</p>
        <api-check-box v-model="checked">checkbox</api-check-box>
    </div>
</template>

<script>
    import ApiCheckBox from '../components/Checkbox/index'

    export default {
        name: "CubeUiDemo",
        components: {
            ApiCheckBox
        },
        data(){
            return {
                checked: true,
                option: {
                    label: 'Option Checkbox',
                    value: 'optionValue',
                    disabled: false
                }
            }
        }
        // props:{
        //     demoProps:{type: String, default:'checked'}
        // },
        // data(){
        //     return {
        //         checkBox: true
        //     }
        // }
    }
</script>

<style scoped>

</style>
