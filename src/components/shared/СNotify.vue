<template>
    <template v-if="success !== ''" >
        <div class="success">{{ success }}</div>
    </template>
    <template v-if="error !==''">
        <div class="error">{{ error }}</div>
    </template>
</template>

<script>
    export default{
        props:{
            success:{
                type: String,
                default:"Сохранения применены"
            },
            error:{
                type: String,
                default:""
            },
        },
        methods:{
            
        },
    }
</script>

<style scoped>
    .success {
        background-color: #BAFFB9;
        display: inline-flex;
        padding: 12px 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
        
    }
    .error{
        background-color: #FFCBBF;
        display: inline-flex;
        padding: 12px 20px;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }
</style>