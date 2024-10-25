<template>
  <el-aside :width="isCollapse ? '60px' : '220px'" class="page-menu">
    <div class="menu-wrap">
      <div class="menu-contents">
        <el-menu
          default-active="2"
          :router="true"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          @select="onSelect"
        >
          <MenuItem v-for="item in routes" :key="item.key" :route="item" />
        </el-menu>
      </div>
    </div>
    <div class="page-menu-collapsed" @click="isCollapse = !isCollapse">
      <i :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"></i>
    </div>
  </el-aside>
</template>

<script setup lang="jsx">
import { ref } from 'vue';
import { routes } from '@/router';
import { RouterLink } from 'vue-router';
import { breadcrumbStore } from '@/store';

const curBreadcrumbStore = breadcrumbStore();

const { updateCurrentPath, updateRoutesPath } = curBreadcrumbStore;

const isCollapse = ref(false);

const convertDataToRoutes = (data, routes) => {
  const result = [];
  let currentRoutes = routes;
  data.forEach((path) => {
    const foundRoute = currentRoutes.find((route) => route.path === path);
    if (foundRoute) {
      result.push({
        path: foundRoute.path,
        name: foundRoute.name,
      });
      currentRoutes = foundRoute.children || [];
    }
  });
  return result;
};

const onSelect = (_, keyPath) => {
  const transformedRoutes = convertDataToRoutes(keyPath, routes) || [];
  updateCurrentPath(transformedRoutes?.slice(-1)?.[0]);
  updateRoutesPath(transformedRoutes);
};

const MenuItem = {
  props: {
    route: Object,
  },
  setup({ route = {} }) {
    const { children, key, path, name } = route || {};
    return () => {
      if (!children) {
        return <el-menu-item index={path}>{name}</el-menu-item>;
      }
      return (
        <el-sub-menu
          index={path}
          v-slots={{
            title: () => <span>{name}</span>,
          }}
        >
          <el-menu-item-group>
            {children.map((child) => (
              <MenuItem key={child.key} route={child} />
            ))}
          </el-menu-item-group>
        </el-sub-menu>
      );
    };
  },
};
</script>

<style lang="scss" scoped>
.page-menu {
  box-shadow: 0px 8px 8px 0px rgb(211 211 211 / 50%);
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  .menu-wrap {
    flex: 1;
    width: 100%;
    position: relative;
    overflow: hidden;
    background: #fff;
    .menu-contents {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
    }
  }
  &-collapsed {
    cursor: pointer;
    height: 56px;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    background-color: #fff;
    i {
      font-size: 26px;
      color: rgb(192, 197, 205);
      margin-left: 16px;
    }
  }
}
.menu {
  height: 100%;
  border-right: none;
}
::v-deep {
  .el-menu {
    border-right: none;
    height: 100%;
  }
  .el-menu-item:hover,
  .el-sub-menu__title:hover {
    background: rgba(237, 241, 251, 1);
  }

  .el-menu-item-group__title {
    padding: 0;
  }

  .el-menu-item.is-active {
    color: #2355d8;
    background: rgba(237, 241, 251, 1);
  }
}
</style>
