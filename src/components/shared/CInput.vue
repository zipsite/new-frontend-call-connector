<template>
    <input class="cinput">
</template>

<script>
    export default{

    }
</script>

<style>
    .cinput{
        width: 712px;
        display: flex;
        padding: 12px 24px;
        align-items: flex-start;
        gap: 10px;
        align-self: stretch;
        border-radius: 2px;
        border: 1px solid rgba(0, 0, 0, 0.24);
    }

    .cinput:hover{
        border: 1px solid rgba(0, 0, 0, 0.50);
    }

    .cinput:focus-visible{
        border: 1px solid rgba(114, 127, 243, 1);
        outline: none;                                                                                              
    }
</style>