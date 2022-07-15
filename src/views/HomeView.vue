<template>
  <div class="home" ref="banner">
    <about-block :about="this.$parent.about"></about-block>
  </div>
</template>
<script>

import AboutBlock from "@/components/AboutBlock";

export default {
  name: 'HomeView',
  components: {
    AboutBlock,
  },
  data: function (){
    return {

    }
  },
  created() {

  }
}
</script>

<style lang="scss">
@import "src/styles/main";
</style>
