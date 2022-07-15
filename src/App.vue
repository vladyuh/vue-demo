<template>
  <div id="app" v-bind:class="{ mobile: this.mobileOpen }">
    <header-block :clicked="toggleMenu"></header-block>
    <mobile-menu :links="this.nav" :clicked="toggleMenu"></mobile-menu>
    <main>
      <page-banner :data="this.banner"></page-banner>
      <page-nav :links="this.nav"></page-nav>
      <router-view ref="banner"/>
    </main>
    <footer-block :data="footer"></footer-block>
  </div>
</template>

<script>

/*import {initializeApp} from "firebase/app";
import {getDatabase, ref, child, get} from "firebase/database";*/
import MobileMenu from "@/components/MobileMenu";
import HeaderBlock from "@/components/Header";
import FooterBlock from "@/components/Footer";
import PageBanner from "@/components/PageBanner";
import PageNav from "@/components/PageNav";


export default {
  name: "AppView",
  components: {PageNav, PageBanner, FooterBlock, HeaderBlock, MobileMenu},
  data: function () {
    return {
      mobileOpen: false,
      banner: {
        image: "img/common/back.jpg",
        title: "Привет,<br> Я Влад Юхновский",
        subtitle: "Фронтенд разработчик, ООО&nbsp;\"Промиком Девелоп\""
      },
      nav: [
        {
          name: "Обо мне",
          link: "/",
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"ic_account\"><path d=\"M0 0h24v24H0V0z\" fill=\"none\"/><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2a7.2 7.2 0 01-6-3.22c.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08a7.2 7.2 0 01-6 3.22z\"/></svg>"
        },
        {
          name: "Проекты",
          link: "/projects",
          svg: "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" id=\"ic_apps\"><path d=\"M6 20q-.825 0-1.412-.587Q4 18.825 4 18q0-.825.588-1.413Q5.175 16 6 16t1.412.587Q8 17.175 8 18q0 .825-.588 1.413Q6.825 20 6 20zm6 0q-.825 0-1.412-.587Q10 18.825 10 18q0-.825.588-1.413Q11.175 16 12 16t1.413.587Q14 17.175 14 18q0 .825-.587 1.413Q12.825 20 12 20zm6 0q-.825 0-1.413-.587Q16 18.825 16 18q0-.825.587-1.413Q17.175 16 18 16q.825 0 1.413.587Q20 17.175 20 18q0 .825-.587 1.413Q18.825 20 18 20zM6 14q-.825 0-1.412-.588Q4 12.825 4 12t.588-1.413Q5.175 10 6 10t1.412.587Q8 11.175 8 12q0 .825-.588 1.412Q6.825 14 6 14zm6 0q-.825 0-1.412-.588Q10 12.825 10 12t.588-1.413Q11.175 10 12 10t1.413.587Q14 11.175 14 12q0 .825-.587 1.412Q12.825 14 12 14zm6 0q-.825 0-1.413-.588Q16 12.825 16 12t.587-1.413Q17.175 10 18 10q.825 0 1.413.587Q20 11.175 20 12q0 .825-.587 1.412Q18.825 14 18 14zM6 8q-.825 0-1.412-.588Q4 6.825 4 6t.588-1.412Q5.175 4 6 4t1.412.588Q8 5.175 8 6t-.588 1.412Q6.825 8 6 8zm6 0q-.825 0-1.412-.588Q10 6.825 10 6t.588-1.412Q11.175 4 12 4t1.413.588Q14 5.175 14 6t-.587 1.412Q12.825 8 12 8zm6 0q-.825 0-1.413-.588Q16 6.825 16 6t.587-1.412Q17.175 4 18 4q.825 0 1.413.588Q20 5.175 20 6t-.587 1.412Q18.825 8 18 8z\"/></svg>"
        }
      ],
      about: [
        {
          title: "Образование",
          items: [
            {
              image: "img/common/msu.jpg",
              caption: "МГУ им. А.А. Кулешова",
              name: "Информатика",
              since: "Сент. 2015 - Июл. 2019",
            },
            {
              image: "img/svg/ic_web.svg",
              caption: "Интернет",
              name: "Самообучение и т.п",
              since: "2019 - н.в.",
            },
          ]
        },
        {
          title: "Опыт",
          items: [
            {
              image: "img/svg/promicom_logo.svg",
              caption: "Фронтенд разработчик",
              name: "Промиком Групп",
              since: "Сент. 2019 - Фев. 2020",
              location: "Могилев"
            },
            {
              image: "img/svg/promicom_logo.svg",
              caption: "Фронтенд разработчик",
              name: "Промиком Девелоп",
              since: "Фев. 2020 - н.в.",
              location: "Могилев"
            },
          ]
        },
        {
          title: "Навыки",
          small: true,
          items: [
            {
              name: "HTML",
            },
            {
              name: "Pug",
            },
            {
              name: "CSS",
            },
            {
              name: "SCSS",
            },
            {
              name: "JS",
            },
            {
              name: "Vue.js",
            },
            {
              name: "jQuery",
            },
            {
              name: "Gulp",
            },
          ]
        },
        {
          title: "Инструменты",
          small: true,
          items: [
            {
              name: "VS Code",
            },
            {
              name: "WebStorm",
            },
            {
              name: "Figma",
            },
            {
              name: "Photoshop",
            },
            {
              name: "Chrome",
            },
            {
              name: "MDN",
            },
            {
              name: "Git",
            },
            {
              name: "NPM",
            },
          ]
        }
      ],
      projects: [
        {
          desc: "Сайт для компании FiestaLED.Компания FiestaLED производит светодиодные экраны для внутренней и наружной рекламы.",
          image: "/img/projects/1",
          link: "https://fiestaled.by/",
          title: "Fiesta LED",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, без препроцессоров. " +
              "Front-end на jQuery, а также использовались плагины FancyBox, InputMask, WOW.js. "
        },
        {
          desc: "ООО Интер Тобакко – это молодое предприятие по выпуску табачной продукции в Беларуси",
          image: "/img/projects/2",
          link: "https://intertobacco.by/",
          title: "ИНТЕР ТОБАККО",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Собран с помощью Webpack, а также использовались различные плагины"
        },
        {
          desc: "Магазин дверей в Минске - межкомнатные и входные двери «Стальной дом»",
          image: "/img/projects/3",
          link: "https://dverimarket.by/",
          title: "Стальной дом",
          dev:
              "Верстка по макетам из Photoshop. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на jQuery"
        },
        {
          desc: "Магазин дверей белорусcкого производства с установкой в Минске «МЕДВЕДЕВ И К»",
          image: "/img/projects/4",
          link: "https://medvedev.by/",
          title: "МЕДВЕДЕВ И К",
          dev:
              "Редизайн сайта, верстка новых блоков по макетам из Figma. Доработки front-end на jQuery"
        },
        {
          desc: "Лендинг. Компьютерное и серверное оборудование для офиса",
          image: "/img/projects/5",
          link: "https://tender-pc.ru/",
          title: "Актуальные компьютерные системы",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Собран с помощью Webpack"
        },
        {
          desc: "Серверное оборудование в Минске. Поставщик серверного оборудования",
          image: "/img/projects/6",
          link: "https://servera.by/",
          title: "МЕРАТЕХ",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Собран с помощью Webpack. jQuery и другие плагины"
        },
        {
          desc: "ARTROOM — профессиональный дизайн интерьера в Минске, проекты домов.",
          image: "/img/projects/7",
          link: "https://artroom-design.com/ru/",
          title: "ARTROOM",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS." +
              "Front-end на jQuery, а также использовались различные плагины"
        },
        {
          desc: "Грузоперевозки и переезды по всей Беларуси",
          image: "/img/projects/8",
          link: "https://gruzok.by/",
          title: "ГрузОК",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS." +
              "Front-end на jQuery, Gulp для минификация CSS и JS кода, для работы с изображениями, " +
              "оптимизации и объединения отдельных файлов проекта в один"
        },
        {
          desc: "Центр медицинской косметологии \"Эстемед\" в г. Могилёв",
          image: "/img/projects/9",
          link: "https://estemed.by/",
          title: "Эстемед",
          dev:
              "Редизайн сайта, верстка новых блоков по макетам из Figma. Доработки front-end на jQuery"
        },
        {
          desc: "Сайт мюзикла «Дон Жуан. Нерассказанная история»",
          image: "/img/projects/10",
          link: "https://donjuanmusical.ru/",
          title: "Дон Жуан",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vanilla JS, Gulp для минификация CSS и JS кода, для работы с изображениями, " +
              "оптимизации и объединения отдельных файлов проекта в один"
        },
        {
          desc: "Лендинг для ООО \"Центр Инновационной Флебологии\"",
          image: "/img/projects/11",
          link: "https://myginecolog.ru/",
          title: "Доктор Лидер",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vanilla JS, Gulp для автоматизации"
        },
        {
          desc: "Лендинг для компании “Газосиликат”. Производство и доставка бетона и раствора",
          image: "/img/projects/12",
          link: "https://beton.gazosilicat.by/",
          title: "Газосиликат",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vanilla JS, Gulp для автоматизации"
        },
        {
          desc: "Конструктор прибыльной франшизы ресторанных и ритейл брендов. Находится в стадии тестирования заказчиком",
          image: "/img/projects/13",
          link: "http://u1630212.isp.regruhosting.ru/",
          title: "Food Expert",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vanilla JS, Gulp для минификация CSS и JS кода, для работы с изображениями, " +
              "оптимизации и объединения отдельных файлов проекта в один"
        },
        {
          desc: "Туристическое агентство TUDARU. Находится в стадии тестирования заказчиком",
          image: "/img/projects/14",
          link: "https://tudaback.fvds.ru/",
          title: "TUDARU",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vanilla JS, Gulp для минификация CSS и JS кода, для работы с изображениями, " +
              "оптимизации и объединения отдельных файлов проекта в один"
        },
        {
          desc: "Институт нитевой имплантологии. Находится в стадии backend - разработки",
          image: "/img/projects/15",
          link: "https://drron.fvds.ru/",
          title: "Doctor Ron",
          dev:
              "Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vanilla JS, Gulp для автоматизации"
        },
        {
          desc: "Личный кабинет по подбору автомобилей, компания “Autofind. Находится в стадии тестирования заказчиком",
          image: "/img/projects/16",
          link: "https://autos.fvds.ru/",
          title: "Autofind",
          dev:
              "<strong>Progressive Web App</strong>. Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vanilla JS, Gulp для автоматизации."
        },
        {
          desc: "Личный кабинет пациента клиники “Евромедика”, реализованный на фреймворке Vue.js. Находится в стадии backend - разработки",
          image: "/img/projects/17",
          link: "https://evrom.fvds.ru/",
          title: "Евромедика",
          dev:
              "<strong>Progressive Web App</strong>. Верстка по макетам из Figma. Верстка на HTML5/CSS3, препроцессор SASS в синтаксисе SCSS. " +
              "Front-end на Vue.js 2 + Vue Router"
        },
        {
          desc: "Принимал участие в доработках уже существующих проектов:<br><a href='https://autofrant.ru/'> - Autofrant</a><br><a href='https://fezmogilev.by/'> - СЕЗ Могилев</a><br><a href='https://tk-astra.ru/'> - ТК Астра</a>",
          image: "/img/projects/18",
          title: "Другие проекты"
        }
      ],
      popup: "",
      footer: {
        image: "img/common/image.jpg",
        desc:
            "Этот веб-сайт был создан для демонстрации реализованных мною проектов.<br> " +
            "Заинтересованы поработать вместе? Давайте пообщаемся",
        links: [
          {
            link: "https://github.com/vladyuh",
            name: "GitHub"
          },
          {
            link: "https://www.linkedin.com/in/vlad-yukhnovski-247787239/",
            name: "LinkedIn"
          },
          {
            link: "https://t.me/valdis_1997",
            name: "Telegram"
          }
        ],
        mail: "mailto:vladuks123.vv@gmail.com"
      }
    }
  },
  created() {

    /*const firebaseConfig = {
      apiKey: "AIzaSyBkqTm6SleVJA-BmDuvmxfqL_zLnREMmKo",
      authDomain: "porft-51146.firebaseapp.com",
      projectId: "porft-51146",
      storageBucket: "porft-51146.appspot.com",
      messagingSenderId: "569277156093",
      appId: "1:569277156093:web:928605bebf2ec2c76b8c94",
      databaseURL: "https://porft-51146-default-rtdb.firebaseio.com/",
    };

    initializeApp(firebaseConfig);

    const dbRef = ref(getDatabase());
    get(child(dbRef, `/`)).then((snapshot) => {
      if (snapshot.exists()) {
        this.projects = snapshot.val();
        console.log(this.projects)
      }
    }).catch((error) => {
      console.error(error);
    });*/
  },
  methods: {
    toggleMenu: function () {
      this.mobileOpen = !this.mobileOpen
    },
  }
}
</script>
