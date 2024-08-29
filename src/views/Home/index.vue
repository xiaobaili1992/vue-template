<template>
  <p class="about_p">公共状态Count: {{ count }}</p>
  <p class="about_p">name: {{ name }}</p>
  <el-button type="primary" @click="updateName">updateName</el-button>
</template>

<script setup lang="ts">
import { userStore, counterStore } from '@/store';
import { toRefs } from 'vue';

const curCounterStore = counterStore();
const curUserStore = userStore();

const { count } = toRefs(curCounterStore);
const { name } = toRefs(curUserStore);
const { updateName } = curUserStore;
</script>

<style lang="scss" scoped>
.about_p {
  font-size: 16px;
  color: #ccc;
}
</style>
