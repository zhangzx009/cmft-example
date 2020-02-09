<template>
    <div class="demo-wrapper">
        <div class="cube-checkbox" :class="_containerClass" :data-pos="position">
            <label class="cube-checkbox-wrap">
                <input class="cube-checkbox-input" type="checkbox" :disabled="computedOption.disabled"
                       v-model="checkValue">
                <span class="cube-checkbox-ui" :class="_rightIconClass">
                  <i :class="_borderIconClass"></i>
                </span>
                <span class="cube-checkbox-label">
                     <slot>{{computedOption.label}}</slot>
                </span>
            </label>
        </div>
    </div>
</template>
