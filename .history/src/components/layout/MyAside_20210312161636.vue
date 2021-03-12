<template>
  <el-menu
      :router='true'
      :default-active="activePath"
      class="el-menu-vertical-demo">
    <template v-for="(item,index) in navList">
      <el-menu-item :index="item.linkTo" :key="index" v-if="item.child.length===0&&role">
        <template #title>
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
      </el-menu-item>
      <el-submenu v-if="item.child.length!==0&&role" :index="item.linkTo" :key="index">
        <template #title>
          <i :class="item.icon"></i>
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item v-for="(ct,ci) in item.child" :index="ct.linkTo" :key="ci">
          <i :class="ct.icon"></i>
          <span>{{ ct.name }}</span>
        </el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script setup>
import {useStore} from "vuex";
import {useRouter} from "vue-router";

const store = useStore();

const router = useRouter();

const navList=[
  {
    name: "轮播管理",
    icon: "",
    linkTo: "/index",
    show: ['管理员'],
    child:[]
  },
  {
    name: "权限管理",
    icon: "/auth",
    linkTo: "",
    child: [
      {
        name: "角色管理",
        icon: "",
        linkTo: "/auth/role",
        child:[]
      },
      {
        name: "用户管理",
        icon: "",
        linkTo: "",
        child:[]
      }
    ]
  },
];

const role = (item) => {
  let rolename = store.state.roleName;
  return item.show.includes(rolename);
};

const activePath=router.path;
</script>

<style scoped lang="scss">
.el-menu{
  height: 100%;
}
</style>
