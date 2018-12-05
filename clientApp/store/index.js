import Vue from 'vue'
import Vuex from 'vuex'
import api from '../../api/data/index'

Vue.use(Vuex)

/*
 * Vue      Vuex 
 * data     state these both are reactive
 * methods  actions update the data & state
 * computed getters
 *      mutattions commit & track state/data changes
 */

/**
 * context => {dispatch, commit}
 * getters
 * state
 * ...
 */

const state = {
    shopingCart : [],
    allProducts: [],
    isLoaded: false
}

const getters = {
    cartItems(state){
        return state.shopingCart;
    },
    totalOrderAmount: (state) => {
        let total = 0;
        state.shopingCart.forEach((item) => {
            total += item.priceRaw
        });
        return total;
    }
}

const mutations = {
    addProductToShippingCart(state, item){
        state.shopingCart.push(item)
        localStorage.setItem('cart', JSON.stringify(state.shopingCart))
    },
    onFinishOrder(state){    
        let total = 0;
        state.shopingCart.forEach(function(item){
            total += item.priceRaw;
        })
    },
    setProducts(state, products){
        state.allProducts = products;
    },
    setProducts(state, products){
        state.allProducts = products;
        state.isLoaded = true
    }
}
const actions = {    
    fetchProducts({commit}, products){
        api.getProducts(products => {
            commit('setProducts', products)
        })
    }
}

export default new Vuex.Store({
    state, 
    mutations,
    actions,
    getters
})