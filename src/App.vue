<template>
  <div id="app">
    <mobile-menu :links="this.nav"></mobile-menu>
    <router-view/>
  </div>
</template>

<script>

import {initializeApp} from "firebase/app";
import {getDatabase, ref, child, get} from "firebase/database";
import MobileMenu from "@/components/MobileMenu";


export default {
  components: {MobileMenu},
  data: function () {
    return {
      data: "",
      nav: [
        {
          name: "Обо мне",
          link: "/",
        },
        {
          name: "Проекты",
          link: "/projects",
        }
      ],
    }
  },
  created() {

    const firebaseConfig = {
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
        this.data = snapshot.val();
      }
    }).catch((error) => {
      console.error(error);
    });
  }
}
</script>
