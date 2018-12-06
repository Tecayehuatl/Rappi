<template>
     <main class="o-main">
        <header-view></header-view>        
        <aside class="o-menu">
            <ul class="c-menu-list">
                <div class="c-panel">
                    <div class="c-panel__title">
                        Lista del carrito de compras
                    </div>
                    <div class="c-panel__body">
                        <div v-if="cartItems.length <= 0">Aún no hay artículos en el carrito de compras</div>
                        <div class="c-panel__list" v-for="item in cartItems"><span>{{item.name}}</span><span>{{item.price}}</span></div>
                        <button class="c-button c-button--orange" v-if="cartItems.length > 0" @click="onFinishOrder">
                        Finalizar compra
                        </button>             
                        <br>
                        <p>Total:  {{totalOrderAmount | currency}}</p>
                    </div>
                </div>
                <!-- <li class="c-menu-list__item" v-for="category in categories" :key="category.id">
                    {{category.name}} 
                    <ul class="c-sub-menu-list">
                        <li class="c-sub-menu-list__item">vino tinto</li>
                        <li class="c-sub-menu-list__item">vino rojo</li>
                    </ul>
                </li> -->
            </ul>
        </aside>
        <article class="o-main__container">
            <h2 class="o-main__title">
                Productos
            </h2>  
            <p class="o-main__loading" v-if="!isLoaded">
                <img  src="../assets/img/spin.gif" alt="loading"/>
            </p>          
            <ul v-else class="c-products">
                <summary-item v-for="item in products" :key="item.id" v-bind:item="item"></summary-item>
            </ul>            
        </article>        
    </main>
</template>
<script>
import summaryItem from 'components/summary-item'
import headerView from 'views/header'
import api from '../../api/data/index'
import { mapGetters } from 'vuex'

export default {
    data(){
        return {
        }
    },
    computed:{
        ...mapGetters({
            totalOrderAmount: 'totalOrderAmount',
            cartItems: 'cartItems'
        }),
        products(){
            return this.$store.state.allProducts;
        },
        isLoaded(){
            return this.$store.state.isLoaded;
        }
    },
    components: {
        "summary-item": summaryItem,
        "header-view": headerView
    },
    methods: {
        onFinishOrder(){
            this.$store.commit('onFinishOrder')            
        },
    },
    mounted(){
        this.$store.dispatch('fetchProducts')
        if(window.localStorage.cart) 
            this.$store.commit('setProductsFromLocalStorageToShoppingCart', localStorage.cart)
        
    }
}
</script>
