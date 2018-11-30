import Vue from 'vue'
import './assets/css/main.scss'
import router from 'router/index'
import appRoot from 'views/app-root'

Vue.component('app-root', appRoot)

new Vue({
    router
}).$mount('#app')