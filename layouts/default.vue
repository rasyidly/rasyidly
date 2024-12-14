<script setup lang="ts">

</script>

<template>
    <div class="min-h-screen flex flex-col justify-between stretch">
        <div>
            <AppHeader />
            <div class="h-24"></div>
            <main>
                <FireflyBackground />
                <slot />
            </main>
        </div>
        <AppFooter class="w-full" />
    </div>
</template>