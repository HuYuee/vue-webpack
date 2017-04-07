<template>
<div class="head">
  <nav id="navbar" class="navbar navbar-default">
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
          <li :class="{active:isHome}">
            <router-link to="/">简历</router-link>
          </li>
          <li :class="{active:isWork}">
            <router-link to="/works">作品</router-link>
          </li>
          <li :class="{active:isLife}">
            <router-link to="/life">生活</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</div>
</template>

<script>
var $ = require('../../static/js/jquery')
$(window).on('ready , scroll', function() {
  if ($(window).scrollTop() > 30) {
    $('#navbar').addClass('minified');
  } else {
    $('#navbar').removeClass('minified');
  }
});
export default {
  props: ['name'],
  data() {
    return {
      age1: ""
    }
  },
  watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
      console.log(to.name);
    }
},
  computed: {
    isHome: function() {
      return this.name == "hello"
    },
    isWork: function() {
      return this.name == "work"
    },
    isLife: function() {
      return this.name == "life"
    }
  }
}
</script>

<style scoped>
.head{
    overflow: hidden;
}
.navbar {
  background-color: #28292e;
  border: 0 none;
  border-radius: 0;
  position: fixed;
  width: 100%;
  padding: 15px 0;
  margin-bottom: 0;
  z-index: 9999;
  -webkit-transition: all .35s;
  -moz-transition: all .35s;
  -ms-transition: all .35s;
  -o-transition: all .35s;
  transition: all .35s;
}

.nav>.active>a,
.nav>li>a:hover {
  color: #0F64A6!important;
}

.nav>li>a {

  background-color: transparent!important;
}

.navbar.minified {
  background-color: #ffffff;
  padding: 0;
  position: fixed;
  box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0), 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
}
</style>
