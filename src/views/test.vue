<template>
  <div class="page1" >
      sdadasd<br/>
      <togbut/>
       <router-link to="/test1">1</router-link> |
       <router-link to="/test2">2</router-link>
        <router-view/>
    <h1>This is a page 1</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import togbut from '@/components/bt3.vue'

export default {
  name: 'abcdac',
  mounted () {
  },
  components: {
    togbut
  }
}

</script>

<style lang="less">
.page1 {
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
