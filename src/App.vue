<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link>
      &nbsp;&nbsp;&nbsp;
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
