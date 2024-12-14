<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})
</script>

<template>
    <ClientOnly>
        <UButton :icon="isDark ? 'i-solar-moon-linear' : 'i-solar-sun-linear'" color="gray" variant="ghost" aria-label="Theme" @click="isDark = !isDark" />
    </ClientOnly>
</template>
