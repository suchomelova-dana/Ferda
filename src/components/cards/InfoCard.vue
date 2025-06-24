<script setup lang="ts">
const props = defineProps<{
  title?: string
}>()
</script>

<template>
  <v-card class="mb-4">
    <div v-if="props.title" class="bg-gray-200 px-4 py-2 rounded font-bold text-sm">
      {{ props.title }}:
    </div>

    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
