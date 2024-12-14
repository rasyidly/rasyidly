<template>
    <UContainer :ui="{ base: 'py-12 space-y-4', constrained: 'max-w-screen-2xl' }">
        <h4 class="uppercase text-xs font-semibold text-gray-400 mb-4 text-center">Experienced with</h4>
        <div class="bg-gradient-to-r from-transparent via-gray-100 dark:via-gray-800/50 to-transparent py-4 overflow-x-scroll">
            <div class="flex items-center justify-around gap-x-12">
                <UIcon name="i-logos-google" class="min-h-16 min-w-20 grayscale" />
                <UIcon name="i-logos-openai" class="min-h-16 min-w-24 dark:invert opacity-60" />
                <UIcon name="i-logos-github" class="min-h-16 min-w-20 dark:invert opacity-60" />
                <UIcon name="i-logos-adobe" class="min-h-16 min-w-24 grayscale contrast-0 brightness-200" />
                <UIcon name="i-logos-behance" class="min-h-16 min-w-24 dark:invert opacity-60" />
                <UIcon name="i-logos-dribbble" class="min-h-16 min-w-24 dark:invert opacity-60" />
                <UIcon name="i-logos-docker" class="min-h-16 min-w-24 grayscale" />
                <UIcon name="i-logos-supabase" class="min-h-16 min-w-24 grayscale dark:invert" />
                <UIcon name="i-logos-appwrite" class="min-h-16 min-w-24 grayscale dark:invert" />
                <UIcon name="i-logos-slack" class="min-h-16 min-w-24 grayscale dark:invert opacity-70" />
                <UIcon name="i-logos-cloudflare" class="min-h-16 min-w-28 grayscale dark:invert" />
                <UIcon name="i-logos-wordpress" class="min-h-16 min-w-28 grayscale dark:invert" />
            </div>
        </div>
    </UContainer>
</template>
