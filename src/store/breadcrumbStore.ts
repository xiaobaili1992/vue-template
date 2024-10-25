import { defineStore } from 'pinia';

export const breadcrumbStore = defineStore('breadcrumb', {
  state: () => ({
    currentPath: {
      path: '',
      name: '',
    },
    routesPath: [],
  }),
  actions: {
    updateCurrentPath(currentPath: any) {
      this.currentPath = currentPath;
    },
    updateRoutesPath(routePath: any) {
      this.routesPath = routePath;
    },
  },
});
