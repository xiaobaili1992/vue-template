import { defineStore } from 'pinia';

export const userStore = defineStore('user', {
  state: () => ({
    name: '张三',
  }),
  actions: {
    updateName() {
      this.name = '李四' + ~~(Math.random() * 1000);
    },
  },
});
