import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './rutas' // you can insert in this file the routes array, I decided to include in other file to have specifically all routes

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history', //avoid to set a hash before to the path /#/
    routes
})

export default router