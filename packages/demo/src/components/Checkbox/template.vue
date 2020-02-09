<template functional>
    <div class="cube-checkbox" :class="props._containerClass" :data-pros="props.position" :option="props.option">
        <label class="cube-checkbox-wrap" :class="props._wrapClass">
            <input class="cube-checkbox-input"
                   type="checkbox"
                   :disabled="props.disabled"
                   :value="props.checkValue"
                   @input="listeners.input && listeners.input($event.target.checked)">
            <span class="cube-checkbox-ui" :class="props._borderIconClass">
        <i :class="props._rightIconClass"></i>
      </span>
            <span class="cube-checkbox-label">
        <slot>{{props.label}}</slot>
      </span>
        </label>
    </div>
</template>

<style lang="css">

    /*input[type="checkbox"]{*/
    /*    position: absolute;*/
    /*    clip: rect(0,0,0,0);*/
    /*}*/

    /*input[type="checkbox"] + span::before{*/
    /*    content: '\a0';*/
    /*    display: inline-block;*/
    /*    vertical-align: .2em;*/
    /*    width: .8em;*/
    /*    height: .8em;*/
    /*    margin-right: .5em;*/
    /*    border-radius: .2em;*/
    /*    background: white;*/
    /*    text-indent: .15em;*/
    /*    line-height: .55em;*/
    /*}*/

    /*input[type="checkbox"]:checked + span::before{*/
    /*    content: '\2713';*/
    /*    background: yellowgreen;*/
    /*}*/

    /*input[type="checkbox"]:focus + label::before {*/
    /*    box-shadow: 0 0 .1em .1em #58a;*/
    /*}*/
    /*input[type="checkbox"]:disabled + label::before {*/
    /*    background: gray;*/
    /*    box-shadow: none;*/
    /*    color: #555;*/
    /*}*/
</style>
