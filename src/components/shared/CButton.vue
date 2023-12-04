<template>
    <button class="c-button-img">{{ textButton }} <slot></slot></button>
    
</template>

<script>
export default {
    props: {
        textButton: {
            type: String,
            default: "text"
        },
        
    }
}
</script>

<style scoped>

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
    outline: none;
}

.c-button-img:hover{
    background-color: #737FF380;
}

.c-button-img:active{
    background-color: #737FF365;
}

.c-button-img:focus-visible{
    background-color: #737FF380;
}

.c-button-img:disabled{
    background-color: #C8C8C8;
    color: #3A3A3A;
}
</style>