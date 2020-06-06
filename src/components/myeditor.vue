<template>
  <div id="editor-md" class="main-editor">
    <textarea></textarea>
  </div>
</template>

<script>
import $script from 'scriptjs'

export default {
  name: 'myeditor',
  props: {
    editorPath: {
      type: String,
      default: 'lib/editor.md/'
    },
    editorConfig: {
      type: Object,
      default () {
        return {
          width: '100%',
          height: 530,
          path: 'lib/editormd/lib/', // Autoload modules mode, codemirror, marked... dependents libs path
          codeFold: true,
          saveHTMLToTextarea: true,
          searchReplace: true,
          htmlDecode: 'style,script,iframe|on*',
          emoji: true,
          taskList: true,
          tocm: true,
          tex: true,
          flowChart: true,
          sequenceDiagram: true,
          imageUpload: true,
          imageFormats: ['jpg', 'jpeg', 'gif', 'png', 'bmp', 'webp'],
          imageUploadURL: 'lib/editormd/examples/php/upload.php',
          onload: () => {
            console.log('onload', this)
          }
        }
      }
    }
  },
  data () {
    return {
      instance: null
    }
  },
  created () {
  },
  mounted () {
    $script([
      'lib/editormd/js/jquery.min.js',
      'lib/editormd/js/zepto.min.js'], () => {
      $script('lib/editormd/editormd.min.js', () => {
        this.initEditor()
      })
    })
  },
  beforeDestroy () {
  },
  methods: {
    initEditor () {
      this.$nextTick((editorMD = window.editormd) => {
        if (editorMD) {
          this.instance = editorMD('editor-md', this.editorConfig)
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
