<template>
  <div class="page2">
    <h1>文章概览</h1>
    <art :artitle="tit" />
  </div>
</template>

<script>
// @ is an alias to /src
import Art from '@/components/art.vue'

export default {
  name: 'abc',
  computed: {
    tit: function () {
      return '以下是n栏风格'
    }
  },
  components: {
    Art
  }
}
</script>
