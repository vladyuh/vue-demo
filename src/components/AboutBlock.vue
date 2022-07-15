<template>

  <div class="about-block">
    <div class="container">
      <div class="about-block__items">
        <div class="about-block__item" v-for="(item,i) in about" :key="i">
          <div class="title">{{item.title}}</div>
          <div class="box-items" v-if="!item.small">
            <div class="box" v-for="(items,j) in item.items" :key="j">
              <div class="box-icon">
                <picture>
                  <img class="lazyload" loading="lazy" v-bind:src="items.image" width="48" height="48">
                </picture>
              </div>
              <div class="box-text">
                <div class="box-text__caption">{{items.caption}}</div>
                <div class="box-text__name">{{items.name}}</div>
              </div>
              <div class="box-address">
                <div class="box-address__since">{{items.since}}</div>
                <div class="box-address__location" v-if="items.location">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="ic_location">
                    <path d="M12 19q-3.525-2.6-5.263-5.05Q5 11.5 5 9.15q0-1.775.638-3.113Q6.275 4.7 7.275 3.8q1-.9 2.25-1.35Q10.775 2 12 2t2.475.45q1.25.45 2.25 1.35 1 .9 1.638 2.237Q19 7.375 19 9.15q0 2.35-1.738 4.8Q15.525 16.4 12 19zm0-8q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11zM5 22v-2h14v2z"/>
                  </svg>
                  <span>{{items.location}}</span>
                </div>
              </div>
            </div>
          </div>
          <div class="box-items box-items box-items--small" v-else>
            <div class="box box--small" v-for="(items,j) in item.items" :key="j">
              <div class="box-text">
                <div class="box-text__name">{{items.name}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'AboutBlock',
  props: ['about']
}
</script>

<style lang="scss">

.about-block {
  padding-top: 24px;
  padding-bottom: 64px;

  .container {
    max-width: 1124px;
  }

  &__items {
    display: flex;
    flex-wrap: wrap;
    margin: 0 -8px;
    width: calc(100% + 16px);
  }

  &__item {
    width: calc(100% / 2 - 16px);
    padding: 24px;
    background: #fff;
    border-radius: 8px;
    margin: 0 8px 16px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-transition: background .5s;
    -o-transition: background .5s;
    transition: background .5s;
    border: 1px solid #e1e3e1;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: flex-start;

    @media screen and (max-width: 900px) {

      width: calc(100% - 16px);


    }

    .title {
      font-size: 22px;
      line-height: 28px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .box-items {
      width: 100%;

      &--small {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        margin: 0 -8px;
        width: calc(100% + 16px);
      }

    }

    .box {
      background: #f2f6fc;
      border-radius: 8px;
      padding: 16px;
      width: 100%;
      display: flex;
      align-items: center;
      margin-bottom: 8px;

      &--small {
        flex-basis: calc(100% / 3 - 16px);
        margin: 8px !important;
        justify-content: center;
        flex-grow: 1;

        .box-text {
          width: 100% !important;
          max-width: 100% !important;
          text-align: center;
        }

      }

      &:last-child {
        margin-bottom: 0;
      }

      .box-icon {
        margin-right: 16px;
        width: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        mix-blend-mode: multiply;
      }

      .box-text {
        margin-right: auto;

        &__caption {
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;
          opacity: 0.7;

        }

        &__name {
          font-size: 18px;
          line-height: 26px;
          font-weight: 700;
          margin-right: auto;
        }

      }

      .box-address {
        align-self: flex-start;
        text-align: right;

        &__since {
          font-size: 14px;
          line-height: 24px;
          font-weight: 600;
          opacity: 0.8;
        }

        &__location {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          font-size: 16px;
          line-height: 24px;
          font-weight: 600;

          svg {
            margin-right: 4px;
            width: 20px;
            height: 20px;
          }

        }
      }

      @media screen and (max-width: 1024px) {

        flex-wrap: wrap;

        .box-text {
          width: 100%;
          max-width: calc(100% - 64px);
        }

        .box-address {
          text-align: left;
          margin-top: 8px;
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-left: 64px;

          &__since {
            margin-right: 16px;
          }

        }

      }

      @media screen and (max-width: 480px) {

        .box-icon {
          margin-bottom: 16px;
        }

        .box-text {
          width: 100%;
          max-width: 100%;
        }

        .box-address {
          padding-left: 0;
        }

      }

    }

  }

}

</style>
