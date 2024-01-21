<template>
  <div>
    <transition
      name="slide-in-right"
      enter-active-class="animate__animated animate__slideInRight "
    >
      <div
        v-if="show"
        class="request"
        :class="{ 'light-request': !isDarkMode, 'dark-request': isDarkMode }"
      >
        Don't have Bee Emm Davalue Account? <br />
        <router-link to="/request"> Request an Account</router-link>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "RequestAccount",
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    this.show = true;
  },
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
};
</script>

<style lang="scss">
.request {
  position: absolute;
  top: 40px;
  right: 40px;
  text-align: right;
}
.dark-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: $white;
  }
}
.light-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
</style>
