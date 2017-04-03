<template>
<div class="head">
<nav class="navbar navbar-default">
<div class="container container-fluid">
  <!-- Brand and toggle get grouped for better mobile display -->
  <div class="navbar-header">
    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
      <span class="sr-only">Toggle navigation</span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
      <span class="icon-bar"></span>
    </button>
    <a class="navbar-brand" href="">Brand</a>
  </div>

  <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
    <ul class="nav navbar-nav navbar-right">
      <li :class="{active:isHome}"><router-link to="/">简历</router-link></li>
      <li :class="{active:isWork}"><router-link to="/works">作品</router-link></li>
      <li :class="{active:isLife}"><router-link to="/life">生活</router-link></li>
    </ul>
  </div>
</div>
</nav>
</div>
</template>

<script>
export default {
  props: ['name'],
  data(){
    return {
        age1:""
    }
  },
  computed: {
    isHome: function(){
        return this.name == "hello"
    },
    isWork: function(){
        return this.name == "work"
    },
    isLife: function(){
        return this.name == "life"
    }
  }
}
</script>

<style scoped>
.head{
}
</style>
