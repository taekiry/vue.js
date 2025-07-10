<template>
  <div class="max-w-2xl mx-auto">
    <h1 class="text-2xl font-bold mb-4">📋 게시판 목록</h1>
    <PostForm @post-added="refreshList" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostForm from "./PostForm.vue";

export default {
  components: { PostForm },
  data() {
    return {
      currentPage: 1,
      pageSize: 5,
    };
  },
  computed: {
    ...mapGetters(["allPosts"]),
    paginatedPosts() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.allPosts.slice(start, start + this.pageSize);
    },
    totalPages() {
      return Math.ceil(this.allPosts.length / this.pageSize);
    },
  },
  methods: {
    refreshList() {
      this.currentPage = 1;
    },
  },
};
</script>
