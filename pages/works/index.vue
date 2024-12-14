<script lang="ts" setup>
const { data: works } = await useAsyncData("works:*", () =>
    queryContent("/works").find()
);
</script>

<template>
    <UContainer :ui="{ base: 'py-6 lg:py-12 space-y-12' }">
        <AppTitle title="Works" description="Here are some examples of projects I've worked on that demonstrate my skills and experience as a developer." />
        <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="work in works">
                <ULink :to="work._path">
                    <UCard :ui="{ base: 'h-full', shadow: 'shadow-none transition-shadow dark:shadow-2xl dark:hover:shadow-primary-800/25', body: { base: 'space-y-4' } }">
                        <div class="flex items-center justify-between">
                            <UBadge size="sm" :label="work.status" class="uppercase" color="gray">
                                <template #leading>
                                    <UIcon name="i-heroicons-check" class="size-4 bg-emerald-500" v-if="work.status == 'done'" />
                                    <div v-else class="rounded-full size-1.5 bg-primary"></div>
                                </template>
                            </UBadge>
                        </div>
                        <h4 class=" line-clamp-2">{{ work.title || work.name }}</h4>
                        <p class="text-gray-400 dark:text-gray-500 text-sm line-clamp-3">{{ work.description }}</p>
                        <ClientOnly v-if="work.project_url">
                            <UButton trailing-icon="i-heroicons-arrow-up-right" @click.prevent="navigateTo(work.project_url, { open: { target: '_blank' } })" size="xs" color="gray" variant="link" label="View work" :ui="{ rounded: 'rounded-full', padding: { xs: 'px-0' } }" />
                        </ClientOnly>
                    </UCard>
                </ULink>
            </li>
        </ul>
        <p class="text-sm text-gray-400 dark:text-gray-500 text-center">This is end of works</p>
    </UContainer>
</template>
