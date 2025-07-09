<template>
  <h3>자식컴포넌트(ChildComponent.vue)</h3>
  <p><input type="text" v-model="msg" /></p>
  <button v-on:click="sendMessage" ref="sendBtn">메세지보내기</button>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
    sendMessage() {
      console.log(this)
      this.$emit("send-message", this.msg);
      // this.$parent.msg = this.msg;현재 컴포넌트의 직속 부모 컴포넌트 인스턴스를 참조함.위험할 수 있어서 보통 권장되진 않아!
      // this.$root.msg = this.msg; 현재 Vue 앱에서 최상위(root) Vue 인스턴스를 가리킴
    },
    sayHello(){
      console.log("부모에서 호출가능")
    }
  },
  mounted() {
    //console.log(this.$refs);
  },
};
</script>