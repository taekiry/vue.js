<template>
  <div class="post-form">
    <h2>📄 게시글 상세</h2>
    <div class="from-group">
      <label>작성자</label>
      <input type="text" :value="post?.writer" :readonly="readonlyMode" />
    </div>
    <div class="form-group">
      <label>제목</label>
      <input type="text" :value="post?.title" :readonly="readonlyMode" />
    </div>

    <div class="form-group">
      <label>내용</label>
      <textarea :value="post?.content" :readonly="readonlyMode"></textarea>
    </div>

    <div class="btn-group">
      <button class="delete-btn" @click="deleteThisPost">🗑 삭제</button>
      <button class="update-btn" @click="updateThisPost">
        {{ readonlyMode ? "수정하기" : "저장" }}
      </button>
      <router-link to="/" class="back-btn">← 목록으로</router-link>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      readonlyMode: true,
    };
  },
  props: ["id"],
  computed: {
    ...mapGetters(["getPostById"]),
    post() {
      return this.getPostById(parseInt(this.id));
    },
  },
  methods: {
    deleteThisPost() {
      if (confirm("이 글을 삭제할까요?")) {
        this.$store.dispatch("deletePost", parseInt(this.id));
        this.$router.push("/");
      }
    },
    updateThisPost() {
      this.readonlyMode = !this.readonlyMode;
    },
  },
};
</script>

<style scoped>
.post-form {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  margin-bottom: 24px;
  font-size: 1.6rem;
  color: #34495e;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
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

textarea {
  min-height: 180px;
  resize: vertical;
}

input,
textarea {
  cursor: default;
  background-color: #f5f5f5;
}

btn-group {
  display: flex;
  justify-content: flex-start;
  gap: 12px;
  margin-top: 20px;
}

.delete-btn {
  background-color: #e74c3c;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.update-btn {
  background-color: blueviolet;
  color: white;
  padding: 10px 18px;
  border: none;
  border-radius: 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.delete-btn:hover {
  background-color: #c0392b;
}

/* 💡 목록으로 돌아가기 버튼 스타일 */
.back-btn {
  display: inline-block;
  padding: 10px 18px;
  background-color: #95a5a6;
  color: #fff;
  font-weight: 600;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.back-btn:hover {
  background-color: #7f8c8d;
}
</style>
