d<template>
    <button :class="computedClass" @click="$emit('c-click')" :disabled="disable">
        <div class="state-layer">
            <p class="place-text">{{ buttonText }}<slot></slot></p>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: "ButtonText"
        },
        disable: {
            type: Boolean,
            default: false
        },
    },
    data() {
        return {
        }
    },
    computed: {
        computedClass() {
            return "c-button-example";
        },
    }
}
</script>

<style>
.c-button-example {
    border: none;
    border-radius: 2px;
    display: block;
    background-color: #737FF3;
    color: #FFF;
    cursor: pointer;
    outline: none;
}

.c-button-example > .state-layer {
    display: flex;
    padding: 12px 18px;
}

.c-button-example:hover > .state-layer{
    background-color: #ffffff20;
} 

.c-button-example:active > .state-layer {
    background-color: #ffffff35;                                                                                                    
}

.c-button-example:focus-visible > .state-layer {
    background-color: #ffffff35;                                                                                                    
}

.c-buttton-example:disabled {
    background-color: #C8C8C8;
    color: #3A3A3A;
}
</style>