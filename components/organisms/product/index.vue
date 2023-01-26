<template>
    <div class="product">
        <MoleculesProductPreview />
        <MoleculesProductData />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.product {
    display: grid;
    width: 100%;
    grid-template-columns: 60% calc(40% - 16px);
    gap: 16px;
}
</style>