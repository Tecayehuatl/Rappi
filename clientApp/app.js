import Vue from 'vue'
import appRoot from 'views/app-root'

Vue.component('app-root', appRoot)

new Vue({
    el: '#app'    
})

// const app = new Vue({
//     appRoot
// })

// export {
//     app
// }