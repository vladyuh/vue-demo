<template>
  <footer>
    <div class="container">
      <div class="footer">
        <div class="footer-desc">
          <div class="footer-desc__logo">
            <picture>
              <img class="lazyload" loading="lazy" v-bind:src="data.image" alt="" width="48" height="48">
            </picture>
          </div>
          <div class="footer-desc__text">
            <p v-html="data.desc"></p>
          </div>
          <ul class="footer-desc__links">
            <li v-for="(item,i) in data.links" :key="i">
              <a v-bind:href="item.link">{{item.name}}</a>
            </li>
          </ul>
        </div>
        <div class="footer-feedback">
          <ul>
            <li><a v-bind:href="data.mail">Обратная связь</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBlock',
  props: ['data']
}
</script>

<style lang="scss">

@import "src/blocks/modules/header/header";

</style>