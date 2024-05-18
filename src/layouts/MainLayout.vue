<template>
  <h1
    class="text-3xl font-bold underline bg-gradient-to-r from-cyan-500 to-blue-500"
  >
    Hello World!
  </h1>
  <div class="btn-blue">323</div>
  <el-icon>
    <el-icon-edit></el-icon-edit>
  </el-icon>
  <i-ep-apple></i-ep-apple>
  <el-button type="success">Success</el-button>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
onMounted(() => {
  ElMessage({
    message: '这是一个全局的message',
    type: 'success'
  })
})
</script>

<style lang="scss" scoped></style>
