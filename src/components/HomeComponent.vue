<template>
  <div class="home_component">
    <onepage ref="onepage">
      <page class="page home" name="home">
        <!-- Home -->
      </page>
      <page class="page life" name="life">
        life
      </page>
      <page class="page tour" name="tour">
        tour
      </page>
      <page class="page exp" name="exp">
        experience
      </page>
    </onepage>
  </div>
</template>

<script>
import OnePageComponent from '@/components/plugin/onepage/OnePageComponent'
import PageComponent from '@/components/plugin/onepage/PageComponent'

export default {
  name: 'HomeComponent',
  components: {
    onepage: OnePageComponent,
    page: PageComponent,
  },
  mounted() {
    this.$bus.$on('headermenu:before:link', (location) => {
      this.$refs.onepage.scrollToPage( location.name );
    });
  }
}
</script>

<style scoped lang="scss">
.home_component {
  .page {
    display: flex;
    align-items: center;
    justify-content: center;

    &.home {
      margin-top: -50px;
      // padding-top: 50px;
      position: relative;
      z-index: -1;
      background-image: url(../assets/img/web_images_8.jpg);
      background-image: image-set(
        url(../assets/img/web_images_8-800w.jpg) 1x,
        url(../assets/img/web_images_8.jpg) 2x
      );
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      background-repeat: no-repeat;
    }
  }
}
</style>
