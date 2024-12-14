<template>
    <UContainer>
        <UDivider />
        <div class="sm:flex flex-wrap items-center sm:justify-between text-center py-6 space-y-2">
            <div class="text-sm text-gray-400 dark:text-gray-500">© 2024 <ULink to="https://github.com/rasyidly" target="_blank" external class="underline decoration-dotted">Rasyidly</ULink>. All rights reserved.</div>
            <div class="text-sm text-gray-400 dark:text-gray-500 flex items-center justify-center sm:justify-end space-x-1">
                <div>Made with</div>
                <UIcon name="i-heroicons-heart-solid" class="size-4 text-primary" />
                <div>using</div>
                <UTooltip text="Nuxt.js v3.14">
                    <UIcon name="i-logos-nuxt-icon" class="size-4 text-primary" />
                </UTooltip>
            </div>
        </div>
    </UContainer>
</template>