import { createRouter, createWebHistory } from "vue-router";
import PostDetail from "../components/PostDetail.vue";

const routes = [
  {
    path: "/",
    component: () => import("../components/PostList.vue"), // 목록
  },
  {
    path: "/post/:id",
    component: PostDetail,
    props: true,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
