<template>
  <div class="product-subtags">
    <span
      class="product-subtags-tag product-subtags-base"
      v-for="(tag, index) in tags"
      :key="`${index}__tag_line`"
    >
      {{ tag }}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  tags?: any;
  isStrong?: false;
}

const props = withDefaults(defineProps<Props>(), {
  tags: ["60 GOLD CUBES", "БЕЗ ВХОДА", "ЧЕРЕЗ ID", "ВЫПОЛНЯЮ ЗА 5 МИНУТ"],
});
</script>

<style lang="scss" scoped>
.product-subtags {
  display: flex;
  font-size: 12px;
  line-height: 18px;
  white-space: nowrap;
  flex-wrap: wrap;
  :first-child {
    &::before {
      content: "";
      margin: unset;
    }
  }
  &-tag {
    &::before {
      content: "|";
      margin: 0 3px;
    }
  }
  &-base {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: -0.014em;
    color: #a7a7a7;
  }
}
</style>
