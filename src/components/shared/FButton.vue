<template >
    <CButtonExmple class="c-button-second" :disabled="disable">
        <slot></slot>
    </CButtonExmple>
</template>

<script>
import CButtonExmple from './CButtonExmple.vue';
export default {
    components: {
        CButtonExmple,
    },
    props: {
        disable: {
            type: Boolean,
            default: false
        },
    }
}
</script>

<style>
.c-button-second {
    background-color: #737FF3;
    color: #ffffff;
}

.c-button-second:hover>.state-layer {
    background-color: #ffffff20;
}

.c-button-second:active>.state-layer {
    background-color: #ffffff35;
}

.c-button-second:focus-visible>.state-layer {
    background-color: #ffffff20;
}

.c-buttton-second:disabled {
    background-color: #C8C8C8;
    color: #3A3A3A;
}
</style>