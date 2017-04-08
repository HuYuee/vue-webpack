<template>
<div class="">
    <!-- <hy-head name="life"></hy-head> -->
    <life-content></life-content>
</div>
</template>

<script>
export default {
  components: {
    "hy-head": require('../components/header.vue'),
    "life-content": require('../components/life-content.vue')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
