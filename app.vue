<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()

useHead({
  titleTemplate: (title) => [title, runtimeConfig.public.appName].filter(Boolean).join(' - ')
})
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <UNotifications />
    <USlideovers />
    <UModals />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.125s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
</style>
