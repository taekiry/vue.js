<template>
  <div class="form-container">
    <h2>게시글 등록</h2>
    <form @submit.prevent="submitPost">
      <input v-model="writer" placeholder="작성자" required />
      <input v-model="title" placeholder="제목" required />
      <textarea v-model="content" placeholder="내용" required></textarea>
      <button type="submit">등록</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      content: "",
      writer: "",
    };
  },
  methods: {
    submitPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        content: this.content,
        writer: this.writer,
      };
      this.$store.dispatch("addPost", newPost); //dispatch 역할?
      this.title = "";
      this.content = "";
      this.writer = "";
      this.$emit("post-added");
    },
  },
};
</script>

<style scoped>
.post-form {
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 20px;
  color: #34495e;
}

input,
textarea {
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  font-family: inherit;
  transition: border-color 0.3s ease;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #16a085;
  box-shadow: 0 0 5px #16a085aa;
  background-color: #fff;
}

button {
  background-color: #16a085;
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #13856e;
}
</style>
