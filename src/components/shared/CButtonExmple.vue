<template>
    <button :class="buttonClass" @click="handleClick" :disabled="disable">
        <div class="state-layer">
            <p class="place-text">{{ buttonText }}</p>
            <span class="icon-font">{{ icon }}</span>
        </div>
    </button>
</template>

<script>
export default {
    props: {
        buttonText: {
            type: String,
            default: ""
        },
        disable: {
            type: Boolean,
            default: false
        },
        icon:{
            type: String,
            default:""
        },
        buttonClass:{
            type: String,
            default: 'default-button'
        }
    },
    data() {
        return {
        }
    },
    methods: {
        handleClick() {
        }
    },
}
</script>

<style >

/* Основной стиль */
.default-button {
    border: none;
    border-radius: 2px;
    display: block;
    cursor: pointer;
    outline: none;
    background-color: #737FF3;
    color: #ffffff;
}

.default-button > .state-layer {
    display: flex;
    padding: 12px 18px;
}

.default-button {
    background-color: #737FF3;
    color: #ffffff;
}

.default-button:hover>.state-layer {
    background-color: #ffffff20;
}

.default-button:active>.state-layer {
    background-color: #ffffff35;
}

.default-button:focus-visible>.state-layer {
    background-color: #ffffff20;
}

.default-button:disabled {
    background-color: #C8C8C8;
    color: #3A3A3A;
}


/* Стиль второй кнопки */
.primary-button {
    border: none;
    border-radius: 2px;
    display: block;
    cursor: pointer;
    outline: none;
    background-color: #ffffff;
    color: #3a3a3a;
}

.primary-button > .state-layer {
    display: flex;
    padding: 12px 18px;
}

.primary-button{
    background-color: #ffffff;
    color: #3a3a3a;
}
.primary-button:hover>.state-layer {
    background-color: #737FF320;
}

.primary-button:active>.state-layer {
    background-color: #737FF335;
}

.primary-button:focus-visible>.state-layer {
    background-color: #737FF335;
}

.primary-button:disabled {
    background-color: #ffffff;
    color: #AFAFAF;
}
</style>