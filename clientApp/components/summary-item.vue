<template>
        <li class="c-products__item" :class="item.available ? '': 'c-products__item--no-available'">
            <p>
                <span class="c-products__text">Nombre: </span>
                <span class="c-products__text c-products__text--bold">{{item.name}}</span>
            </p>
            <p class="c-products__text">
                <span class="c-products__text">
                 <span class="bs bs-coin-dollar"></span> Precio: </span>
                <span class="c-products__text c-products__text--bold c-products__text--orange c-products__text--big">{{item.price}}</span>
            </p>
            <p class="c-products__text">
                <span class="bs bs-pushpin"></span>
                <span class="c-products__text">En stock: </span>
                <span class="c-products__text c-products__text--bold c-products__text--orange c-products__text--big">{{item.quantity}}</span>
            </p>
            <p class="c-products__text">
                
                <span class="c-products__text c-products__text--bold" :class="item.available === true ? 'c-products__text--green': 'c-products__text--danger'">
                    {{item.available === true ? 'Disponible': 'No disponible'}}
                </span>
            </p>
            <router-link class="c-products__text c-products__text--orange" :to="{ name: 'viewProductDetail', params: { productId: item.id, item: item }}">
            ver artículo</router-link>
        </li>    
</template>
<script>
export default {
    props: ['item'],
    components: {
    },
    mounted(){
    }
}
</script>

