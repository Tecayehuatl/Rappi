import Vue from 'vue'
import './assets/css/main.scss'
import router from 'router/index'
import appRoot from 'views/app-root'
import store from 'store/index'

Vue.component('app-root', appRoot)

new Vue({
    store,
    router
}).$mount('#app')