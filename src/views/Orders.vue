<template>
  <div>
    <OrderedProducts />
  </div>
</template>

<script>
import OrderedProducts from '../components/OrderedProducts.vue'

export default {
  name: 'Orders',
  components: {
    OrderedProducts,
  }
}
</script>