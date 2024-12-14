<script lang="ts" setup>
const { data: works } = await useAsyncData("works:recent", () =>
    queryContent("/works")
        .sort({ published: -1 })
        .limit(5)
        .find()
);

const toast = useToast();

const openModal = () => {
    toast.add({
        title: "Feature coming soon",
        description: "This feature is still in development.",
        color: "primary",
    })
}
</script>

<template>
    <UContainer :ui="{ base: 'py-24 space-y-4', constrained: 'max-w-full' }">
        <h4 class="uppercase text-xs font-semibold text-gray-400 mb-4 text-center">Recent works</h4>
        <h1 class="text-3xl sm:text-5xl lg:text-4xl max-w-screen-lg text-center mx-auto font-light">Caffeine fuelled. Boost my <span class="text-primary">Creativity</span>.</h1>
        <br />
        <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
            <ULink v-for="(work, i) in works" :key="i" :to="work._path">
                <UCard :ui="{ base: 'h-full', shadow: 'shadow-none transition-shadow dark:shadow-2xl dark:hover:shadow-primary-800/25', body: { base: 'h-full space-y-4' } }">
                    <div class="flex items-center justify-between">
                        <UBadge size="sm" :label="work.status" class="uppercase" color="gray">
                            <template #leading>
                                <UIcon name="i-heroicons-check" class="size-4 bg-emerald-500" v-if="work.status == 'done'" />
                                <div v-else class="rounded-full size-1.5 bg-primary"></div>
                            </template>
                        </UBadge>
                    </div>
                    <h4 class="line-clamp-2">{{ work.title }}</h4>
                    <p class="text-gray-400 dark:text-gray-500 text-sm line-clamp-3">{{ work.description }}</p>
                    <ClientOnly v-if="work.project_url">
                        <UButton trailing-icon="i-heroicons-arrow-up-right" @click.prevent="navigateTo(work.project_url, { open: { target: '_blank' } })" size="xs" color="gray" variant="link" label="View work" :ui="{ rounded: 'rounded-full', padding: { xs: 'px-0' } }" />
                    </ClientOnly>
                </UCard>
            </ULink>
            <button class="overflow-none" @click="openModal">
                <UCard :ui="{ ring: 'ring-0 border border-dashed border-primary-500 dark:border-primary-800', shadow: '', base: 'h-full', background: 'dark:bg-transparent', body: { base: 'grid place-items-center h-full' } }">
                    <div class="space-y-1 text-center">
                        <UIcon name="i-solar-add-folder-line-duotone" class="size-10 text-primary-600 dark:text-primary-400" />
                        <br />
                        <h4>This space is only for you!</h4>
                        <p class="text-sm text-gray-400 dark:text-gray-500">Let's build something awesome together</p>
                    </div>
                </UCard>
            </button>
        </div>
        <div class="text-center">
            <UButton size="xl" color="gray" class="text-sm" variant="ghost" trailing-icon="i-heroicons-arrow-right" label="More works" to="/works" :ui="{ padding: { xl: 'px-6' }, rounded: 'rounded-full' }" />
        </div>
    </UContainer>
</template>
