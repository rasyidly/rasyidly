<script lang="ts" setup>
const { data: socials } = await useAsyncData<any>("socials:*", () => queryContent("/socials").find())

const links = computed<any>(() => socials.value[0].body)
</script>

<template>
    <UContainer :ui="{ base: 'py-4 text-center space-y-4' }">
        <h4 class="uppercase text-xs font-semibold text-gray-400 mb-4">Find Me On</h4>
        <div class="space-x-2">
            <UTooltip v-for="(link, i) in links" :key="i" :text="link.name">
                <UButton color="gray" variant="ghost" square :to="link.url" target="_blank" external>
                    <Icon :name="link.icon" class="w-6 h-6"></Icon>
                </UButton>
            </UTooltip>
        </div>
    </UContainer>
</template>