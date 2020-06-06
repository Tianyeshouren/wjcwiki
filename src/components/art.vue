<template>
  <div class="art">
    <transition name="hhh">
      <div v-if="show" id="menu">
        <h1>{{ artitle }}</h1>
      </div>
    </transition>
    <ul>
        <li id ="menu1" @click="abc">1</li>
        <li id ="menu2" @click="fade">2</li>
        <li id ="menu3" @click="testax">3</li>
        <li>4</li>
    </ul>
    <div id="artbox">
        <div class="articlecol">
            <Artskt :key= "index" v-for="(item,index) in items1" :artitle = "item.artitle" :author = "item.author" :zj="item.zj" :fx="item.fx" />
        </div>
        <div class="articlecol">
            <Artskt :key= "index" v-for="(item,index) in items2" :artitle = "item.artitle" :author = "item.author" :zj="item.zj" :fx="item.fx" />
        </div>
        <div class="articlecol">
            <Artskt :key= "index" v-for="(item,index) in items3" :artitle = "item.artitle" :author = "item.author" :zj="item.zj" :fx="item.fx" />
        </div>
    </div>
  </div>
</template>

<script>
import Artskt from '@/components/artskt.vue'

export default {
  name: 'Art',
  props: {
    artitle: String
  },
  data: function () {
    return {
      items1: [
      ],
      items2: [
      ],
      items3: [
      ],
      show: false
    }
  },
  components: {
    Artskt
  },
  methods: {
    abc: function () {
      this.artitle = '改变标题'
      this.items1 = [{ artitle: '11', author: 'wjc', zj: '第一次', fx: 'xiang\nxifenxi' },
        { artitle: '12', author: 'wjc2', zj: '第2次', fx: 'xiang\nxifenxi' }
      ]
      this.items2 = [{ artitle: '21', author: 'wjc', zj: '第一次', fx: 'xiang\nxifenxi' },
        { artitle: '22', author: 'wjc2', zj: '第2次', fx: 'xiang\nxifenxi' }
      ]
      this.items3 = [{ artitle: '31', author: 'wjc', zj: '第一次', fx: 'xiang\nxifenxi' },
        { artitle: '32', author: 'wjc2', zj: '第2次', fx: 'xiang\nxifenxi' }
      ]
    },
    fade: function () {
      this.show = !this.show
    },
    testax: function () {
      var url = 'a.json'
      var _this = this
      this.$axios.get(url).then(function (result) {
        _this.items1 = result.data
        console.log(result)
      }
      )
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.art{
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
#menu1:hover{
    background-color: #42b983;
    color: white;
    cursor: pointer;
    border: #42b983 solid;
}
#menu2:hover{
    background-color: #42b983;
    color: white;
    cursor: pointer;
    border: #42b983 solid;
}
#menu3:hover{
    background-color: #42b983;
    color: white;
    cursor: pointer;
    border: #42b983 solid;
}
#menu4:hover{
    background-color: #42b983;
    color: white;
    cursor: pointer;
    border: #42b983 solid;
}
#artbox{
    margin: auto;
    width:80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.articlecol{
    width: 30%;
    display: flex;
    flex-direction: column;
    margin: 5px 6px;
}
ul {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    list-style-type: none;
    padding: 0;
}
li {
  margin: 0 5px;
  width: 30px;
  border: black solid;
}
a {
  color: #42b983;
}
.hhh-enter {
  opacity: 0;
  transform: translateY(-20px);
}
.hhh-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.hhh-enter-active {
  transition: all .5s ease;
}
.hhh-leave-active {
  transition: all .5s cubic-bezier(1,0.5,0.8,1.0);
}
#menu{
  background: orange;
}
</style>
