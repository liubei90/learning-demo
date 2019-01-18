<template>
  <div class="full-screen">
    <template v-if="orgInfo">
      <component :is="currentComponent" v-bind="orgInfo.props"></component>
    </template>
    <div v-else>
      暂无全屏数据
    </div>
  </div>
</template>

<script>
export default {
  props: {
    orgInfo: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {};
  },
  computed: {
    currentComponent() {
      if (this.orgInfo) {
        console.log('currentComponent', this.orgInfo.component);
        return this.orgInfo.component || 'div';
      }
      return 'div';
    }
  },
  watch: {
    orgInfo() {
      console.log('orgInfo change', this.orgInfo);
    }
  },
  methods: {
  },
};
</script>

<style>
:-webkit-full-screen {
  
}
:-moz-full-screen {
  
}
:full-screen {
  
}
:fullscreen {
  
}
</style>

<style lang="scss">
.full-screen {
  background-color: #fff;
  width: 100%;
  height: 100%;
}
</style>
