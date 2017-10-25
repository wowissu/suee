<template>
  <div class="base_header">
    <div class="base_header_body">
      <div class="action_header" :class="{ wheelup: state.wheelup, fixheader: state.fixheader }">
        <headermenu @before:link="onLink"/>
      </div>
    </div>

  </div>
</template>

<script>
import HeaderMenu from '@/components/HeaderMenuComponent'

export default {
  name: 'BaseHeader',
  components: {
    headermenu: HeaderMenu
  },
  data() {
    return {
      state: {
        fixheader: false,
        wheelup: false
      }
    }
  },
  mounted() {
    window.addEventListener("wheel", this.onWheel);
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDistroy() {
    window.removeEventListener("wheel", this.onWheel);
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onLink(params) {
      this.$bus.$emit('headermenu:before:link', params);
    },
    onScroll(e) {
      this.state.fixheader = this.$el.offsetHeight < window.scrollTop;
    },
    onWheel(e) {
      this.state.wheelup = e.wheelDelta > 0;
    }
  }
}
</script>

<style scoped lang="scss">
@import "../assets/css/scss/animation.scss";
$headerHeight: 50px;

.base_header {
  position: relative;
  height: $headerHeight;

  .action_header {
    position: relative;
    width: 100%;
    height: $headerHeight;
    transition: top 0.2s;

    &.fixheader {
      position: fixed;
      background: rgba(#333, .7);
      // animation-fill-mode: backwards;
      top: -$headerHeight;

      &.wheelup {
        top: 0px;
      }
    }
  }
}

@include keyframes(header_menu_show) {
  0% {
    top: -100%;
  }
  100% {
    top: 0%;
  }
}

@include keyframes(header_menu_hide) {
  0% {
    top: 0%;
  }
  100% {
    top: -100%;
  }
}
</style>
