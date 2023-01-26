<template>
    <div class="similar-item">
        <img src="img/preview.png" alt="" class="similar-item__img">
        <AtomsProductPrice />
        <AtomsProductTags />
        <AtomsStats />
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.similar-item {
    display: flex;
    flex-direction: column;
    gap: 9px;

    &__img {
        width: 100%;
        aspect-ratio: 16/9;
    }
}
</style>