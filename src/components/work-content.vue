
<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <ul>
        <li>
            <router-link to="/work/1/">Home{{$route.params.id}}</router-link>
        </li>
        <li><router-link to="/work/2/">Home{{$route.params.id}}</router-link></li>
        <li>123</li>
        <li>123</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '我是work的content！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
