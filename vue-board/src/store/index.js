import { createStore } from "vuex";

export default createStore({
  state: {
    posts: [],
    comments: {}, // postId 별 댓글 저장
  },

  mutations: {
    ADD_POST(state, post) {
      state.posts.push(post);
    },
    ADD_COMMENT(state, { postId, comment }) {
      if (!state.comments[postId]) {
        state.comments[postId] = [];
      }
      state.comments[postId].push(comment);
    },
    DELETE_POST(state, id) {
      state.posts = state.posts.filter((post) => post.id !== id);
    },
  },

  actions: {
    addPost({ commit }, post) {
      commit("ADD_POST", post);
    },
    addComment({ commit }, { postId, comment }) {
      commit("ADD_COMMENT", { postId, comment });
    },
    deletePost({ commit }, id) {
      commit("DELETE_POST", id);
    },
  },

  getters: {
    allPosts: (state) => state.posts,
    getPostById: (state) => (id) => state.posts.find((p) => p.id === id),
    getCommentsByPostId: (state) => (id) => state.comments[id] || [],
  },
});
