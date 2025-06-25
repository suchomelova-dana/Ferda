<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import InfoCard from './../InfoCard.vue'

const props = defineProps<{
  expiresAt?: string
}>()

const PASSWORD_TIMEOUT = 5000
const isPasswordVisible = ref(false)
const remainingSeconds = ref(0)
const SECRET_PASSWORD = 'My secret password'
let timeout: ReturnType<typeof setTimeout> | null = null
let interval: ReturnType<typeof setInterval> | null = null

const onShowBtnClick = () => {
  isPasswordVisible.value = !isPasswordVisible.value
  if (timeout) {
    clearTimeout(timeout)
  }

  if (interval) {
    clearInterval(interval)
  }

  remainingSeconds.value = PASSWORD_TIMEOUT / 1000

  interval = setInterval(() => {
    remainingSeconds.value--
    if (remainingSeconds.value <= 0) {
      clearInterval(interval!)
      interval = null
    }
  }, 1000)

  timeout = setTimeout(() => {
    isPasswordVisible.value = false
    timeout = null
  }, PASSWORD_TIMEOUT)
}

onUnmounted(() => {
  if (timeout) {
    clearTimeout(timeout)
    timeout = null
  }

  if (interval) {
    clearInterval(interval)
    interval = null
  }
})
</script>

<template>
  <InfoCard :isLoading="!Boolean(props.expiresAt)">
    <v-row>
      <v-col class="font-weight-bold text-black"> AuthInfo: </v-col>
      <v-col class="font-weight-medium text-gray-500">
        <v-col class="pa-0">
          <span v-if="isPasswordVisible">
            {{ SECRET_PASSWORD }}
            <span class="pl-5">{{ remainingSeconds }}</span>
          </span>
          <v-btn v-else color="primary" @click="onShowBtnClick"> SHOW </v-btn>
        </v-col>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="font-weight-bold text-black"> Expires at: </v-col>
      <v-col class="font-weight-medium text-gray-500">
        {{ props.expiresAt }}
      </v-col>
    </v-row>
  </InfoCard>
</template>
