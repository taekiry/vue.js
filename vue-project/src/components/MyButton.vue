<template>
  <!-- <h3>MyButton.vue</h3> -->
  <button @click="handleclick">{{ label }}</button>
</template>

<script>
export default {
  props: {
    // 상위에서 하위로 전달
    label: { type: String, default: "클릭하세요" },
  },
  methods: {
    handleclick() {
      //$emit 사용 하위에서 상위로 전달 (위에 label을 상위에서 전달받아서 다시전달하고있음)
      console.log(this);
      this.$emit("my-event", this.label + "을 전달.");
    },
  },
};
</script>

<style scoped>
button {
  background-color: green;
  border-radius: 10%;
  margin: 10px;
  color: aliceblue;
  width: 100px;
  height: 70px;
  border: none;
}
</style>
