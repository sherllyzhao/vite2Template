<template>
<div id="layout">
  <el-container>
    <el-header>
      <my-header></my-header>
    </el-header>
  </el-container>
</div>
</template>

<script setup>
import MyHeader from './MyHeader.vue'
</script>

<style scoped lang="scss">
#layout{
  width: 100%;
  height: 100%;
}
</style>
