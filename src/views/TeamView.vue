<template lang="">
  <div class="container">
    <h2>Team</h2>
    <div class="cards">
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-1"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/figma.svg"
            alt="figma"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Figma
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Designing app for wakanda forever, so lit!!!
          </p></a
        ></transition
      >
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-2"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/figma.svg"
            alt="figma"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Figma
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Designing app for wakanda forever, so lit!!!
          </p></a
        ></transition
      >
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-3"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/figma.svg"
            alt="figma"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Figma
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Designing app for wakanda forever, so lit!!!
          </p></a
        ></transition
      >
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-4"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/figma.svg"
            alt="figma"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Figma
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Designing app for wakanda forever, so lit!!!
          </p></a
        ></transition
      >
      <transition
        appear
        appear-active-class="animate__animated animate__flipInX"
      >
        <a
          class="card card-5"
          :class="{ 'light-card': !isDarkMode, 'dark-card': isDarkMode }"
          ><img
            src="@/assets/figma.svg"
            alt="figma"
            class="card-header"
            :class="{ 'light-header': !isDarkMode, 'dark-header': isDarkMode }"
          />
          <h3 :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Figma
          </h3>
          <p :class="{ 'light-text': isDarkMode, 'dark-text': !isDarkMode }">
            Designing app for wakanda forever, so lit!!!
          </p></a
        ></transition
      >
    </div>
  </div>
</template>
<script>
export default {
  name: "TeamView",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss">
.container {
  margin-left: 25px;
}

h2 {
  @include heading-2;
  margin-bottom: 16px;
}

p {
  font-size: 15px;
  line-height: 24px;
  text-align: left;
  margin-left: 16px;
  margin-top: 0;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: space-evenly;
}

.card {
  width: 100%;
  max-width: 300px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
}
.card-header {
  width: 40%;
  padding: 3rem;
  border-radius: 10px 10px 0 0;
}

.light-header {
  background: $light-grey;
}

.dark-header {
  background: #283049;
}

h3 {
  @include heading-3;
}

.card-1 {
  animation-delay: 0s;
}
.card-2 {
  animation-delay: 0.5s;
}
.card-3 {
  animation-delay: 1s;
}
.card-4 {
  animation-delay: 1.5s;
}
.card-5 {
  animation-delay: 2s;
}

.light-card {
  background: $white;
  box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(0, 0, 0, 0.35);
  }
}

.dark-card {
  background: $super-dark-blue;
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.15);

  &:hover {
    box-shadow: 0px 30px 60px rgba(255, 255, 255, 0.35);
  }
}
</style>
