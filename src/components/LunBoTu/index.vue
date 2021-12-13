<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="c in list" :key="c.id">
        <img :src="c.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Lunbotu",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(function() {
            var mySwiper = new Swiper(this.$refs.mySwiper, {
          loop: true, // 循环模式选项

          // 如果需要分页器
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },

          // 如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        });
        })
      },
    },
  },
  mounted() {
    console.log(this.list);
  },
};
</script>

<style>
</style>