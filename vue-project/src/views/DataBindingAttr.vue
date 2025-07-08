<template>
  <h3>DatabindingAttr.vue</h3>
  <p>attribute 바인딩하기</p>
  <img v-bind:src="imgSrc" :width="widVal + 'px'" />
  <p><input type="number" v-model.number="widVal" /></p>
  <p>
    <input type="text" v-model="msg" />
    <button v-bind:disabled="msg == '' ? true : false" v-on:click="alertFnc">
      클릭
    </button>
  </p>
  <h3 v-bind:class="{ 'text-red': isRed, active: isActive }">홍길동</h3>
  <p>배열을 활용한 바인딩.</p>
  <h3 v-bind:class="classAry">김길동</h3>
  <p><button v-on:click="showFnc">에러스타일</button></p>
</template>

<script>
export default {
  // data  영역.
  data() {
    return {
      imgSrc: "https://vuejs.org/images/logo.png",
      imgWid: "150px",
      widVal: 150,
      btnShow: true,
      msg: "",

      isRed: true, // 객체방식{'클래스명: true,' '클래스명':false}
      isActive: true,

      activeClass: "active", // 배열을 활용한'
      errorClass: "text-red",

      classAry: ["active", "text-red"],
    };
  },
  //methods(이벤트 function)
  methods: {
    alertFnc() {
      alert(this.msg);
    },
    showFnc() {
      //홍길동의 폰트 색깔을 빨간색으로 됬다가 안됬다가하게.
      if (this.isRed) {
        this.isRed = false;
        this.isActive = false;
        this.classAry[1] = false;
        this.classAry[0] = false;
      } else {
        this.isRed = true;
        this.isActive = true;
      }
    },
  },
  //mount 훅
  mounted() {
    //console.log(this);
    this.msg = "홍길동";
    this.imgWid = "300px";
  },
};
</script>

<style scoped>
.text-red {
  color: red;
}

.active {
  background-color: antiquewhite;
}
</style>
