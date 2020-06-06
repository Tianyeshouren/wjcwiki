<template>
  <div class="artitem">
    <div class="art1part">
        <div class="artt">
                   <p>{{author}} <br/>
                      {{artitle}}
                   </p>
        </div>
        <div class="artz">
                    {{zj}}
        </div>
     </div>
          <div class="ana"  v-html="postfx">
          </div>
      <div class="btnm" @click="toanother"><a href="#">Read More</a></div>
  </div>
</template>

<script>
export default {
  name: 'Artskt',
  props: {
    artitle: String,
    author: String,
    zj: String,
    fx: String
  },
  computed: {
    postfx: function () {
      return this.fx.replace('\\n', '<br/>')
    }
  },
  methods: {
    readmore: function () {
      this.artitle = '看更多'
    },
    toanother: function () {
      this.$router.push('/page3')
      this.$store.commit('readmore', this.artitle)
      this.$store.dispatch('increase')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.artitem{
    margin: 10px;
    width: 100%;
    position: relative;
    height: 300px;
    background-color:white;
    overflow: hidden;
}
.art1part{
    padding :5px;
    border:2px solid;
}
.artt{
    background-color: rgb(189, 185, 185);
    padding :1px;
    text-align:center;
}
.artz{
    background-color: white;
}
.btnm{
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    width: 40%;
    background-color:rgb(182, 179, 174);
    position: absolute;
    left:50%;
    bottom: 10px;
    transform: translateX(-50%);
}
.btnm:hover{
    background-color:#0552aae8;
}
.ana{
    padding-top: 10px;
    background-color: rgb(235, 228, 217);
    height: 300px;
}
a:link{
    color:white;
    text-decoration: none;
}
a:visited{
    color: white;
    text-decoration: none;
}
a:hover {
    text-decoration: underline;
}
</style>
