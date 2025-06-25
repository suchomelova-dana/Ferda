<script setup lang="ts">
import type { Contact } from '@/types/dataTypes'
import { computed } from 'vue'
import LabelValueCard from './../LabelValueCard.vue'
import type { LabelValueCardItem } from '@/types/cardTypes'

const props = defineProps<{
  title: string,
  contact?: Contact,
}>()

const fields = computed<LabelValueCardItem[]>(() => {
  return [
    { label: 'Handle', value: props.contact?.handle, shouldColor: true },
    {
      label: 'Organization',
      value: props.contact?.organization,
      isPublished: props.contact?.publish.organization,
    },
    { label: 'Name', value: props.contact?.name, isPublished: props.contact?.publish.name },
  ]
})
</script>

<template>
  <LabelValueCard with-icons :items="fields" :title="props.title" :isLoading="!Boolean(props.contact)"/>
</template>
