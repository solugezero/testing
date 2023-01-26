<template>
  <div class="stats">
    <div class="stats_item">
      <img src="svg/commentOutline.svg" alt="" class="stats_item__icon" />
      <p class="stats_item__value">451</p>
    </div>

    <div class="stats_item">
      <img src="svg/starFilled.svg" alt="" class="stats_item__icon" />
      <p class="stats_item__value">4.5</p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.stats {
  display: flex;
  gap: 10px;

  &_item {
    display: flex;
    gap: 6px;

    &__value {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #5f5f5f;
    }
  }
}
</style>
