<template>
  <div class="life_component">
    <router-link :to="{ name: 'home' }">Home page</router-link>
  </div>
</template>

<script>
export default {
  name: 'LifeComponent',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style scoped lang="scss">
.life_component {

}
</style>
