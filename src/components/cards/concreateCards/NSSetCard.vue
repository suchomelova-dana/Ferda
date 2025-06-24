<script setup lang="ts">
import type { DataType } from '@/types/dataTypes'
import { computed } from 'vue'
import LabelValueCard from './../LabelValueCard.vue'
import type { LabelValueCardItem } from '@/types/cardTypes'

const props = defineProps<{
  nsset: DataType['nsset']
}>()

const fields = computed<LabelValueCardItem[]>(() => {
  return [
    { label: 'Handle', value: props.nsset.handle, shouldColor: true },
    { label: 'Registrar', value: props.nsset.registrar, shouldColor: true },
    { label: 'DNS', value: props.nsset.dns.map((dns) => `${dns.name}(${dns.ip_address})`) },
  ]
})
</script>

<template>
  <LabelValueCard :items="fields" title="NSSet" />
</template>
