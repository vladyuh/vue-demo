<template>
  <div class="project-items">
    <div class="project-items__item" v-for="(item,i) in this.projects" :key="i">
      <div class="image">
<!--        <img v-bind:src="item.image" alt="">-->
      </div>
      <div class="title">{{item.title}}</div>
      <div class="desc" v-html="item.desc"></div>
      <a v-bind:href="item.link" class="link">Перейти</a>
      <a v-bind:href="item.link" class="more">Подробнее</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: ['projects']
}
</script>

<style lang="scss">

</style>
