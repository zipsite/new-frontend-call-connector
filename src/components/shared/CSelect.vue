<template>
    <label class="label">{{ label }}</label>
    <select v-for="item in items" :key="role.id">
        <option >Не выбрано</option>
        <option ></option>
        <option ></option>
    </select>
</template>

<script>
    export default{
        props:{
            label:{
                type: String,
                default: ""
            },
        },
        
    }
</script>

<style scoped>
    .label {
        padding: 6px 12px;
        font-size: 14px;
        color: #3A3A3A;
    }

    select{
        /* width: 100%; */
        width: 712px;
        display: flex;
        padding: 10px 14px;
        border: 1px solid rgba(0, 0, 0, 0.24);
        background: #FFF;
    }

    select:hover {
        border: 1px solid rgba(0, 0, 0, 0.50);
    }

    select:focus-visible {
        border: 1px solid rgba(114, 127, 243, 1);
        outline: none;
    }

    select:disabled {
        border: 1px solid rgba(0, 0, 0, 0.20);
        color: #C8C8C8;
    }
</style>