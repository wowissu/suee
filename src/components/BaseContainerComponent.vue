<template>
  <div class="base_container">
    <slot name="header">
      <baseheader></baseheader>
    </slot>
    <slot name="content"></slot>
  </div>
</template>

<script>
import BaseHeader from '@/components/BaseHeaderComponent'

export default {
  components: {
    baseheader: BaseHeader
  },
  name: 'BaseContainerComponent'
}
</script>

<style scoped lang="scss">
.base_container {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

  // min-height: 2000px;
}
</style>
