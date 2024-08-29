<template>
  <p class="about_p">公共状态name: {{ name }}</p>
  <p class="about_p">Count: {{ count }}</p>
  <el-button type="primary" @click="increment">Increment</el-button>
  <el-button type="primary" @click="decrement">Decrement</el-button>
</template>

<script setup lang="ts">
import { userStore, counterStore } from '@/store';
import { toRefs } from 'vue';

const curCounterStore = counterStore();
const curUserStore = userStore();

const { count } = toRefs(curCounterStore);
const { name } = toRefs(curUserStore);
const { increment, decrement } = curCounterStore;
</script>

<style lang="scss" scoped>
.about_p {
  font-size: 16px;
  color: #ccc;
}
</style>
