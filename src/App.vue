<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
      <div class="hed">
        <div class="right">
          <RouterLink to="/phone">Номера</RouterLink>
          <RouterLink to="/setting">Настройки коннектора</RouterLink>
          <RouterLink to="/user">Пользователи</RouterLink>
          <RouterLink to="/playground">Песочница</RouterLink>
        </div>
        <RouterLink to="/profile">Профиль</RouterLink>
      </div>
      
      <RouterView></RouterView>
  </header>
</template>

