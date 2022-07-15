<template>
  <div class="home">
    <PageBanner :data="banner"></PageBanner>
    <PageNav :links="this.$parent.nav"></PageNav>
  </div>
</template>
<script>

import PageBanner from "@/components/PageBanner";
import PageNav from "@/components/PageNav";

export default {
  name: 'HomeView',
  components: {
    PageNav,
    PageBanner
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

<style lang="scss">
@import "src/styles/main";
</style>
