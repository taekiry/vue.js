<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/보노보노.png" />
    <HelloWorld id="bono" msg="Welcome 보노보노 WORLD" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    HelloWorld,
  },
};
</script>

<style>
#bono {
  color: white;
}
</style>
