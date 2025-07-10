<template>
  <nav>
    <Header></Header>

    <router-view />

    <Footer></Footer>
  </nav>
</template>

<script>
/*
  File : App.vue
  Content : root Component/ Header, Footer  레이아웃 적용
  Craeted: 김태완
  Date : 2025.07.10
*/

import Header from "./layouts/HeaderLayout.vue";
import Footer from "./layouts/FooterLayout.vue";

export default {
  components: { Header, Footer },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
