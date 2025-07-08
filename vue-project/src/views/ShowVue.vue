<template>
  <h1>v-if와 v-show 차이</h1>
  <p><button @click="visible = !visible">if 토글</button></p>
  <p v-if="visible">이 글이 보이십니까?</p>
  <p>
    <button @click="visible = !visible">show 토글</button>
  </p>
  <p v-show="!visible">show도 비슷해요</p>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
};
</script>
