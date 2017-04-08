<template>
  <div id="app">
     <hy-head></hy-head>
    <router-view class="xxx"></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  components: {
    "hy-head": require('./components/header.vue')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 100px;*/
}
.xxx{
    margin-top: 80px;
    height: 100%;

}
</style>
