<template>
  <div class="app-container">
    <PostListSidebar />
    <router-view class="main-content" />
  </div>
</template>

<script>
import PostListSidebar from "./components/PostListSidebar.vue";

export default {
  components: {
    PostListSidebar,
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  min-height: 100vh;
  background-color: #fff;
  color: #222;
}

.sidebar {
  width: 220px;
  background-color: #2c3e50;
  color: #ecf0f1;
  padding: 20px;
  overflow-y: auto;
  border-right: 1px solid #34495e;
  font-weight: 600;
}

.main-content {
  flex: 1;
  padding: 30px 40px;
  background-color: #fff;
  overflow-y: auto;
}
</style>
