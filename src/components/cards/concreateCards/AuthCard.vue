<script setup lang="ts">
import { onUnmounted, ref } from 'vue'
import InfoCard from './../InfoCard.vue'

const props = defineProps<{
  expiresAt: string
}>()

const isPasswordVisible = ref(false)
const SECRET_PASSWORD = 'My secret password'
let timeout: ReturnType<typeof setTimeout> | null = null
const PASSWORD_TIMEOUT = 5000

const onShowBtnClick = () => {
  isPasswordVisible.value = !isPasswordVisible.value
  if (timeout) {
    clearTimeout(timeout)
  }

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
})
</script>

<template>
  <InfoCard>
    <v-row>
      <v-col class="font-weight-bold text-black"> AuthInfo: </v-col>
      <v-col class="font-weight-medium text-gray-500">
        <v-col class="pa-0">
          <span v-if="isPasswordVisible">{{ SECRET_PASSWORD }} </span>
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
