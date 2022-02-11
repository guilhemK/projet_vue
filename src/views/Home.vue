<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Basket />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Basket from '@/components/Basket.vue'

export default {
  name: 'Home',
  components: {
    // HelloWorld
    Basket
  }
}
</script>
