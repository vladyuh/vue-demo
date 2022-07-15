<template>
  <div class="pageTitle">
    <div class="container">
      <div class="pageTitle__wrp">
        <div class="pageTitle__image" v-bind:style="{ 'background-image': 'url(' + data.image + ')' }"></div>
        <h1 class="section-h1 pageTitle__text" v-html="data.title"></h1>
        <div class="desc" v-html="data.subtitle"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: ['data']
}
</script>

<style lang="scss">
</style>