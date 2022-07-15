<template>
  <div class="page-nav">
    <div class="container">
      <div class="page-nav__links">
        <router-link class="page-nav__link" v-for="(item,i) in this.links" :key="i"
                     v-bind:to="item.link">{{ item.name }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageNav',
  props: ['links']
}
</script>

<style lang="scss">

.page-nav{
  z-index: 3;
  border-bottom: 1px solid #e1e3e1;
  background: #fff;

  .container{
    max-width: 1124px
  }

  &__links{
    margin: 0 auto;
    text-align: center;
    white-space: nowrap;
    overflow-x: auto;


    @media screen and (max-width: 960px){
      &__links {
        padding: 0 40px;
        margin: 0 -40px;
      }
    }

    @media screen and (max-width: 480px){
      &__links {
        margin: 0 -24px;
        padding: 0 24px;
      }
    }




  }

  &__link{
    cursor: pointer;
    font-weight: 600;
    display: -webkit-inline-box;
    display: -ms-inline-flexbox;
    display: inline-flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    border: none;
    color: #1f1f1f;
    line-height: 1.25rem;
    font-size: 16px;
    -webkit-transition: .25s;
    -o-transition: .25s;
    transition: .25s;
    height: 48px;
    padding: 0 24px;
    position: relative;
    text-decoration: none;


    &.router-link-exact-active::after {
      position: absolute;
      content: "";
      border-top: 3px solid #1a73e8;
      border-radius: 3px 3px 0 0;
      width: calc(100% - 48px);
      left: 50%;
      bottom: 0;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      overflow-y: hidden
    }
  }

}

</style>