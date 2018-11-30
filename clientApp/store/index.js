import Vue from 'vue'
import Vuex from 'vuex'
//import products from 'assets/json/products'

Vue.use(Vuex)

/*
 * Vue      Vuex 
 * data     state these both are reactive
 * methods  actions update the data & state
 * computed getters
 *      mutattions commit & track state/data changes
 */

/**
 * context =>
 * dispatch
 * getters
 * commit
 * state
 * ...
 */

const state = {
    shopingCart : [],
    totalShipping: 0
}

const getters = {
    totalShipping: (state) => {
        //return state.totalShipping + 1;
    }
}

const mutations = {
    addProductToShippingCart(state, item){
        state.shopingCart.push(item)
        console.log(`Se se ejecuto por medio del commit ${state}`)
        console.log(item)
        /*console.log(state)*/
    }
}
const actions = {
    
}

export default new Vuex.Store({
    state, 
    mutations,
    actions,
    getters
})