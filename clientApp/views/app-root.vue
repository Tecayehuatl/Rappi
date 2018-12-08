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
            <div class="c-panel c-panel--sort">
                <div class="c-panel__title">
                    Ordenar productos por:
                    <select @change="onChangeSortOrder()" v-model="sortSelected">
                          <option disabled value="">Ordenar por...</option>
                        <option v-for="option in sortOptions" :value="option.value">{{option.text}}</option>
                    </select>
                </div>
            </div>   
            <h2 class="o-main__title">
                Productos
            </h2>  
            <p class="o-main__loading" v-if="!isLoaded">
                <img  src="../assets/img/spin.gif" alt="loading"/>
            </p>          
            <ul v-else class="c-products">
                <summary-item v-for="item in filteredProducts" :key="item.id" v-bind:item="item"></summary-item>
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
            sortSelected: '',
            sortOptions: [
                { text: 'Disponibilidad', value: 'availability'},
                { text: 'Stock', value: 'stock'}
            ]
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
        },
        filteredProducts(){
            return this.products.filter((product) => product.name.match(this.$store.state.searchText))
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
        onChangeSortOrder(){
            
            if(this.sortSelected === 'availability'){                
                this.$store.state.allProducts = this.filteredProducts.filter((item) => item.available === true)
            }
            else if(this.sortSelected === 'stock'){
                this.$store.state.allProducts = this.filteredProducts.sort((a, b) => b.quantity - a.quantity)               
            }
        }
    },
    mounted(){
        this.$store.dispatch('fetchProducts')
        if(window.localStorage.cart) 
            this.$store.commit('setProductsFromLocalStorageToShoppingCart', localStorage.cart)
    }
}
</script>
