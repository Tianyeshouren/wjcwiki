<template>
  <div class="page1" >
       <router-link to="/page1/page11">page1.1</router-link> |
        <router-link to="/page1/page12">page1.2</router-link>
        <router-view/>

    <h1>This is a page 1</h1>
    <Pic/>
  </div>
</template>

<script>
// @ is an alias to /src
import Pic from '@/components/pic.vue'

export default {
  name: 'abcd',
  components: {
    Pic
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
