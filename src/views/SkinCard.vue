<template>
  <div id="product">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Product />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Product from '../components/Product.vue'
import { mapState } from "vuex";


export default {
  name: 'SkinCard',
  components: {
    // HelloWorld
    Product,
  },
  computed: {
    ...mapState(["products"]),
  }
}
</script>