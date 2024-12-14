<script lang="ts" setup>
const { data: items } = await useAsyncData("bag-items:*", () =>
    queryContent("/bag-items").find()
);

const groups = ['hardware', 'software', 'desk']

function getItems(category: string): any {
    return items.value[0].body.filter((item: any) => item.category === category)
}
</script>

<template>
    <UContainer :ui="{ base: 'py-6 lg:py-12 space-y-12', constrained: 'max-w-screen-md' }">
        <AppTitle title="What's in My Bag" description="Software I use, gadgets I love, and other things I recommend. Here’s a big list of all of my favorite stuff." />
        <ul class="space-y-12">
            <li v-for="group in groups" class="space-y-6">
                <UDivider :label="group" type="dashed" class="uppercase" />
                <ul>
                    <li class="space-y-6">
                        <ULink v-for="(item, i) in getItems(group)" :key="i" :to="item.url" class="flex flex-col space-y-1 group" external target="_blank" :disabled="!item.url">
                            <h1 class="text-gray-900 dark:text-gray-50 group-hover:text-primary-500 dark:group-hover:text-primary-400">{{ item.name }}</h1>
                            <p class="text-sm text-gray-400 dark:text-gray-500 text-start">{{ item.description }}</p>
                        </ULink>
                    </li>
                </ul>
            </li>
        </ul>
    </UContainer>
</template>
