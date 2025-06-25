<script setup lang="ts">
import type { DataType } from '@/types/dataTypes'
import { computed } from 'vue'
import InfoCard from './../InfoCard.vue'
import { faCircleCheck, faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
  isVerboseView: boolean
  flags?: DataType['state_flags']
}>()

const flagsToShow = computed(() => {
  if (props.isVerboseView) {
    return props.flags?.flags
  }

  return props.flags?.flags.filter((flag) => flag.active)
})
</script>

<template>
  <InfoCard title="State flags" :isLoading="!Boolean(props.flags)">
    <v-row dense v-for="(item, index) in flagsToShow" :key="index" class="">
      <v-col class="font-weight-medium" :class="item.active ? 'text-green-400' : 'text-red-400'">
        <FontAwesomeIcon v-if="item.active" :icon="faCircleCheck" />
        <FontAwesomeIcon v-else :icon="faCircleXmark" />
        {{ item.description }}
      </v-col>
    </v-row>
  </InfoCard>
</template>
