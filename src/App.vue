<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
      <Nav />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue'

export default {
  name: 'App',
  components: {
    Nav
  }
}
</script>


<style>
* {
    font-family: "BeaufortforLOL-Bold", serif;
}
body {
    margin: 0;
}
ul {
    padding: 0;
}
li {
    list-style: none;
}
a {
    color: white;
    cursor: pointer;
}
</style>
