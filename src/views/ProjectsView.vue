<template>
  <div class="about">
    <page-banner :data="banner"></page-banner>
    <page-nav :links="this.$parent.nav"></page-nav>
    <project-item :projects="this.$parent.data.projects"></project-item>
  </div>
</template>

<script>

import PageNav from "@/components/PageNav";
import projectItem from "@/components/ProjectItem";
import PageBanner from "@/components/PageBanner";

export default {
  name: 'ProjectsView',
  components: {
    PageBanner,
    PageNav,
    projectItem
  },
  data: function (){
    return {
      banner: {
        image: "https://etooools.herokuapp.com/media/backs/12.jpg",
        title: "Привет,<br> Я Влад Юхновский",
        subtitle: "Фронтенд разработчик, ООО&nbsp;\"Промиком Девелоп\""
      },
    }
  }
}
</script>
