<template>
<div class="">
    <hy-head name="work"></hy-head>
    <hello></hello>
</div>
</template>

<script>
export default {
  components: {
    "hy-head": require('../components/header.vue'),
    "hello": require('../components/hello-content.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
