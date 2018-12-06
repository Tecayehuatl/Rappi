<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container">        
                    <div class="modal-header">
                        <slot name="header">                        
                        </slot>
                    </div>        
                    <div class="modal-body">
                        <slot name="body">
                        El total de su compra es:
                        </slot>
                    </div>        
                    <div class="modal-footer">
                        <slot name="footer">
                        {{ this.$store.getters.totalOrderAmount | currency }}
                        <button class="modal-default-button" @click="closeModal">
                            Ok
                        </button>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    methods:{
        closeModal: function () {      
            this.$store.commit('hideModal')
            this.$store.commit('removeLocalStorageData')
        }
    }       
}
</script>

