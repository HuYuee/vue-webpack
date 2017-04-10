<template>
<div class="timeline animated">
  <div v-for="(item,index) in data" class="" v-bind:class="[index < 2 ? 'active' : '','timeline-row']">
    <div class="timeline-time">
      <small>{{item.date}}</small>
      <font>{{item.time}}</font>
    </div>
    <div class="timeline-icon">
      <div v-if="item.type=='note'" class="bg-primary">
        <i class="fa fa-pencil"></i>
      </div>
      <div v-else-if="item.type=='image'" class="bg-info">
        <i class="fa fa-camera"></i>
      </div>
      <div v-else-if="item.type=='video'" class="bg-danger">
        <i class="fa fa-video-camera"></i>
      </div>
      <div v-else class="bg-primary">
        <i class="fa fa-pencil"></i>
      </div>
    </div>
    <div class="panel timeline-content">
      <div class="panel-body">
        <h2>{{item.title}}</h2>
        <img v-if="item.type=='image'" class="img-responsive" v-bind:src="'/static/img/'+item.src">
        <div v-else-if="item.type=='video'" class="video-container">
          <iframe allowfullscreen="" frameborder="0" mozallowfullscreen="" v-bind:src="'/static/video/'+item.src" webkitallowfullscreen=""></iframe>
        </div>
        <p>{{item.content}}</p>
      </div>
    </div>
  </div>
</div>
</template>
<script>
/**
 * [引入css文件,会导致将样式放到全局里面]
 */
// require('../assets/css/timeline.css')
/**
 * [引入js文件]
 */
var $ = require('../../static/js/jquery')
var timeline = require('../../data/timeline.json')

$(document).ready(function() {
  var timelineAnimate;
  timelineAnimate = function(elem) {
    return $(".timeline.animated .timeline-row").each(function(i) {
      var bottom_of_object, bottom_of_window;
      bottom_of_object = $(this).position().top + $(this).outerHeight();
      bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_object) {
        return $(this).addClass("active");
      }
    });
  };
  timelineAnimate();
  return $(window).scroll(function() {
    return timelineAnimate();
  });
});

export default {
  props: ['name'],
  data() {
    // console.log(timeline.data);
    return {
      data: timeline.data
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
// console.log(this);
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/**
 * [时间轴插件css样式]
 * @type {[type]}
 */

/*----------------------------------------------------------------------------------- */
/*  Background color helper classes */
/*----------------------------------------------------------------------------------- */

.bg-primary,
.bg-success,
.bg-info,
.bg-warning,
.bg-danger,
.bg-muted {
  color: white;
}

.bg-primary .page-header,
.bg-success .page-header,
.bg-info .page-header,
.bg-warning .page-header,
.bg-danger .page-header,
.bg-muted .page-header {
  color: white;
}

.bg-primary {
  background-color: #32b9b1;
}

.bg-success {
  background-color: #51be38;
}

.bg-info {
  background-color: #5bc0de;
}

.bg-warning {
  background-color: #ef9544;
}

.bg-danger {
  background-color: #f05a5b;
}

body {
  background-color: #5bbcd5;
}

.timeline {
  list-style: none;
  position: relative;
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
  background-color: #5bbcd5;
  overflow: hidden;
}

.timeline:after {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -2px;
  background-color: rgba(0, 0, 0, 0.2);
  height: 100%;
  width: 4px;
  border-radius: 2px;
  display: block;
}

.timeline .timeline-row {
  padding-left: 50%;
  position: relative;
  z-index: 10;
}

.timeline .timeline-row .timeline-time {
  position: absolute;
  right: 50%;
  top: 31px;
  text-align: right;
  margin-right: 40px;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 600;
}

.timeline .timeline-row .timeline-time small {
  display: block;
  color: white;
  text-transform: uppercase;
  opacity: 0.75;
  font-size: 11px;
  font-weight: 400;
}

.timeline .timeline-row .timeline-icon {
  position: absolute;
  top: 30px;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  text-align: center;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding: 3px;
  color: white;
  font-size: 14px;
  z-index: 100;
}

.timeline .timeline-row .timeline-icon>div {
  border-radius: 50%;
  line-height: 34px;
  font-size: 16px;
}

.timeline .timeline-row .timeline-content {
  margin-left: 40px;
  position: relative;
  background-color: white;
  color: #333333;
}

.timeline .timeline-row .timeline-content:after {
  content: "";
  position: absolute;
  top: 48px;
  left: -41px;
  height: 4px;
  width: 40px;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: -1;
}

.timeline .timeline-row .timeline-content .panel-body {
  padding: 15px 15px 2px;
  position: relative;
  z-index: 10;
}

.timeline .timeline-row .timeline-content h2 {
  font-size: 22px;
  margin-bottom: 12px;
  margin-top: 0;
  line-height: 1.2;
}

.timeline .timeline-row .timeline-content p {
  margin-bottom: 15px;
}

.timeline .timeline-row .timeline-content img {
  margin-bottom: 15px;
}

.timeline .timeline-row .timeline-content blockquote {
  border-color: #eeeeee;
}

.timeline .timeline-row .timeline-content blockquote footer,
.timeline .timeline-row .timeline-content blockquote small,
.timeline .timeline-row .timeline-content blockquote .small,
.timeline .timeline-row .timeline-content blockquote.blockquote-reverse footer,
.timeline .timeline-row .timeline-content blockquote.blockquote-reverse small,
.timeline .timeline-row .timeline-content blockquote.blockquote-reverse .small {
  color: #999999;
}

.timeline .timeline-row .timeline-content .video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  margin-bottom: 15px;
  overflow: hidden;
}

.timeline .timeline-row .timeline-content .video-container iframe,
.timeline .timeline-row .timeline-content .video-container object,
.timeline .timeline-row .timeline-content .video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.timeline .timeline-row:nth-child(odd) {
  padding-left: 0;
  padding-right: 50%;
}

.timeline .timeline-row:nth-child(odd) .timeline-time {
  right: auto;
  left: 50%;
  text-align: left;
  margin-right: 0;
  margin-left: 40px;
}

.timeline .timeline-row:nth-child(odd) .timeline-content {
  margin-right: 40px;
  margin-left: 0;
}

.timeline .timeline-row:nth-child(odd) .timeline-content:after {
  left: auto;
  right: -41px;
}

.timeline.animated .timeline-row .timeline-content {
  opacity: 0;
  left: 20px;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  transition: all 0.8s;
}

.timeline.animated .timeline-row:nth-child(odd) .timeline-content {
  left: -20px;
}

.timeline.animated .timeline-row.active .timeline-content {
  opacity: 1;
  left: 0;
}

.timeline.animated .timeline-row.active:nth-child(odd) .timeline-content {
  left: 0;
}

@media (max-width: 1200px) {
  .timeline {
    padding: 15px 10px;
  }
  .timeline:after {
    left: 28px;
  }
  .timeline .timeline-row {
    padding-left: 0;
    margin-bottom: 16px;
  }
  .timeline .timeline-row .timeline-time {
    position: relative;
    right: auto;
    top: 0;
    text-align: left;
    margin: 0 0 6px 56px;
  }
  .timeline .timeline-row .timeline-time strong {
    display: inline-block;
    margin-right: 10px;
  }
  .timeline .timeline-row .timeline-icon {
    top: 52px;
    left: -2px;
    margin-left: 0;
  }
  .timeline .timeline-row .timeline-content {
    margin-left: 56px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    position: relative;
  }
  .timeline .timeline-row .timeline-content:after {
    right: auto !important;
    left: -20px !important;
    top: 32px;
  }
  .timeline .timeline-row:nth-child(odd) {
    padding-right: 0;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-time {
    position: relative;
    right: auto;
    left: auto;
    top: 0;
    text-align: left;
    margin: 0 0 6px 56px;
  }
  .timeline .timeline-row:nth-child(odd) .timeline-content {
    margin-right: 0;
    margin-left: 55px;
  }
  .timeline.animated .timeline-row:nth-child(odd) .timeline-content {
    left: 20px;
  }
  .timeline.animated .timeline-row.active:nth-child(odd) .timeline-content {
    left: 0;
  }
}
</style>
