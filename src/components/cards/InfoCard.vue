<script setup lang="ts">
const props = defineProps<{
  title?: string,
  isLoading?: boolean,
}>()
</script>

<template>
  <v-card class="mb-4" :loading="props.isLoading">
    <div v-if="props.title" class="bg-gray-200 px-4 py-2 rounded font-bold text-sm">
      {{ props.title }}:
    </div>

    <v-card-text>
      <slot></slot>
    </v-card-text>
  </v-card>
</template>
