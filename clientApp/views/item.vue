<template>
    <div class="c-detail-item">        
         <div>
             <figure class="c-detail-item__figure">
                <img class="c-detail-item__image" src="https://via.placeholder.com/150

C/O https://placeholder.com/ " alt="">
                <figcaption class="c-detail-item__caption">Fig.1 - Trulli, Puglia, Italy.</figcaption>
            </figure> 
            
         </div>
         <div>
             <h1 class="c-detail-item__title">
                <!--Titulo + {{ $route.params.productId }}-->
                Titulo [{{ item.name }}]
            </h1>
            
            <p>
                <span class="c-products__text">Nombre: </span>
                <span class="c-products__text c-products__text--bold">{{item.name}}</span>
            </p>
            <p class="c-products__text">
                <span class="c-products__text">Precio: </span>
                <span class="c-products__text c-products__text--bold c-products__text--orange c-products__text--big">{{item.price}}</span>
            </p>
            
            
            <button class="c-button c-button--orange" @click="addToCart" :class="item.available === true ? '' : 'c-button--disabled'"
            :disabled="item.available === false">
                Agregar al carrito
            </button>
            <br>
            <br>
            <button class="c-button c-button--outline" @click="goHome">go home</button>
         </div>
    </div>    
</template>
<script>
export default {
    props: ['item'],
    data(){
        return {
            //item: this.item
        }
    },
    methods: {
        addToCart(){
            alert('added')
        },
        goHome(){
            this.$router.push('/')
        }
    },
    mounted(){
        console.log(this.item)
    }
}
</script>
