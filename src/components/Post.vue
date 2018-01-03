
 <!-- <template id="accordion">
  <ul>
    <li v-for="item in items" @click="openItem(item)" :key="item">
      <div class="arrow_box" :class="{'arrow_box--open' : item.isopen}"></div>
      {{item.title}}
      <transition v-on:enter="enter" v-on:leave="leave">
        <div v-show="item.isopen" class="item">
           {{item.content}}
        </div>  
      </transition>
    </li>
  </ul>
</template>
 -->

<script>
// import Vue from 'vue'
// Vue.component('accordion', {
//   template: '#accordion',
//   // props: ['items'],
//       data: function () {
//         return{
//           items: [{
//               id: 1,
//               title: 'Competition law',
//               content: 'Schärer Attorneys at Law advises and represents you on questions of unfair competition and the anti-trust law, for example, for company mergers, anti-trust investigations and for the drafting of distribution agreements.',
//               isopen: false
//             }, {
//               id: 2,
//               title: 'Constitutional, community and administrative law',
//               content: 'Civil law regulates privities of contract between private persons, communities of persons and corporations. On the other hand, constitutional, community and administrative law is concerned with the legal relationship between a private person and the community sector (federation, cantons, communities, associations of communities), or amongst communities. The specialists at Schärer Attorneys at Law act as advisers and consultants for private persons as well as communities, and represent them in the legal proceedings of objection and appeal.',
//               isopen: false
//             },
//             {
//               id: 3,
//               title: 'Construction, planning and environmental law',
//               content: 'Our specialists in the fields of construction, planning and environmental law advise and represent builders, planners and architects, corporations, affected neighboring communities and associations of communities in:',
//               isopen: false
//             }]
//         }
//       },
//   methods: {
//     openItem: function(item){
//         item.isopen = !  item.isopen
//     },
    
//     setClass: function(item){
//         if (item.isopen == true ) {
//           return 'open'
//         }
//         return 'close'
//     },
    
//     enter: function(el, done){   
//         Velocity(el, 'slideDown', {duration: 400,  
//                                    easing: "easeInBack"},
//                                   {complete: done})
//     },
    
//     leave: function(el, done){
//         Velocity(el, 'slideUp', {duration: 400,  
//                                  easing: "easeInBack"},
//                                 {complete: done})
//     },
//   }
// })



</script>

<style>
/* @import 'https://fonts.googleapis.com/css?family=Cantata+One|Noto+Sans:400,400i,700,700i&subset=latin-ext';

li {
  list-style:none;
  cursor:pointer;
  font: 22px/48px 'Cantata One', serif;
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
} */
</style>
