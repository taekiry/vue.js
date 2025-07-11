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
img {
  width: 30%;
  height: 30%;
}
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
body {
  margin: 0;
  height: 100vh;
  background: linear-gradient(
    135deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-size: 400% 400%;
  animation: rainbow 10s ease infinite;
}

/* 배경 그라디언트 애니메이션 */
@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
