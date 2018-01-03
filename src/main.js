// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'  
//import { KendoCalendar } from '@progress/kendo-dateinputs-vue-wrapper'
//import { KendoGrid, KendoGridInstaller } from '@progress/kendo-grids-vue-wrapper'
//Vue.use(KendoGridInstaller)
Vue.config.productionTip = false
//Vue.component(KendoCalendar.name, KendoCalendar)

export const fields = [
  {name:'moshe',age:'33'},
  {name:'elisha',age:'323'},
  {name:'david',age:'353'},
  {name:'sason',age:'23'},
];

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
     App
    }
})
