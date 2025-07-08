<template>
  <h3>Event</h3>
  <p :key="i" v-for="(num, i) in list">
    <button @click="ClickFnc(num)">이벤트클릭</button>
    <!-- v-binds:는 :로 생략가능/ v-on은 @-->
  </p>
</template>

<script>
export default {
  data() {
    return {
      msg: "value",
      list: [10, 20, 30],
    };
  }, // end of data
  methods: {
    ClickFnc(num) {
      alert(num + "클릭함");
    },
  },
};
</script>

<style></style>
