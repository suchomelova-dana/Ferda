<script setup lang="ts">
import type { DataType } from '@/types/dataTypes'
import InfoCard from './../InfoCard.vue'
import type { EventCardItem } from '@/types/cardTypes'
import { computed } from 'vue'

const props = defineProps<{
  events?: DataType['events']
}>()

const fields = computed<EventCardItem[]>(() => {
  return [
    {
      label: 'Create date',
      value: props.events?.registered?.timestamp,
      registrar: props.events?.registered?.registrar_handle,
    },
    {
      label: 'Update date',
      value: props.events?.updated?.timestamp,
      registrar: props.events?.updated?.registrar_handle,
    },
    {
      label: 'Transfer date',
      value: props.events?.transferred?.timestamp,
      registrar: props.events?.transferred?.registrar_handle,
    },
    {
      label: 'Delete date',
      value: props.events?.unregistered?.timestamp,
      registrar: props.events?.unregistered?.registrar_handle,
    },
  ]
})
</script>

<template>
  <InfoCard title="Events" :isLoading="!Boolean(props.events)">
    <v-row dense v-for="(item, index) in fields" :key="index">
      <v-col cols="2" class="font-weight-bold text-black"> {{ item.label }}: </v-col>
      <v-col cols="4" class="font-weight-medium text-gray-500">
        {{ item.value }}
      </v-col>
      <v-col v-if="item.registrar" cols="2" class="font-weight-bold"> Registrar: </v-col>
      <v-col cols="4" class="font-weight-medium text-blue-400">
        {{ item.registrar }}
      </v-col>
    </v-row>
  </InfoCard>
</template>
