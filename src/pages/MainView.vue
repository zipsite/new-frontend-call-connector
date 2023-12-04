<script setup>

</script>

<template>
    <div class="hed">
        <div class="right">
            <div class="block">
                <RouterLink class="nav-link" to="/phone">Номера</RouterLink>
                <div class="line"></div>
            </div>
            <div class="block">
                <RouterLink class="nav-link" to="/setting">Настройки коннектора</RouterLink>
                <div class="line"></div>
            </div>
            <div class="block">
                <RouterLink class="nav-link" to="/user">Пользователи</RouterLink>
                <div class="line"></div>
            </div>
            <div class="block">
                <RouterLink class="nav-link" to="/playground">Песочница</RouterLink>
                <div class="line"></div>
            </div>
        </div>
        <div class="block">
            <RouterLink class="nav-link" to="/profile">Профиль</RouterLink>
            <div class="line"></div>
        </div>
    </div>
    <RouterView></RouterView>
</template>

<style scoped>
.nav-link {
    padding: 12px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #3a3a3a;
    font-style: normal;
    gap: 4px;
    text-decoration: none; 
    color: inherit;
}

.block:hover > .line{
    background-color: #737FF3;
}
.line {
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 2px;
} 



</style>