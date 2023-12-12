<template>
  <div class="center">
    <div class="block-right">
      <CButtonExmple buttonText="Создать номер">{{ icons }}</CButtonExmple>
      
    </div>
    <SettingUser>
      <div></div>
    </SettingUser>
  </div>
</template>

<script>
import CButtonExmple from '../components/shared/CButtonExmple.vue';


  export default{
    components:{
      CButtonExmple
    },
    data(){
      return{
        admin:[
          {name: "Biba", id: 1},
          {name: "Boba", id: 2},
          {name: "Lypa", id: 3},
          {name: "Pypa", id: 4},
        ]
      }
    },
    
  } 
</script>

<style>
  .block-right{
    display: flex;
    width: 360px;
    height: 590px;
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
    flex-shrink: 0;
    border: 1px solid rgba(0, 0, 0, 0.24);
  }
</style>