<script lang="ts" setup>
const props = defineProps(['title', 'description'])
</script>

<template>
    <div class="space-y-2.5 text-center">
        <h1 class="text-2xl">{{ title }}</h1>
        <p class="text-gray-400 dark:text-gray-500">{{ description }}</p>
    </div>
</template>