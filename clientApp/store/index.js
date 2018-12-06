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
    isLoaded: false,
    showModal: false
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
    onFinishOrder(state, isShownModal = true){    
        state.showModal = isShownModal        
    },
    setProducts(state, products){
        state.allProducts = products;
        state.isLoaded = true
    },
    setProductsFromLocalStorageToShoppingCart(state, productsFromLocalStorage){
        let parsedProducts = JSON.parse(productsFromLocalStorage)
        state.shopingCart = parsedProducts;
        
    },
    removeLocalStorageData(){
        localStorage.removeItem('cart')
        state.shopingCart = []
    },
    hideModal(state, isShownModal = false){
        state.showModal = isShownModal
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