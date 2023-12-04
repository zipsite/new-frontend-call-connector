<template>
  <div class="center">
    <div class="block-right">
      <CButton textButton="Создать номер"><img src="../assets/img/pencil.png"></CButton>
      <button class="but2">BIBA BOBA</button>
    </div>
    <SettingUser>
      <div></div>
    </SettingUser>
  </div>
</template>

<script>

  export default{
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
    components:{

    },
  } 
</script>

<style>

</style>