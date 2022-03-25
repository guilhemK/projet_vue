<template>
  <div>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Basket-content />
  </div>
</template>

<script>
import BasketContent from '../components/BasketContent.vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'



export default {
  name: 'Basket',
  components: {
    // HelloWorld
    BasketContent,

  }
}
</script>
