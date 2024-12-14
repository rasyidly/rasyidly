<script lang="ts" setup>
const { data: services } = await useAsyncData<any>("services:*", () => queryContent("/services").find())

const computedServices = computed<any>(() => services.value[0].body)
</script>

<template>
    <UContainer :ui="{ base: 'py-24', constrained: 'max-w-7xl' }">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <UCard v-for="(service, i) in computedServices" :key="i" :ui="{ ring: '', shadow: '', body: { base: 'space-y-2', padding: 'sm:!pt-24' } }">
                <UIcon :name="service.icon" class="size-8" />
                <br />
                <h4 class="text-lg">{{ service.name }}</h4>
                <p class="text-gray-400 dark:text-gray-500 font-light">{{ service.description }}</p>
                <blockquote class="flex items-center space-x-2">
                    <UIcon name="i-heroicons-star-solid" class="size-5 text-primary" />
                    <div class="text-sm">{{ service.skill }}</div>
                </blockquote>
            </UCard>
        </div>
    </UContainer>
</template>