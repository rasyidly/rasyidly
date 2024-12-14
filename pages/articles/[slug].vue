<template>
    <UContainer :ui="{ base: 'pb-6 lg:pb-12 space-y-12' }">
        <div class="mx-auto prose dark:prose-invert prose-blockquote:not-italic prose-pre:bg-gray-900 prose-img:ring-1 prose-img:ring-gray-200 dark:prose-img:ring-white/10 prose-img:rounded-lg prose-a:no-underline prose-a:before:content-['#'] prose-a:before:mr-1 prose-a:before:text-primary-500 dark:prose-a:before:text-primary-400">
            <ContentDoc v-slot="{ doc }">
                <article>
                    <div class="overflow-clip rounded-lg relative" v-if="doc.cover_img">
                        <img :src="doc.cover_img" class="object-cover w-full h-[300px] transition-transform hover:scale-105" alt="">
                        <UButton color="gray" size="xs" variant="ghost" class="absolute bottom-2 end-2 z-10 opacity-25 mix-blend-difference" @click.stop="navigateTo(doc.cover_img, { open: { target: '_blank' } })">
                            {{ doc.cover_img.split('/')[2] }}
                        </UButton>
                    </div>
                    <br v-else />
                    <h1>{{ doc.title }}</h1>
                    <p class="text-sm text-gray-400 dark:text-gray-500">Published on <time :datetime="doc.published">{{ doc.published }}</time></p>
                    <ContentRenderer :value="doc" />
                    <ul class="flex flex-wrap gap-1 list-none p-0" v-if="doc.keywords?.length">
                        <li v-for="(tag, i) in doc.keywords.split(',')" :key="i" class="p-0 m-0">
                            <UBadge :label="tag" class="capitalize" color="gray" />
                        </li>
                    </ul>
                </article>
            </ContentDoc>
        </div>
        <div class="text-center">
            <UButton size="xl" color="gray" class="text-sm" variant="ghost" icon="i-heroicons-arrow-left" label="Back to articles" to="/articles" :ui="{ padding: { xl: 'px-6' }, rounded: 'rounded-full' }" />
            <UButton size="xl" color="gray" class="text-sm" variant="ghost" icon="i-heroicons-arrow-left" label="Go home" to="/" :ui="{ padding: { xl: 'px-6' }, rounded: 'rounded-full' }" />
        </div>
    </UContainer>
</template>