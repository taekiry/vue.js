<template>
  <h3>ParentButton.vue</h3>
  <MyButton @my-event="eventClick" label="확인" />
  <MyButton @my-event="eventClick" label="취소" />
  <MyButton @my-event="eventClick" />
  <!--값 할당 x -> mybutton의 디폴트값 받아옴-->
</template>

<script>
import MyButton from "@/components/MyButton.vue";

export default {
  components: { MyButton },
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    eventClick(data) {
      //자식 컴포넌트에서 data값 받아옴.
      console.log(data);
    },
  },
};
</script>

<style scoped>
h3 {
  color: #333;
}
</style>
