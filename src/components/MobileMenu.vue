<template>
  <div class="mobileMenu" v-bind:class="{ opened: this.$parent.mobileOpen }">
    <div class="mobileMenu-header">
      <div class="mobileMenu-header__toggle">
        <button class="burger" @click="clicked">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ic_close">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="mobileMenu-nav">
      <ul class="mobileMenu-nav__ul">
        <li v-for="(item,i) in this.links" :key="i" @click="clicked">
          <router-link v-bind:to="item.link">
            <span class="svg" v-html="item.svg"></span>
            <span>{{ item.name }}</span>
          </router-link>
          <span class="divider"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: ['links','clicked']
}
</script>

<style lang="scss">

@import "src/blocks/components/mobileMenu/mobileMenu";

</style>