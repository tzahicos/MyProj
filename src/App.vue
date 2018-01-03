<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>{{fields[0]}}</p>
    <input type="text" name="" value="" >
    <router-view/>
  </div>
</template>

<script>
import grid from '@/components/Grid'
import {fields} from './main.js'
import accordion from '@/components/Post'


export default {
  name: 'app',
  data:function () {
    return{
      fields: fields
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
