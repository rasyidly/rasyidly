<script setup lang="ts">
const colorMode = useColorMode()
console.log()
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
        <UButton color="gray" square variant="ghost" aria-label="Theme" @click="isDark = !isDark" class="rounded-full">
            <UIcon v-if="isDark" name="i-solar-moon-linear" class="size-5" />
            <UIcon v-else name="i-solar-sun-linear" class="size-5" />
        </UButton>
    </ClientOnly>
</template>
