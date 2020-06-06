<template>
  <div class="page3">
    <div id="showme" @click="disp">{{showtext}}</div>
      <transition name="fade">
      <div id="leftmenu" v-if="show">
        <li>保存</li>
        <li>提交</li>
        <li>关闭</li>
        <li>吃饭</li>
        <li>上课</li>
      </div>
      </transition>
    <div id="content">
      <h1>文章标题:{{this.$store.state.curArt }} 点击次数:{{this.$store.state.COUNT }}</h1>
    </div>
    <myeditor></myeditor>
  </div>
</template>

<script>
import myeditor from '@/components/aliveed.vue'

export default {
  name: 'page3',
  data: function () {
    return { artitile: 's', showtext: '展开' }
  },
  components: {
    myeditor
  },
  computed: {
    show: function () {
      if (this.showtext === '展开') {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    disp: function () {
      if (this.showtext === '展开') {
        this.showtext = '收起'
        this.$store.commit('navishow', true)
      } else {
        this.showtext = '展开'
        this.$store.commit('navishow', false)
      }
    }
  }
}
</script>

<style lang="less">
.page3 {
  width: 80%;
  margin: auto;
  position: relative;
}
#leftmenu {
  background-color:rgb(240, 75, 10);
  position: absolute;
  top:40px;
  left:0px;
  width:30%;
  color:white;
  list-style: none;
  z-index: 2;
  height: 900px;
}
#content {
  color: white;
  position: absolute;
  top:40px;
  margin-left: 50%;
  transform: translateX(-50%);
  background-color: rgb(15, 108, 230);
  text-align: center;
  width: 70%;
  height: 100px;
}
#showme:hover {
    background-color: rgb(240, 75, 10);
    color: white;
    cursor: pointer;
    z-index: 3;
}
#showme {
    width:60px;
    background-color: rgb(15, 108, 230);
    color: white;
    cursor: pointer;
    z-index: 3;
}
.fade-enter {
  opacity: 0;
  transform: translateX(-200px);
}
.fade-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}
.fade-enter-active {
  transition: all .5s ease;
}
.fade-leave-active {
  transition: all .5s cubic-bezier(1,0.5,0.8,1.0);
}
</style>
