<template>
  <div class="bt3">
    <div id="bt3z" @mouseover="ok&&sb()">
        这就是一个按钮
    </div>
    <div id="bt3zzz">
        <p>按钮效果真是好阿</p>
    </div>
    <bd/>
  </div>
</template>

<script>

export default {
  name: 'togbut',
  data () {
    return {
      instance: null,
      ok: true
    }
  },
  mounted () {
  },
  beforeDestroy () {
  },
  methods: {
    sb: function () {
      console.log('sb')
      window.tbok()
      this.ok = false
    }
  },
  components: {
    bd: {
      render (createElement) {
        return createElement('div', { }, [
          createElement('script', { attrs: { type: 'text/javascript', src: 'lib/editormd/js/jquery.min.js' } }),
          createElement('script', { attrs: { type: 'text/javascript', src: 'lib/editormd/togbut.js' } })
        ])
      }
    }
  }
}

</script>

<style scoped>
.bt3{
width:100%;
height:100%;
margin-top: 120px;
z-index: 0;
}
#bt3z:hover {
    background-color: rgb(240, 75, 10);
    color: white;
    cursor: pointer;
    z-index: 3;
}
#bt3z {
    margin: auto;
    width:30%;
    background-color: rgb(15, 108, 230);
    color: white;
    cursor: pointer;
    z-index: 3;
}
</style>
