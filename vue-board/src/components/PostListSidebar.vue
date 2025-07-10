<template>
  <div class="sidebar">
    <h3>📄 목록</h3>
    <ul>
      <li v-for="(post, index) in posts" :key="post.id">
        <router-link :to="'/post/' + post.id">
          {{ index + 1 }}. {{ post.title.slice(0, 10) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["allPosts"]),
    posts() {
      return this.allPosts;
    },
  },
};
</script>
<style scoped>
h3 {
  margin-bottom: 1rem;
  font-size: 1.25rem;
  border-bottom: 2px solid #16a085;
  padding-bottom: 0.5rem;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin-bottom: 12px;
}

a {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #16a085;
}
</style>
