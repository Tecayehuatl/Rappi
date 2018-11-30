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
    cartItems(state){
        return state.shopingCart;
    },
    totalShipping: (state) => {
        let total = 0;
        state.shopingCart.forEach((item) => {
            console.log(item.priceRaw)
            total += item.priceRaw
        });
        return state.totalShipping = total;
    }
}

const mutations = {
    addProductToShippingCart(state, item){
        state.shopingCart.push(item)
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