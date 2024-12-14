<script setup lang="ts">
const isOpen = ref(false);
const router = useRouter();
const toast = useToast();

const commandPaletteRef = ref();

defineShortcuts({
  meta_k: {
    usingInput: true,
    handler: () => {
      isOpen.value = !isOpen.value;
    },
  },
});

const users = [
  {
    id: "rasyidly",
    label: "rasyidly",
    href: "https://github.com/rasyidly",
    target: "_blank",
    avatar: { alt: "R", loading: "lazy" },
  },
  {
    id: "shonzu",
    label: "shonzu",
    href: "https://github.com/shonzu",
    target: "_blank",
    avatar: { alt: "S", loading: "lazy" },
  },
];

const actions = [
  {
    id: "new-file",
    label: "Add new file",
    icon: "i-heroicons-document-plus",
    click: () => toast.add({ title: "New file added!" }),
    shortcuts: ["⌘", "N"],
  },
  {
    id: "new-folder",
    label: "Add new folder",
    icon: "i-heroicons-folder-plus",
    click: () => toast.add({ title: "New folder added!" }),
    shortcuts: ["⌘", "F"],
  },
  {
    id: "hashtag",
    label: "Add hashtag",
    icon: "i-heroicons-hashtag",
    click: () => toast.add({ title: "Hashtag added!" }),
    shortcuts: ["⌘", "H"],
  },
  {
    id: "label",
    label: "Add label",
    icon: "i-heroicons-tag",
    click: () => toast.add({ title: "Label added!" }),
    shortcuts: ["⌘", "L"],
  },
];

const groups = computed(() =>
  [
    commandPaletteRef.value?.query
      ? {
          key: "users",
          commands: users,
        }
      : {
          key: "recent",
          label: "Recent searches",
          commands: users,
        },
    {
      key: "actions",
      commands: actions,
    },
  ].filter(Boolean)
);

type Option = { click?: () => void; to?: string; href?: string };
function onSelect(option: Option) {
  if (option.click) {
    option.click();
  } else if (option.to) {
    router.push(option.to);
  } else if (option.href) {
    window.open(option.href, "_blank");
  }
}
</script>

<template>
  <div>
    <UButton
      color="gray"
      icon="i-heroicons-magnifying-glass"
      @click="isOpen = true"
      block
      truncate
    >
      <div class="flex-1 text-gray-400 dark:text-gray-500 text-start truncate">
        Cari apapun ...
      </div>
      <template #trailing>
        <UKbd>⌘</UKbd>
        <UKbd>K</UKbd>
      </template>
    </UButton>

    <UModal v-model="isOpen">
      <UCommandPalette
        ref="commandPaletteRef"
        :groups="groups"
        :autoselect="false"
        @update:model-value="onSelect"
      />
    </UModal>
  </div>
</template>
