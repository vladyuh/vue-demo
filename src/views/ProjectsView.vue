<template>
  <div class="about" ref="banner">
    <project-item :projects="this.$parent.projects"></project-item>
  </div>
</template>

<script>

import projectItem from "@/components/ProjectItem";

export default {
  name: 'ProjectsView',
  components: {
    projectItem
  },
  data: function (){
    return {

    }
  }
}
</script>
