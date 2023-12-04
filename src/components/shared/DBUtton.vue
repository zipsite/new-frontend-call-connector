<template>
    <button class="delete"><slot></slot></button>
</template>

<script>
    export default{

    }
</script>

<style>
    .delete{
        background-color: #fff;
        display: flex;
        width: 38px;
        height: 45px;
        padding: 12px 0px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        border: none;
        outline: none;
    }

    .delete:hover{
        background-color: rgba(171, 171, 171, 0.20);
    }

    .delete:active{
        background-color: rgba(171, 171, 171, 0.50);
    }
    .delete:focus-visible{
        background-color: rgba(171, 171, 171, 0.20); 
    }
</style>