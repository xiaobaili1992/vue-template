<template>
  <el-container class="page-layout">
    <Aside />
    <el-container>
      <el-header class="page-header">
        {{ JSON.stringify(getRoutesPath) }}
        <el-breadcrumb separator="/">
          <el-breadcrumb-item v-for="(item, index) in breadcrumbs" :key="index">
            {{ item?.name }}
          </el-breadcrumb-item>
        </el-breadcrumb>
      </el-header>
      <el-main>
        <div class="page-main">
          <router-view />
        </div>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import { ref, watch } from 'vue';
import Aside from './Aside.vue';
import { breadcrumbStore } from '@/store';

const current = '边缘网关';
const store = breadcrumbStore();
const breadcrumbs = ref([]);

watch(
  () => store.routesPath,
  (newValue) => {
    newValue.unshift({ path: '', name: current });
    breadcrumbs.value = newValue;
  },
);
</script>

<style lang="scss" scoped>
.page-layout {
  width: 100%;
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;

  .page-header {
    background-color: #fff;
    height: 50px !important;
    box-shadow: 0px 0px 5px 0px rgb(232 232 232 / 53%);
    display: flex;
    align-items: center;
  }
  .page-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
}
</style>
