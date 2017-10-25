<template>
  <div class="onepage_page">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'PageComponent',
  props: {
    name: { type: String, required: true }
  },
  mounted() {
    this.$parent.$emit('page:mounted', this);
    this.$el.classList.add('onepage_page_' + this.name);
  }
}
</script>

<style scoped lang="scss">
.onepage_page {
  height: 100vh;
}
</style>
