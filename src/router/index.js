import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Grid from '@/components/Grid'
import Post from '@/components/Post'
import Post_exp from '@/components/Post_exp'
import Table from '@/components/Table'
import Item from '@/components/Item'
import KendoGrid from '@/components/KendoGrid'
import TreeTable from '@/components/TreeTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/grid',
      component: Grid
    },
    {
      path: '/post',
      name: 'accordion',
      component: Post
    },
    {
      path: '/post_exp',
      component: Post_exp
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/item',
      component: Item
    },
    {
      path: '/kendoGrid',
      component: KendoGrid
    },
    {
      path: '/treeTable',
      component: TreeTable
    }
  ]
})
