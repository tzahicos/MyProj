<template>
  <!-- <div class="hello">
    <h1>{{ msg }}</h1>
    <kendo-calendar :value="new Date()"></kendo-calendar>
  </div> -->
<div >
    <kendo-datasource ref="datasource1"
                        :transport-read-url="'https://demos.telerik.com/kendo-ui/service/Products'"
                        :transport-read-data-type="'jsonp'"
                        :transport-update-url="'https://demos.telerik.com/kendo-ui/service/Products/Update'"
                        :transport-update-data-type="'jsonp'"
                        :transport-destroy-url="'https://demos.telerik.com/kendo-ui/service/Products/Destroy'"
                        :transport-destroy-data-type="'jsonp'"
                        :transport-create-url="'https://demos.telerik.com/kendo-ui/service/Products/Create'"
                        :transport-create-data-type="'jsonp'"
                        :schema-model-id="'ProductID'"
                        :batch='true'
                        :page-size='20'>
    </kendo-datasource>

    <kendo-grid :height="550"
                :data-source-ref="'datasource1'"
                :pageable='true'
                :editable="'inline'"
                :toolbar="['create']">
        <kendo-grid-column field="ProductName"></kendo-grid-column>
        <kendo-grid-column field="UnitPrice" title="Unit Price" :width="120" :format="'{0:c}'"></kendo-grid-column>
        <kendo-grid-column field="UnitsInStock" title="Units In Stock" :width="120"></kendo-grid-column>
        <kendo-grid-column :command="['edit', 'destroy']" title="&nbsp;" width="250px"></kendo-grid-column>
    </kendo-grid>
</div>
</template>

  <script>
// import { KendoCalendar } from '@progress/kendo-dateinputs-vue-wrapper'

// export default {
//   name: 'hello',
//   data () {
//     return {
//       msg: 'Hello Kendo UI for Vue.js'
//     }
//   },
//     components: {
//      KendoCalendar
//     }
// }
// </script>



export default{
        data: function () {
            return{
                schemaModelFields: {
                    ProductID: { editable: false, nullable: true },
                    ProductName: { validation: { required: true } },
                    UnitPrice: { type: 'number', validation: { required: true, min: 1 } },
                    Discontinued: { type: 'boolean' },
                    UnitsInStock: { type: 'number', validation: { min: 0, required: true } }
                }
            }
        }
    }
</script>
