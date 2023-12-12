<template>
    <div class="block">
        
    </div>
</template>

<script>
import CItem from './shared/CItem.vue';
import DBUtton from './shared/DBUtton.vue';
import CInput from './shared/CInput.vue';


export default{
    components:{
            CItem,
            DBUtton,
            CInput,
        }
}
</script>

<style scoped>
    .gor{
        display: flex;
    }
    
    .vert{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap:8px
    }
</style>