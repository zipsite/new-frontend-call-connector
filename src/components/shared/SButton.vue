<template >
    <CButtonExmple class="c-button-first" :disabled="disable">
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
</script >

<style >
.c-button-first{
    background-color: #ffffff;
    color: #3a3a3a;
}
.c-button-first:hover>.state-layer {
    background-color: #737FF320;
}

.c-button-first:active>.state-layer {
    background-color: #737FF335;
}

.c-button-first:focus-visible>.state-layer {
    background-color: #737FF335;
}

.c-button-first:disabled {
    background-color: #ffffff;
    color: #AFAFAF;
}
</style>