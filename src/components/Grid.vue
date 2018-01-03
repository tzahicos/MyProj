<template>
  <table class="table table-bordered">
    <thead>
      <tr><th v-for="(column,key) in fields[0]" scope="col" :key="key">{{key}}</th></tr>
    </thead>
    <tbody>
      <tr v-for="field in fields" :key="field">
        <td v-for="key in field" scope="row" :key="key">{{key}}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import {fields} from '@/main.js'

export default {
  data: function () {
    return{
      fields: fields
    }
  }
}
</script>

<style>
</style>
