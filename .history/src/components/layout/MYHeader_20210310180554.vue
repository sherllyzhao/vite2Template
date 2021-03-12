<template>
  <div id="header">
    <div class="logo">
      <img src="logo" alt="" />
    </div>
  </div>
</template>
<script setup>
// @ is an alias to /src
import {ref,reactive} from 'vue';

const logo=import('../../assets/logo.png');


</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 100%;
  float: left;

  .logo {
    height: 100%;
  }
}
</style>