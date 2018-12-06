import Vue from 'vue'
import './assets/css/main.scss'
import router from 'router/index'
import appRoot from 'views/app-root'
import store from 'store/index'
import {currency} from 'assets/js/libs/currency'
import modal from 'modals/modal'

Vue.filter('currency', currency)
Vue.component('app-root', appRoot)
Vue.component('modal', modal)

new Vue({
    store,
    router,    
    computed: {
      showModal(){
        return this.$store.state.showModal
      }
    }
}).$mount('#app')