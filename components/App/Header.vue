<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()

const toast = useToast()
const path = computed(() => route.path)

async function copyEmail() {
    navigator.clipboard.writeText(runtimeConfig.public.user.email)
    toast.add({
        title: "Email copied!"
    })
}

const links = [{
    label: "Home",
    icon: 'i-solar-home-smile-angle-linear',
    to: "/"
}, {
    label: "Works",
    icon: 'i-solar-folder-with-files-linear',
    to: "/works"
}, {
    label: "Articles",
    icon: 'i-solar-documents-linear',
    to: "/articles"
}, {
    label: "What's in my bag?",
    icon: 'i-solar-case-linear',
    to: "/bags"
}]
</script>

<template>
    <UContainer>
        <UCard :ui="{ base: 'fixed bottom-2 lg:top-4 inset-x-2 mx-auto max-w-screen-lg z-10', background: 'backdrop-blur-lg bg-white/75 dark:bg-gray-950/65', shadow: 'shadow-xl', rounded: 'rounded-full', body: { base: 'flex items-center justify-center lg:justify-between space-x-4 h-16', padding: '!py-3' } }">
            <div class="hidden lg:flex items-center space-x-2">
                <ULink class="text-sm text-gray-500 dark:text-gray-400" :to="`mailto:${runtimeConfig.public.user.email}`" external>{{ runtimeConfig.public.user.email }}</ULink>
                <UTooltip text="Copy email address" :popper="{ strategy: 'absolute' }">
                    <UButton color="gray" square icon="i-heroicons-paper-clip" size="xs" variant="ghost" @click="copyEmail" />
                </UTooltip>
            </div>
            <ul class="flex items-center space-x-2.5">
                <li v-for="(link, i) in links" :key="i">
                    <UTooltip :text="link.label" :popper="{ strategy: 'absolute' }">
                        <UButton size="md" :to="link.to" active-class="text-primary-600 dark:text-primary-400" color="gray" square :icon="link.icon" variant="ghost" :ui="{ rounded: 'rounded-full' }" />
                    </UTooltip>
                </li>
                <li>
                    <ColorModeButton size="md" :ui="{ rounded: 'rounded-full' }" />
                </li>
            </ul>
        </UCard>
    </UContainer>
</template>