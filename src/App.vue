<template>
  <div id="app">
    <container>
      <template slot="content">
        <router-view/>
      </template>
    </container>
  </div>
</template>

<script>
import BaseContainer from '@/components/BaseContainerComponent'

export default {
  components: {
    container: BaseContainer
  },
  name: 'app'
}
</script>

<style>
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
</style>