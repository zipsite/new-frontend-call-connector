<script setup>

</script>

<template>
    <div class="header">
        <div class="nav-menu">
            <template v-for="link in routeLinks">
                <div :class="tabActive(link.href)">
                    <RouterLink class="button" :to="link.href">{{link.title}}</RouterLink>
                    <div class="line"></div>
                </div>
            </template>
        </div>
        <div :class="tabActive('/profile')">
            <RouterLink class="button" to="/profile">Профиль</RouterLink>
            <div class="line"></div>
        </div>
    </div>
    <RouterView></RouterView>
</template>

<script>
export default {
    data() {
        return {
            routeLinks: [
                { href: "/phone", title: "Номера" },
                { href: "/setting", title: "Настройки коннектора" },
                { href: "/user", title: "Пользователи" },
                { href: "/playground", title: "Песочница" },
            ],
        };
    },
    methods: {
        tabActive(href) {
            let classes = {
                "nav-tab": true,
                "active": false,
            };
            
            let path = this.$route.fullPath;
            if (href == path) {
                classes['active'] = true;
            }
            return classes;
        }
    }
}
</script>

<style scoped>
.header {
    display: flex;
    padding: 12px 32px;
    align-self: stretch;
    gap: 24px;
}


.nav-menu {
    display: flex;
    flex-direction: row;
    gap: 24px;
    flex: 1 0 auto;
}

.nav-tab {
    display: flex;
    flex-direction: column;
    gap:4px;
}

.nav-tab .line {
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 2px;
}

.nav-tab .button {
    display: block;
    padding: 12px 24px;
    color: #3a3a3a;
    text-decoration: none;
    border-radius: 2px;
    transition: all .8 ease;
}

.nav-tab:hover .button {
    background-color: #7380f32d;
}



.nav-tab.active .line {
    background-color: #737FF3;
}


/* .nav-link {
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

.nav-tab:hover > .line{
    background-color: #737FF3;
}
.line {
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 2px;
}  */
</style>