// src/store/index.js
import { createStore } from "vuex";

export default createStore({
  //저장객체 인스턴스
  state: {
    todos: [
      { id: 1, name: "vue 공부하기", chk: false },
      { id: 2, name: "TV 시청하기", chk: false },
      { id: 3, name: "저녁 운동하기", chk: false },
    ],
    title: "Hello, World",
  },
  getters: {
    // getters 쓰면 todoListVuex에서 this.$store._state.data.title 로 찾아올 필요없음.
    // state에서 데이터 가져와서 넘겨줌
    titling(state) {
      return state.title;
    },
    todoList(state) {
      return state.todos;
    },
  },
  mutations: {
    // todos에 등록
    addTodo(state, name) {
      const id = state.todos[state.todos.length - 1].id; //next id 인덱스 값구해서
      const todo = {
        id: id + 1,
        name: name,
        chk: false,
      };
      state.todos.push(todo);
    },
  },
});
