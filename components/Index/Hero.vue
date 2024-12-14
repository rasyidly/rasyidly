<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig()
</script>

<template>
    <UContainer :ui="{ base: 'py-24 text-center space-y-4' }">
        <UAvatar size="3xl" :src="runtimeConfig.public.user.avatar" alt="U" :ui="{ wrapper: 'ring ring-white' }" />
        <p class="text-sm text-gray-500 dark:text-gray-400">Hi 👋🏻 I'm {{ runtimeConfig.public.user.fullName }}!</p>
        <h1 class="text-3xl sm:text-5xl lg:text-6xl max-w-screen-md mx-auto font-light">Coffee, Code & Creativity. Your <span class="text-primary">Design-minded</span> Developer Guy</h1>
        <br />
        <div class="flex flex-wrap items-center justify-center gap-2">
            <UButton size="xl" color="gray" class="text-sm" trailing-icon="i-heroicons-arrow-trending-up" label="Get in touch" :to="`mailto:${runtimeConfig.public.user.email}`" external :ui="{ padding: { xl: 'px-6' }, rounded: 'rounded-full' }" />
            <UButton size="xl" color="gray" class="text-sm" variant="link" trailing-icon="i-heroicons-arrow-right" label="View works" to="/works" :ui="{ padding: { xl: 'px-6' }, rounded: 'rounded-full' }" />
        </div>
    </UContainer>
</template>