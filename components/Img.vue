<template>
  <img loading="lazy" class="lazy" data-srcset="@/assets/imgs/loader.gif"/>
</template>
<script>
export default {
  data() {
  },
  methods: {},
  mounted() {
    document.addEventListener("DOMContentLoaded", function () {
      // 選定頁面中帶有 lazy class 名稱的那張圖片
      let lazyImage = document.querySelector("img.lazy");

      const lazyLoad = function () {
        // 確認圖片是否進到可視範圍
        if (
          lazyImage.getBoundingClientRect().top <= window.innerHeight &&
          lazyImage.getBoundingClientRect().bottom >= 0
        ) {
          // 確認有才加載圖片
          // lazyImage.srcset = lazyImage.dataset.srcset;
          // lazyImage.src = lazyImage.dataset.src;
          lazyImage.classList.remove("lazy");
          // 完成後就註銷掉 scroll 事件監聽
          document.removeEventListener("scroll", lazyLoad);
        }
      };

      // 註冊 scroll 事件監聽器，使用者滑動頁面觸發 lazyLoad
      document.addEventListener("scroll", lazyLoad);
    });
  },
};
</script>