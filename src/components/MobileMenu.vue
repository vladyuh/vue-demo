<template>
  <div class="mobileMenu">
    <div class="mobileMenu-header">
      <div class="mobileMenu-header__toggle">
        <button class="burger">
          <svg width="24" height="24">
            <use xlink:href="img/sprites/sprite.svg#ic_close"></use>
          </svg>
        </button>
      </div>
    </div>
    <div class="mobileMenu-nav">
      <ul class="mobileMenu-nav__ul">
        <li v-for="(item,i) in this.links" :key="i">
          <router-link v-bind:to="item.link">{{ item.name }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: ['links']
}
</script>

<style lang="scss">

@import "src/blocks/components/mobileMenu/mobileMenu";

</style>