<script lang="ts" setup>
const { data: articles } = await useAsyncData("articles:*", () =>
    queryContent("/articles").sort({ published: -1 }).find()
);
</script>

<template>
    <UContainer :ui="{ base: 'py-6 lg:py-12 space-y-12' }">
        <AppTitle title="My Articles" description="As a developer, I like to share my knowledge and experiences with others. This is a collection of articles I've written over time, covering a wide range of topics like web development, programming, and technology." />
        <ul class="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            <li v-for="article in articles">
                <ULink :to="article._path" class="group">
                    <UCard :ui="{ base: 'overflow-clip', background: 'bg-gray-50/60 dark:bg-gray-950/50', shadow: 'shadow-none transition-shadow dark:shadow-2xl dark:hover:shadow-primary-800/25', header: { base: 'overflow-clip', padding: '!p-0' } }">
                        <template #header>
                            <img :src="article.cover_img" class="object-cover h-[240px] w-full transition-transform group-hover:scale-105" alt="">
                        </template>
                        <div class="space-y-2">
                            <ul class="flex space-x-1">
                                <li v-for="(tag, i) in article.keywords.split(',').slice(0, 3)" :key="i">
                                    <UBadge size="xs" :label="tag" class="capitalize" color="gray" />
                                </li>
                            </ul>
                            <h2>{{ article.title }}</h2>
                            <p class="text-sm text-gray-400 dark:text-gray-500 line-clamp-3">{{ article.description }}</p>
                        </div>
                    </UCard>
                </ULink>
            </li>
        </ul>
        <p class="text-sm text-gray-400 dark:text-gray-500 text-center">This is end of articles</p>
    </UContainer>
</template>
