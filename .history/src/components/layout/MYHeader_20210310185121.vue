<template>
  <div id="header">
    <div class="logo">
      <img :src="logo" alt="" />
      <span>后台管理系统</span>
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
    vertical-align: middle;

    img{
        height: 100%;
    }

    span{
        font-size: 20px;
    }
  }
}
</style>