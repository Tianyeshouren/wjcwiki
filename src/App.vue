<template>
  <div id="app">
    <transition name="navi">
      <div v-if="ifshow" id="nav">
        <router-link to="/">{{aaa}}</router-link> |
        <router-link to="/About">About</router-link> |
        <router-link to="/page1">Log</router-link> |
        <router-link to="/page2">Art</router-link> |
        <router-link to="/page3">To-do</router-link> |
        <router-link to="/test">Test</router-link>
      </div>
    </transition>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <keep-alive>
    <router-view name='e'></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  name: 'app',
  data: function () {
    return { aaa: '首页' }
  },
  computed: {
    ifshow: function () {
      return this.$store.state.IFSHOW
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir,"Microsoft YaHei","黑体","宋体",Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#navshow:hover {
    background-color: rgb(240, 75, 10);
    color: white;
    cursor: pointer;
    z-index: 3;
}
.navi-enter {
  opacity: 0;
  transform: translateY(-50px);
}
.navi-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
.navi-enter-active {
  transition: all .5s ease;
}
.navi-leave-active {
  transition: all .5s cubic-bezier(1,0.5,0.8,1.0);
}
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
