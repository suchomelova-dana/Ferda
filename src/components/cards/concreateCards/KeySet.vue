<script setup lang="ts">
import type { DataType } from '@/types/dataTypes'
import { computed } from 'vue'
import LabelValueCard from './../LabelValueCard.vue'
import type { LabelValueCardItem } from '@/types/cardTypes'

const props = defineProps<{
  keySet: DataType['keyset']
}>()

const fields = computed<LabelValueCardItem[]>(() => {
  return [
    { label: 'Handle', value: props.keySet.handle, shouldColor: true },
    { label: 'Registrar', value: props.keySet.registrar, shouldColor: true },
    { label: 'DNS keys', value: props.keySet.dns_keys.map((dns) => dns) },
  ]
})
</script>

<template>
  <LabelValueCard :items="fields" title="KeySet" />
</template>
