<template>
    <checkbox-provider slot-scope="{
                isSquare,
                _containerClass,
                _rightIconClass,
                _borderIconClass,
                checkValue,
                computedOption,
                isInGroup}">
        <checkbox-template
                v-bind="{ isSquare,
                _containerClass,
                _rightIconClass,
                _borderIconClass,
                checkValue,
                computedOption,
                isInGroup}"
        ></checkbox-template>
    </checkbox-provider>
</template>

<script>
    import CheckboxProvider from "./CheckboxProvider"
    import CheckboxTemplate from "./CheckboxTemplate"

    export default {
        name: "api-checkbox",
        components: {
            CheckboxProvider,
            CheckboxTemplate
        }
    }
</script>

