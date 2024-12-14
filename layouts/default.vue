<script setup lang="ts">

</script>

<template>
    <div class="min-h-screen flex flex-col justify-between stretch">
        <div>
            <AppHeader />
            <div class="hidden sm:block h-24"></div>
            <main>
                <FireflyBackground />
                <slot />
            </main>
        </div>
        <AppFooter class="w-full" />
        <div class="block sm:hidden h-20"></div>
    </div>
</template>