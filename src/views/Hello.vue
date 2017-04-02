<template>
<div class="">
    <hy-head name="hello"></hy-head>
    <hello-content></hello-content>
</div>
</template>

<script>
export default {
  components: {
    "hy-head": require('../components/header.vue'),
    "hello-content": require('../components/hello-content.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
