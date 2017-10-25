<template>
  <ul class="header_menu">
    <li class="website_link" @click="linkTo({ name: 'home' })">Su's</li>
    <li class="website_link" @click="linkTo({ name: 'life' })">Life</li>
    <li>&</li>
    <li class="website_link" @click="linkTo({ name: 'tour' })">Tour</li>
    <li>&</li>
    <li class="website_link" @click="linkTo({ name: 'exp' })">Exp</li>
  </ul>
</template>

<script>
export default {
  name: 'HeaderMenuComponent',
  methods: {
    linkTo(params) {
      this.$emit('before:link', params);
      this.$router.replace(params);
      this.$emit('link', params);
      this.$emit('after:link', params);
    }
  }
}
</script>

<style scoped lang="scss">
.header_menu {
  font-size: 20px;
  height: 50px;
  display: flex;
  align-items: baseline;
  padding: 0px;
  margin: 0px;
  font-family: monospace;
  font-weight: bold;
  color: #fff;
  text-shadow: 0px 0px 10px #333;
  margin-left: 10px;
  list-style: none;
  cursor: default;

  li {
    padding: 10px 10px;
  }

  .website_link {
    cursor: pointer;
    -webkit-transition: all 0.2s;
    -moz-transition: all 0.2s;
    -ms-transition: all 0.2s;
    -o-transition: all 0.2s;
    transition: all 0.2s;

    &:first-child {
      font-size: 24px;
    }

    &:not(:first-child):hover {
      text-decoration: underline;
    }

    &:hover {
      text-shadow: 0px 0px 15px #000;
    }
  }
}
</style>
