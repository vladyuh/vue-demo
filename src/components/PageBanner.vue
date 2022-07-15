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
  name: 'PageBanner',
  props: ['data']
}
</script>

<style lang="scss">

.pageTitle {
  margin: 24px 0 0;
}

.pageTitle__wrp {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  max-width: 1200px;
  border-radius: 64px;
  overflow: hidden;
  position: relative;
  min-height: 360px;
  margin: 0 auto;
  padding: 40px;

  .breadcrumb {
    width: 100%;
    max-width: 1024px;
    margin: 16px auto 0;
    z-index: 2;

    li a {
      font-weight: 600;
      color: #1f1f1f;
    }
  }
}

.pageTitle__text {
  z-index: 2;
  font-weight: 600;
  color: #1f1f1f;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;

  &.section-h1 {
    font-size: 64px;
  }
}

.pageTitle {
  .desc {
    font-size: 24px;
    line-height: 32px;
    max-width: 1024px;
    width: 100%;
    margin: 16px auto 0;
    z-index: 2;
    font-weight: 600;
    color: #1f1f1f !important;
  }

  .desc__text {
    max-width: 760px;
  }
}

.pageTitle__image {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    opacity: .2;
    -webkit-transition: .25s;
    -o-transition: .25s;
    transition: 0.25s;
  }
}

@media screen and (max-width: 960px) {
  .pageTitle__text.section-h1 {
    font-size: 45px
  }
}

@media screen and (max-width: 480px) {

  .pageTitle__wrp {
    padding: 40px 24px 40px 40px
  }

  .pageTitle__text.section-h1 {
    font-size: 36px
  }

  .pageTitle .desc {
    font-size: 20px;
    line-height: 28px
  }

}

</style>