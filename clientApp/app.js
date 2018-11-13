import Vue from 'vue'
import './assets/css/main.scss'
import appRoot from 'views/app-root'
//import router from 'router/index'
//import {sync} from 'vuex-router-sync'

//sync(router)

Vue.component('app-root', appRoot)

new Vue({
    //router,    
    el: '#app'
})