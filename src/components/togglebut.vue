<template>
  <div class="bt1">
    <div id="zzz">
        这就是一个按钮
    </div>
    <div id="zzzcot">
        3213123
    </div>
  </div>
</template>

<script>
import $ from 'jquery'

export default {
  name: 'togbut',
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    this.initEditor()
  },
  beforeDestroy () {
  },
  methods: {
    initEditor () {
      $(document).ready(function () {
        $('#zzz').click(function () {
          $('#zzzcot').slideToggle()
        })
      })
    }
  }
}
</script>

<style scoped>
.bt1{
width:100%;
height:100%;
margin-top: 120px;
z-index: 0;
}
</style>
