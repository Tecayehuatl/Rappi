<template>
    <div>
        <header-view></header-view>
        <div class="c-detail-item">        
            <div class="c-detail-1">
                <div class="c-detail-1__image">
                    <figure class="c-detail-item__figure">
                    <img class="c-detail-item__image" src="https://via.placeholder.com/150C/O https://placeholder.com/ " alt="">
                    <figcaption class="c-detail-item__caption">Fig.1 - Trulli, Puglia, Italy.</figcaption>
                    </figure>  
                </div>           
                <div>
                    <h1 class="c-detail-item__title">
                    <span class="bs bs-price-tags"></span> Artículo: {{ item.name }}
                    </h1>
                    <p class="c-detail-item__text">
                        <span class="bs bs-coin-dollar"></span> <span>Precio: </span>
                        <span class="c-detail-item__text c-detail-item__text--bold">{{item.price}}</span>
                    </p>
                    <p class="c-detail-item__text">
                        <span class="bs bs-pushpin"></span> <span>Solo quedan en stock: </span>
                        <span class="c-detail-item__text c-detail-item__text--bold">{{item.quantity}}</span>
                    </p>
                    <p class="c-detail-item__added" :class="itemAddedToShopingCart ? 'c-detail-item__added--shown': ''">
                        ✅ Artículo agregado al carrito
                    </p>
                    <button class="c-button c-button--orange" @click="addToCart" :class="item.available === true ? '' : 'c-button--disabled'"
                    :disabled="item.available === false">
                        <span class="bs bs-plus"></span> Agregar al carrito
                    </button>                
                    <br>
                    <br>
                    <button class="c-button c-button--outline" @click="goHome"><span class="bs bs-home"></span> Ir al inicio</button>
                    <br>
                    <br>
                </div>
            </div>
            <div class="c-detail-2">
                <div class="c-panel">
                    <div class="c-panel__title">
                        Lista del carrito de compras <span class="bs bs-cart"></span>
                    </div>
                    <div class="c-panel__body">
                        <div v-if="cartItems.length <= 0">Aún no hay artículos en el carrito de compras</div>
                        <div class="c-panel__list" v-for="item in cartItems"><span>{{item.name}}</span><span>{{item.price}}</span></div>
                        <button class="c-button c-button--orange" v-if="cartItems.length > 0" @click="onFinishOrder">
                        <span class="bs bs-cart"></span> Finalizar compra
                        </button>             
                        <br>
                        <p>Total:  {{totalOrderAmount | currency}}</p>
                    </div>
                </div>
            </div>                     
        </div>  
    </div>
</template>
<script>
import headerView from 'views/header'
import { mapGetters } from 'vuex'

export default {
    props: ['item'],
    data(){
        return {
            priceRaw: this.getRawPrice(this.item.price),
            itemAddedToShopingCart: false
        }
    },
    computed:{
        ...mapGetters({
            totalOrderAmount: 'totalOrderAmount',
            cartItems: 'cartItems'
        })
    },
    methods: {
        onFinishOrder(){
            this.$store.commit('onFinishOrder')            
            this.goHome();            
        },
        addToCart(){
            this.$store.commit('addProductToShippingCart', Object.assign({}, this.item, {'priceRaw': this.priceRaw}));
            this.itemAddedToShopingCart = true;
        },
        goHome(){
            this.$router.push('/')
        },
        getRawPrice(price){
            try{
                return parseFloat(price.replace(',', '').replace('$', ''));
            }
            catch(e){
                console.log(e)
                return 0;
            }
        }
    },
    components: {
        "header-view": headerView
    },
    mounted(){}
}
</script>
