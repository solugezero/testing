<template>
  <div class="product-price">
    <p class="product-price__new" v-if="promotion">{{ newPrice }}</p>
    <p class="product-price__percent" v-if="promotion">-17%</p>
    <p :class="getCurrentStylePrice">{{ price }}</p>
  </div>
</template>

<script setup lang="ts">
const newPrice = "149 ₽";
const price = "180 ₽";
const promotion = true
const getCurrentStylePrice = computed((): any => {
    return promotion ? "product-price__oldprice" : "product-price__price"
})
</script>

<style scoped lang="scss">
.product-price {
  display: flex;
  gap: 8px;
  align-items: center;

  &__new {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    color: #6feb42;
  }

  &__percent {
    background: #6feb42;
    border-radius: 17px;
    color: #050505;
    padding: 2px 6px;
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  &__oldprice {
    text-decoration: line-through;
    text-decoration-color: #ff5656;
    text-decoration-thickness: 2px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.014em;
  }
}

.product-price__price {
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.014em;
  color: #ffffff;
}
</style>
