import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

//createApp(App).use(router).mount("#app"); 아래로 써도됨.
const app = createApp(App);
app.use(router);
app.mount("#app");

//createApp(App).mount('#app') = "App 컴포넌트를 Vue 앱으로 만들고, HTML에서 id가 app인 곳에 붙여라!"
