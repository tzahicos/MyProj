<template id="accordion">
  <ul>
    <li  @click="openItem()">
      <div class="arrow_box" :class="{'arrow_box--open' : open}"></div>
      {{item.title}}
      <transition v-on:enter="enter" v-on:leave="leave">
        <div v-show="open" class="item">
           {{item.content}}
        </div>
      </transition>
    </li>
  </ul>
</template>

<script>
  export default{
    props: ['item'],
    data: function () {
        return {
            open: false
        }
    },
    methods: {
      openItem: function(){
          this.open = !  this.open
      },
      setClass: function(){
          if (this.open == true ) {
            return 'open'
          }
          return 'close'
      },
      
      enter: function(el, done){   
          Velocity(el, 'slideDown', {duration: 400,  
                                    easing: "easeInBack"},
                                    {complete: done})
      },
      
      leave: function(el, done){
          Velocity(el, 'slideUp', {duration: 400,  
                                  easing: "easeInBack"},
                                  {complete: done})
      },
    }
  }
</script>

<style>
@import 'https://fonts.googleapis.com/css?family=Cantata+One|Noto+Sans:400,400i,700,700i&subset=latin-ext';

li {
  list-style:none;
  cursor:pointer;
  font: 22px/48px 'Cantata One', serif;
  text-align: left;
}
li>div {
  font: 14px/22px 'Noto Sans', serif;
  padding-bottom:20px;
}

.item {
  overflow:hidden;
  width:600px;
}

.arrow_box {
  width:10px;
  height:10px;
  transition: all .3s;
  padding-bottom:0px;
  position:absolute;
  margin:20px 0px 0px -15px;
  
}


.arrow_box:after, .arrow_box:before {
	border: solid transparent;
	content: " ";
	position: absolute;
}

.arrow_box:after {
	border-width: 5px;
}
.arrow_box:before {
	border-left-color: #000;
	border-width: 5px;
}

.arrow_box--open{
   transform: rotateZ(90deg);
   transform-origin: 50% 50%;
}
</style>