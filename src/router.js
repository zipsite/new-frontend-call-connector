import * as VueRouter from 'vue-router'
import PhoneView from './pages/PhoneView.vue'
import SettingView from './pages/SettingView.vue'
import UserView from './pages/UserView.vue'
import ProfileView from './pages/ProfileView.vue'
import PlaygroundView from './pages/PlaygroundView.vue'


export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes: [
    { path: '/phone', component: PhoneView },
    { path: '/setting', component: SettingView },
    { path: '/user', component: UserView },
    { path: '/profile', component: ProfileView },
    { path: '/playground', component: PlaygroundView},
  ],
});
