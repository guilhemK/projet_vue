<template>
  <div>
    <Login />
  </div>
</template>

<script>

import Login from '../components/Login.vue'

export default {
  name: 'Connection',
  components: {
    Login,
  }
}
</script>
<style>
#connection {
    display: flex;
    width: 75%;
    text-align: center;
    margin: 5% auto auto auto;
    background-color: #21181C;
    color: white;
    padding: 15px;
    border-radius: 10px;
}
#connection .vertical-line {
    width: 2px;
    background-color: white;
}
#connection .connection-main-container {
    width: 50%;
}
#connection .registration-main-container {
    width: 50%;
}
#connection input {
    margin: 15px;
    width: 80%;
    padding: 10px;
}
#connection button {
    padding: 10px 20px;
    color: white;
    background-color: #c28f2c;
    font-weight: bold;
    border: 0;
    border-radius: 5px;
    font-size: 18px;
    transition: all .2s;
}
#connection button:hover {
    background-color: #f0b33a;
}
@media  screen and (max-width:768px) {
    #connection {
        flex-direction: column;
    }
    #connection .connection-main-container, #connection .registration-main-container {
        width: 100%;
    }
    #connection .vertical-line {
        width: 100%;
        height: 1px;
        margin-top: 30px;
    }
}
</style>