<template>
    <button class="c-button-img">{{ textButton }} <slot></slot></button>
    
</template>

<script>
export default {
    props: {
        textButton: {
            type: String,
            default: "text"
        }
    }
}
</script>

<style>

.c-button-img {
    height: 44px;
    padding: 12px 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #737FF3;
    color: #ffffff;
    border: none;
    gap: 6px;
    cursor: pointer;
}

.c-button-img:hover {
    background: linear-gradient(rgba(255, 255, 255, 0.20), rgba(255, 255, 255, 0.20)),linear-gradient(#737FF3, #737FF3);
}

.c-button-img:active {
    background:  linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)),linear-gradient(#737FF3, #737FF3);
}

.c-buttton-img:disabled {
    background-color: #C8C8C8;
    color: #3A3A3A;
}

</style>