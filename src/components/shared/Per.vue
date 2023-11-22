<template>
    <div class="center">
        <div class="line"></div>
        <div class="line"></div>
    </div>
</template>

<script>
    export default{

    }
</script>

<style scoped>
    .center{
        display: flex;
        flex-direction: column;
        width: 38px;
        height: 45px;
        padding: 16px 10px;
        align-items: center;
        gap: 10px;
    }

    .center:hover{
        background-color: rgba(171, 171, 171, 0.20);
    }

    .center:active{
        background-color: rgba(171, 171, 171, 0.50);
    }
    .line{
        background-color: #ABABAB;
        width: 18px;
        height: 2px;
        border-radius: 2px;
    }
</style>