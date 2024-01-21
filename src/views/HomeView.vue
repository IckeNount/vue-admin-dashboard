<template>
  <div
    class="home"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <HeaderComponent />
    <img class="bmw" alt="bmw logo" src="../assets/signin.svg" />
    <HelloWorld msg="Welcome to Your BMW Account" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import HeaderComponent from "@/components/Header.vue";

export default {
  name: "HomeView",
  components: {
    HeaderComponent,
    HelloWorld,
  },
};
</script>

<style scoped lang="scss">
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.bmw {
  height: 200px;
  width: 200px;
  margin-bottom: 24px;
}
</style>
