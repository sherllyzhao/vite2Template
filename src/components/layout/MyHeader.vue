<template>
  <div id="header">
    <div class="logo">
      <img :src="logo" alt=""/>
      <span>后台管理系统</span>
    </div>
    <div class="user">
      <el-popover
          placement="bottom"
          :width="100"
          trigger="click"
      >
        <div class="option">
          修改密码
        </div>
        <div class="option">
          退出
        </div>
<!--        原来的slot="reference"变成了#reference-->
        <template #reference>
          <div class="user-info">
            <el-avatar :size="30" :src="avatar"></el-avatar>
            <span>{{ store.state.username }}</span>
          </div>
        </template>
      </el-popover>
    </div>
  </div>
</template>
<script setup>
// @ is an alias to /src
import {toRefs} from 'vue';
import {useStore} from 'vuex'
import logoUrl from '../../assets/logo.png';
import avatarUrl from '../../assets/images/avatar.png';

const logo = logoUrl;
const avatar = avatarUrl;
const store = useStore();


</script>
<style lang="scss" scoped>
#header {
  width: 100%;
  height: 100%;
  float: left;

  .logo {
    height: 100%;
    vertical-align: middle;
    display: flex;
    align-items: center;
    float: left;

    img {
      height: 60%;
      margin-right: 10px;
    }

    span {
      font-size: 20px;
    }
  }

  .user {
    float: right;
    height: 100%;
    display: flex;
    align-items: center;
    margin-right: 20px;

    .user-info {
      display: flex;
      align-items: center;

      :deep(.el-avatar) {
        margin-right: 10px;
      }
    }
  }
}

.option{
  height: 40px;
  line-height: 40px;
  text-align: center;
  cursor: pointer;
  &:hover{
    background-color: #47a0fc10;
    color: #47a0fc;
  }
}

</style>
