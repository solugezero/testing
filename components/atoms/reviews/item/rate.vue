<template>
    <div class="reviews-item_rate">
        <img src="svg/starFilled.svg" v-for="(item, idx) in currentRate" :key="`reviews-item_rate_starFilled__${idx}`" alt="">
        <img src="svg/starGray.svg" v-for="(item, idx) in (5 - currentRate)" :key="`reviews-item_rate_starFilled__${idx}`" alt="">
    </div>
</template>

<script setup lang="ts">
import { Ref } from 'vue';
const currentRate: Ref<number> = ref(4)
</script>

<style scoped lang="scss">

</style>