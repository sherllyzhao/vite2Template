<template>
    <div id="header">
        <div class="logo">
            <img :src="logo" alt="">
        </div>
    </div>
</template>
<script setup>
import {ref,reactive} from 'vue'
const logo='@/assets/logo.png';
return {
    ref(logo);
}
</script>
<style lang="scss" scoped>
#header{
    width:100%;
    height: 100%;
    float: left;

    .logo{
        height: 100%;
    }
}
</style>