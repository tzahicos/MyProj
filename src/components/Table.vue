<template>
  <div>
    <my-item v-for="item in items" :key="item.id"  :item='item'></my-item>
  </div>
</template>

<script>
import Item from '@/components/Item'
export default {
  components: {'my-item': Item},
  data: function () {
    return{
        items: [{
              id: 1,
              title: 'Competition law',
              content: 'Schärer Attorneys at Law advises and represents you on questions of unfair competition and the anti-trust law, for example, for company mergers, anti-trust investigations and for the drafting of distribution agreements.',
              isopen: false
            }, {
              id: 2,
              title: 'Constitutional, community and administrative law',
              content: 'Civil law regulates privities of contract between private persons, communities of persons and corporations. On the other hand, constitutional, community and administrative law is concerned with the legal relationship between a private person and the community sector (federation, cantons, communities, associations of communities), or amongst communities. The specialists at Schärer Attorneys at Law act as advisers and consultants for private persons as well as communities, and represent them in the legal proceedings of objection and appeal.',
              isopen: false
            },
            {
              id: 3,
              title: 'Construction, planning and environmental law',
              content: 'Our specialists in the fields of construction, planning and environmental law advise and represent builders, planners and architects, corporations, affected neighboring communities and associations of communities in:',
              isopen: false
            }]
    }
  }
}
</script>