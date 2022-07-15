<template>
  <div class="home">
    <project-item :projects="this.$parent.data.projects"></project-item>
  </div>
</template>

<script>

import projectItem from "@/components/ProjectItem";

export default {
  name: 'ProjectsView',
  components: {
    projectItem
  }
}
</script>
