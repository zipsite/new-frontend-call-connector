<template>
    <span class="icon-font">search</span>
    <CButton textButton="Создать номер"><img src="../assets/img/pencil.png"></CButton>
    <CInput :disable="dataInput.disable" :label="dataInput.label" :error="error"></CInput>
    <DBUtton><img src="../assets/img/close.png"></DBUtton>
    <CItem></CItem>
    <CInfo></CInfo>
    <CSelect :options="options"></CSelect>
    <Notify></Notify>
    <Create></Create>
    <CButtonExmple buttonText="Добавить номер"></CButtonExmple>

</template>

<script>
import CButton from '../components/shared/CButton.vue';
import CInput from '../components/shared/CInput.vue';
import DBUtton from '../components/shared/DBUtton.vue';
import CItem from '../components/shared/CItem.vue';
import CInfo from '../components/CInfo.vue';
import Notify from '../components/shared/Notify.vue';
import CSelect from '../components/shared/CSelect.vue';
import Create from '../components/Create.vue';
import CButtonExmple from '../components/shared/CButtonExmple.vue';



export default {
    components: {
    CButton,
    CInput,
    DBUtton,
    CItem,
    CInfo,
    Notify,
    CSelect,
    Create,
    CButtonExmple,
},
    data() {
        return {
            dataInput: {
                label: "",
                disable: false,
            },
            options: [//Массив для селектора (Select)
                { name: 'Option1', value: 1 },
                { name: 'Option2', value: 2 },
                { name: 'Option3', value: 3 },
                { name: 'Option4', value: 4 }
            ],
            error: "ошибка"
        }
    },

}
</script>

<style>

</style>