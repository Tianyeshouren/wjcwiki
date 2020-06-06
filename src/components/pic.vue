<template>
  <swiper :options="swiperOption" class="picblock">
    <swiper-slide><img src="../assets/logo.png"/></swiper-slide>
    <swiper-slide><img src="../assets/1.jpg"/></swiper-slide>
    <swiper-slide><img src="../assets/2.jpg"/></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
 </swiper>
</template>

<script>
export default {
  name: 'Pic',
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        },
        slidesPerview: 1,
        autoplay: {
          delay: 3000,
          disableonInteraction: false
        },
        spaceBetween: 30,
        loop: true
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.picblock{
  width:100%;
}
</style>
