<template>
  <div class="bt3">
    <div id="bt3z">
        这就是一个按钮
    </div>
    <div id="bt3zzz">
        3213123
    </div>
  </div>
</template>

<script>

export default {
  name: 'togbut',
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    // 使用这种方法来引入第三方js，也就是写好的一切。但是虽然一开始不会全局引用但是最后一定会全局引用
    const s = document.createElement('script')
    s.type = 'text/javascript'
    s.src = 'lib/editormd/js/jquery.min.js'
    const s2 = document.createElement('script')
    s2.type = 'text/javascript'
    s2.src = 'lib/editormd/togbut.js'
    document.body.appendChild(s)
    document.body.appendChild(s2)
  },
  beforeDestroy () {
  },
  methods: {
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
</style>
