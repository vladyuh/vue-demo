<template>
  <section class="home">
    <PageBanner :data="banner"></PageBanner>
  </section>
</template>

<script>

import PageBanner from "@/components/PageBanner";

export default {
  name: 'HomeView',
  components: {
    PageBanner
  },
  data: function (){
    return {
      banner: {
        image: "https://etooools.herokuapp.com/media/backs/12.jpg",
        title: "Привет,<br> Я Влад Юхновский",
        subtitle: "Фронтенд разработчик, ООО&nbsp;\"Промиком Девелоп\""
      }
    }
  }
}
</script>

<style lang="scss">
.pageTitle{margin:24px 0 0}.pageTitle__wrp{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-width:1200px;border-radius:64px;overflow:hidden;position:relative;min-height:360px;margin:0 auto;padding:40px}.pageTitle__wrp .breadcrumb{width:100%;max-width:1024px;margin:16px auto 0;z-index:2}.pageTitle__wrp .breadcrumb li a{font-weight:600;color:#1f1f1f}.pageTitle__text{z-index:2;font-weight:600;color:#1f1f1f;width:100%;max-width:1024px;margin:0 auto}.pageTitle__text.section-h1{font-size:64px}.pageTitle .desc{font-size:24px;line-height:32px;max-width:1024px;width:100%;margin:16px auto 0;z-index:2;font-weight:600;color:#1f1f1f!important}.pageTitle .desc__text{max-width:760px}.pageTitle__image{background-repeat:no-repeat;background-size:cover;background-position:center;width:100%;position:absolute;top:0;left:0;bottom:0;right:0}.pageTitle__image::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:#fff;opacity:.2;-webkit-transition:.25s;-o-transition:.25s;transition:.25s}
</style>
