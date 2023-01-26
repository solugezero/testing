<template>
  <div class="reviews-item">
    <div class="reviews-item_top">
      <AtomsReviewsItemRate />
      <p class="reviews-item_top__date">Вчера в 12:02</p>
    </div>

    <div class="reviews-item_content">
      <p class="reviews-item_content__value">
        Имба! Не ожидал, что продавец с огромным количеством отзывов ответит
        настолько быстро. Рекомендую!
      </p>
      <div class="reviews-item_content__parent-item">
        🎁400 ГЕМОВ в Brawl Stars🎁
      </div>
    </div>

    <AtomsProfilePreview />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.reviews-item {
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 8px;
  padding: 18px;
  justify-content: space-between;
  display: flex;
  flex-direction: column;

  &_top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__date {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #5f5f5f;
    }
  }

  &_content {
    display: flex;
    flex-direction: column;
    gap: 7px;

    &__value {
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.014em;
    }

    &__parent-item {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 15px;
      color: #5f5f5f;
    }
  }
}
</style>
