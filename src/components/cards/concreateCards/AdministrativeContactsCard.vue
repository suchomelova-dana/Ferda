<script setup lang="ts">
import { computed } from 'vue'
import LabelValueCard from './../LabelValueCard.vue'
import type { DataType } from '@/types/dataTypes'
import type { LabelValueCardItem } from '@/types/cardTypes'

const props = defineProps<{
  contacts?: DataType['administrative_contacts']
}>()

const fields = computed<LabelValueCardItem[]>(() => {
  if (!props.contacts) {
    return []
  }

  return props.contacts.map((contact) => {
    return { label: contact.name, value: contact.handle, shouldColor: true }
  })
})
</script>

<template>
  <LabelValueCard
    :items="fields"
    title="Administrative contacts"
    :isLoading="!Boolean(props.contacts)"
  />
</template>
