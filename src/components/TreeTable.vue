<template>
  <tree-item :model="treeData"></tree-item>
</template>

<script>
import TreeItem from "@/components/TreeItem";
var data = {
  title: "Competition law",
  content:
    "Schärer Attorneys at Law advises and represents you on questions of unfair competition and the anti-trust law, for example, for company mergers, anti-trust investigations and for the drafting of distribution agreements.",
  children: [
    { title: "hello" },
    { title: "wat" },
    {
      title: "Constitutional, community and administrative law",
      content:
        "Civil law regulates privities of contract between private persons, communities of persons and corporations. On the other hand, constitutional, community and administrative law is concerned with the legal relationship between a private person and the community sector (federation, cantons, communities, associations of communities), or amongst communities. The specialists at Schärer Attorneys at Law act as advisers and consultants for private persons as well as communities, and represent them in the legal proceedings of objection and appeal.",
      children: [
        {
          title: "Construction, planning and environmental law",
          content:
            "Our specialists in the fields of construction, planning and environmental law advise and represent builders, planners and architects, corporations, affected neighboring communities and associations of communities in:",
          children: [{ title: "hello" }, { title: "wat" }]
        },
        { title: "hello" },
        { title: "wat" },
        {
          title: "child folder",
          children: [{ title: "hello" }, { title: "wat" }]
        }
      ]
    }
  ]
};
export default {
  components: {
    TreeItem
  },
  data() {
    return {
      treeData: data
    };
  }
};
</script>


<style>

</style>
