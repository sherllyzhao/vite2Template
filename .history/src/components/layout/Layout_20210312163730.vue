<template>
<div id="layout">
  <el-container class="out-container">
    <el-header>
      <my-header></my-header>
    </el-header>
    <el-container class="inner-container">
      <el-aside width="210px">
        <my-aside>
          
        </my-aside>
      </el-aside>
    </el-container>
  </el-container>
</div>
</template>

<script setup>
import MyHeader from './MyHeader.vue'
import MyAside from './MyAside.vue'

</script>

<style scoped lang="scss">
#layout{
  width: 100%;
  height: 100%;

  .out-container{
    height: 100%;

    .el-header{
      box-shadow: 0 5px 5px #00000010;
    }

    .inner-container{
      width: 100%;
      height: calc(100% - 60px);
      overflow: hidden;
    }
  }
}
</style>
