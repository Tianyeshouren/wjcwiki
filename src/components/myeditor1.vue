<template>
  <div id="editor-md" class="main-editor">
    <input type='file' id = "jssss" accept='.md' style="display:none" onchange='openFile(event)'>
    <textarea></textarea>
  </div>
</template>

<script>
import $script from 'scriptjs'

export default {
  name: 'myeditor',
  data () {
    return {
      instance: null
    }
  },
  mounted () {
    $script([
      'lib/editormd/js/jquery.min.js',
      'lib/editormd/js/zepto.min.js', 'lib/editormd/FileSaver.js'], () => {
      $script(['lib/editormd/editormd.min.js', 'lib/editormd/myed.js'], () => {
        this.initEditor()
      })
    })
  },
  beforeDestroy () {
    this.$store.commit('setcot', window.editor.getMarkdown())
  },
  methods: {
    initEditor () {
      this.$nextTick((editorMD = window.abc) => {
        if (editorMD) {
          this.instance = editorMD(this.$store.state.CURCOT)
        }
      })
    }
  }
}
</script>

<style scoped>
.main-editor{
width:100%;
height:100%;
margin-top: 120px;
z-index: 0;
}
</style>
