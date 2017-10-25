<template>
  <div class="onepage_component">
    <slot></slot>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  name: 'OnePageComponent',
  data () {
    return {
      scrolling: false,
      timer: setTimeout(() => {})
    };
  },
  created() {
    this.$pages = {};

    // collect pages when mounted
    this.$on('page:mounted', (page) => {
      this.$pages[page.name] = page;
    });
  },
  mounted() {
    this.scrollToPage(this.$route.name);
    window.addEventListener("scroll", this.onscroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.onscroll);
  },
  methods: {
    scrollToPage(pagename) {
      if ( this.$pages.hasOwnProperty( pagename ) ) {
        this.scrolling  = true;

        var top = this.$pages[pagename].$el.offsetTop;

        window.scroll({
          top: top,
          left: 0,
          behavior: 'smooth'
        });

        setTimeout(() => {
          this.scrolling = false;
        }, 500);
      } else {
        console.error("Can't find page: " + pagename);
      }
    },
    onscroll(event) {
      if (this.scrolling) return;

      clearTimeout(this.timer);

      this.timer = setTimeout(() => {
        this.scrolling  = true;

        var scrollTop   = window.scrollTop;

        let mapGapComps = Object.values(this.$pages).reduce((acc, page) => {
          let gap = Math.abs(page.$el.offsetTop - scrollTop);
          acc[gap] = page;
          return acc;
        }, {});

        let minGap = Math.min(...Object.keys(mapGapComps));

        this.$router.replace({ name: mapGapComps[minGap].name });

        Vue.nextTick(() => {
          setTimeout(() => {
            this.scrolling = false;
          }, 50);
        });
      }, 100);
    }
  },
  watch: {
    $route (to, from) {
      if ( this.scrolling === false ) {
        this.scrollToPage(to.name);
      }
    }
  }
}
</script>

<style scoped lang="scss">
.onepage_component {

}
</style>
