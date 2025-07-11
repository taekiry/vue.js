import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import mixins from "./mixins";

createApp(App) //
  .use(router) //
  .mixin(mixins) //공동 사용함수들
  .mount("#app");

window.Kakao.init("439be9f503e4cd4b7d97840e1a15e7d1"); //kakoa 개발자 앱키
