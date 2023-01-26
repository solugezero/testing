<template>
  <NuxtLayout>
    <div id="app">
      <OrganismsHeader />
      <OrganismsNavigation />
    </div>
    <NuxtPage class="page" />
  </NuxtLayout>
</template>

<style lang="scss" scoped>
#app {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
