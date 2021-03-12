<template>
  <div id="header">
    <div class="logo">
      <img :src="logo" alt="" />
    </div>
  </div>
</template>
<script>
import {ref,reactive} from 'vue';

export default{
    setup(){
        const logo='@/assets/logo.png';

        return logo;
    }
}
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