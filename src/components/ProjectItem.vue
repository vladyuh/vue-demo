<template>
  <div class="project-block">
    <div class="container">
      <div class="project-block__items">
        <div class="project-block__item" v-for="(item,i) in this.projects" :key="i">
          <div class="image">
            <img loading="lazy" v-bind:src="item.image + '.png'" alt="">
          </div>
          <div class="title">{{item.title}}</div>
          <div class="desc" v-html="item.desc"></div>
          <div class="links" v-if="item.link">
            <a v-bind:href="item.link" class="link">
              <span>Перейти</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"></path>
                <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z"></path>
              </svg>
            </a>
            <a href="#more" class="link" @click="click(item.title)">
              <span>Подробнее</span>
              <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
                <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h7v2H5v14h14v-7h2v7q0 .825-.587 1.413Q19.825 21 19 21Zm4.7-5.3-1.4-1.4L17.6 5H14V3h7v7h-2V6.4Z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div class="popup__wrp" id="more" v-if="projectDetails">
        <div class="popup popup-more">
          <div class="popup-close">
            <a href="#close">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                <path d="M0 0h24v24H0V0z" fill="none"/>
                <path
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/>
              </svg>
            </a>
          </div>
          <div class="popup-content">
            <div class="section-h3">{{projectDetails.title}}</div>
            <div class="image">
              <img loading="lazy" v-bind:src="projectDetails.image + '.png'" alt="">
            </div>
            <div class="desc">
              <div class="desc-caption">Описание</div>
              <div v-html="projectDetails.desc"></div>
            </div>
            <div class="dev">
              <div class="dev-caption">Разработка</div>
              <div v-html="projectDetails.dev"></div>
            </div>
            <a v-bind:href="projectDetails.link" class="btn btn-round">Перейти</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props: ['projects'],
  data: function (){
    return {
      projectClicked: "",
      projectDetails: ""
    }
  },
  methods: {
    click: function (name){
      this.projectClicked = name
      let project = this.projects.find((item) =>{
        if(item.title.toLowerCase().includes(name.toLowerCase())){
          return true
        }
      })
      this.projectDetails = project
    }
  }
}
</script>

<style lang="scss">

.project-block {
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
    padding: 24px 24px 24px;
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
    overflow: hidden;

    @media screen and (max-width: 900px) {

      width: calc(100% - 16px);


    }

    .image {
      position: relative;
      padding-top: 65%;
      width: calc(100%);
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 24px;

      &::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.025);
      }

      img {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: top;
      }
    }

    .title {
      font-size: 22px;
      line-height: 28px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .desc {
      font-size: 16px;
      line-height: 24px;
      color: #1f1f1f;
      font-weight: 600;
      margin-bottom: 16px;

      a{
        text-decoration: none;
        color: #0b57d0;
      }

    }

    .links{
      display: flex;
      align-items: center;
      gap: 24px;
      margin-top: auto;
    }

    .link {
      font-weight: 600;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      align-items: center;
      text-decoration: none;

      svg {
        margin-left: 8px;
        fill: #0b57d0;
      }

      span {
        color: #0b57d0;
        border-bottom: 1px solid transparent;
        -webkit-transition: .25s;
        -o-transition: .25s;
        transition: .25s;
        font-size: 17px;
        line-height: 24px;
      }
    }


  }

}

.popup-more{

  .desc,
  .dev{
    padding-top: 16px;
  }

  .desc-caption,
  .dev-caption{
    font-size: 18px;
    line-height: 24px;
    font-weight: 600;
    color: #1f1f1f;
    margin-bottom: 8px;
  }

  .btn{
    margin-top: 32px;
  }

}

</style>
