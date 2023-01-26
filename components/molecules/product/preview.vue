<template>
  <div class="product-preview">
    <p class="product-preview__title">🎁400 ГЕМОВ в Brawl Stars🎁</p>
    <img src="img/preview.png" alt="" class="product-preview__img" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.product-preview {
  display: flex;
  flex-direction: column;
  gap: 12px;

  &__title {
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 39px;
    letter-spacing: -0.07em;
    color: #ffffff;
  }

  &__img {
    max-width: 752px; // temporarily
  }
}
</style>
