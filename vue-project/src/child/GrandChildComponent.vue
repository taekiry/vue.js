<template>
  <div class="grand-child">
    <h3>GrandChildComponent.vue(최하위 - Injector)</h3>
    <p>
      주입받은이름: <strong>{{ providerUsername }}</strong>
    </p>
    <button @click="updateParentName">부모 사용이름 변경</button>
  </div>
</template>

<script>
export default {
  //inject 상위에서 최하위 컴포넌트로 데이터값 전달받음.
  inject: ["providerUsername", "updateUserName"],

  methods: {
    updateParentName() {
      if (this.providerUsername == "오영일") {
        this.updateUserName("김길동");
      } else {
        this.updateUserName("오영일");
      }
    },
  },
};
</script>

<style scoped>
.grand-child {
  border: 1px solid green;
}
</style>
