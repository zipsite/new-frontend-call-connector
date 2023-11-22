<template>

    <div>
        <CButton textButton="Создать номер"><img src="../assets/img/pencil.png"></CButton>
    </div>
      
    <CButtonExmple buttonText="Кнопка" ><img src=""></CButtonExmple>
    <Per></Per>
    <CItem></CItem>
    <CInfo></CInfo>
    <CNotify></CNotify>
    <ENotify></ENotify> 
</template>

<script>
import CButton from '../components/shared/CButton.vue';
import CButtonExmple from '../components/shared/CButtonExmple.vue';
import CInput from '../components/shared/CInput.vue';
import DBUtton from '../components/shared/DBUtton.vue';
import CItem from '../components/shared/CItem.vue';
import CInfo from '../components/CInfo.vue';
import CNotify from '../components/shared/СNotify.vue'
import ENotify from '../components/shared/ENotify.vue'
import Per from '../components/shared/Per.vue';

    export default {
        components: {
            CButton,
            CButtonExmple,
            CInput,
            DBUtton,
            CItem,
            CInfo,
            CNotify,
            ENotify,
            Per,
        },
        data(){
            return{

            }
        },
        methods:{
            clickBtn(){
                console.log('Btn clicked')
            }
        }
    }
</script>

<style>
    .gor{
        display: flex;
    }
</style>