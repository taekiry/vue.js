<template>
  <h1>Hello {{ msg }}</h1>
  <!--{{ msg와 javascript값을 동기화 = databinding }} value를 가질수있는 input, select option은 v-model 양방향 바인딩가능-->
  <h1 v-text="msg"></h1>
  <h2 v-html="htmlStr"></h2>
  <p><input type="text" v-model="valueModel" /></p>
  <p><input type="number" v-model="numberModel" /></p>
  <p>
    <select v-model="city">
      <option value="02">서울</option>
      <option value="042">대전</option>
      <option value="052">부산</option>
    </select>
  </p>
  <p>
    <label>{{ checking }}</label>
    <input
      type="checkbox"
      true-value="yes"
      false-value="no"
      v-model="checking"
    />
  </p>
  <p>
    <label>{{ radio }}</label>
    <input type="radio" v-model="radio" />
  </p>
  <p>{{ valueModel }},{{ numberModel }},{{ city }}</p>
</template>

<script>
//view -- model의 바인딩
export default {
  data() {
    //data함수의 리턴구문에 처리해줘야 binding가능.
    return {
      msg: "World!!",
      htmlStr: '<span style="color: red;">Red Text</span>',
      valueModel: "홍길동",
      numberModel: 10,
      city: "02",
      checking: "no",
      radio: "서울",
    };
  },
};
</script>

<!--scoped하면 그 페이지 영역으로 국한-->
<style scoped>
h1 {
  color: rgb(182, 8, 104);
}
</style>
