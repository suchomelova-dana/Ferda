<script setup lang="ts">
import type { PublishedCardItem } from '@/types/cardTypes'
import InfoCard from './InfoCard.vue'
import { faEye } from '@fortawesome/free-solid-svg-icons/faEye'
import { faEyeSlash } from '@fortawesome/free-solid-svg-icons/faEyeSlash'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps<{
  title: string
  items: PublishedCardItem[]
  withIcons?: boolean
  isLoading?: boolean
}>()
</script>

<template>
  <InfoCard :title="props.title" :isLoading="isLoading">
    <v-row v-for="(item, index) in props.items" :key="index" dense>
      <v-col v-if="props.withIcons" cols="1">
        <FontAwesomeIcon v-if="item.isPublished" :icon="faEye" class="text-green-400" />
        <FontAwesomeIcon
          v-else-if="item.isPublished === false"
          :icon="faEyeSlash"
          class="text-red-400"
        />
      </v-col>
      <v-col cols="3" class="font-weight-bold text-black"> {{ item.label }}: </v-col>
      <v-col v-if="Array.isArray(item.value)" cols="auto" class="font-weight-medium text-gray-500">
        <v-col v-for="(arrayItem, arrayIndex) in item.value" :key="arrayIndex" class="pa-0">
          {{ arrayItem }}
        </v-col>
      </v-col>
      <v-col
        v-else
        cols="auto"
        class="font-weight-medium"
        :class="item.shouldColor ? 'text-blue-400' : 'text-gray-500'"
      >
        {{ item.value }}
      </v-col>
    </v-row>
  </InfoCard>
</template>
