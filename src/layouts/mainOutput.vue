<template>
  <div class="common-layout w-full h-full">
    <el-container class="w-full h-full">
      <el-header class="bg-slate-500 text-center leading-[4]">Header</el-header>
      <el-container>
        <el-aside width="200px" class="bg-slate-400">
          <el-menu
            default-active="cesium"
            class="el-menu-vertical-demo h-full"
            active-text-color="#ffd04b"
            background-color="#545c64"
            text-color="#fff"
            router
          >
            <template v-for="item in menuList" :key="item.index">
              <el-sub-menu v-if="item.type === 'menu'" :index="item.index">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>{{ item.label }}</span>
                </template>
                <template
                  v-for="itemGroup in item.children"
                  :key="itemGroup.index"
                >
                  <el-sub-menu
                    v-if="itemGroup.type === 'menu'"
                    :index="itemGroup.index"
                  >
                    <el-icon><location /></el-icon>
                    <span>{{ itemGroup.label }}</span>
                  </el-sub-menu>
                  <el-menu-item v-else :index="itemGroup.index">
                    <el-icon><location /></el-icon>
                    <span>{{ itemGroup.label }}</span>
                  </el-menu-item>
                </template>
              </el-sub-menu>
              <el-menu-item v-else :index="item.index">
                <template #title>
                  <el-icon><location /></el-icon>
                  <span>{{ item.label }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-menu>
        </el-aside>
        <el-main
          style="margin: 0; padding: 0"
          class="bg-white m-0 p-0 w-[80vw] h-[92vh]"
        >
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
const menuList = [
  {
    label: '第三方库使用',
    index: '1',
    type: 'menu',
    children: [
      {
        label: 'Cesium',
        index: 'cesium',
        type: 'item',
        children: []
      },
      {
        label: 'elTable',
        index: 'elTable',
        type: 'item',
        children: []
      }
    ]
  },
  {
    label: '页面布局CSS',
    index: 'CSSContainer',
    type: 'item',
    children: []
  },
  {
    label: '学习笔记截图',
    index: 'learnNotes',
    type: 'item',
    children: []
  }
]
</script>
<style scoped></style>
