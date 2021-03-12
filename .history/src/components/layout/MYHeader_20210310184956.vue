<template>
  <div id="header">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
  </div>
</template>
<script setup>
// @ is an alias to /src
import {ref,reactive} from 'vue';
import logoUrl from '../../assets/logo.png';

const logo=logoUrl;
console.log(logo);


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