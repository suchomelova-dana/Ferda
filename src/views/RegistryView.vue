<script setup lang="ts">
import { onMounted, ref } from 'vue'
import axios from 'axios'
import type { DataType } from '@/types/dataTypes'
import FlagsCard from '@/components/cards/concreateCards/FlagsCard.vue'
import AdministrativeContactsCard from '@/components/cards/concreateCards/AdministrativeContactsCard.vue'
import ContactCard from '@/components/cards/concreateCards/ContactCard.vue'
import AuthCard from '@/components/cards/concreateCards/AuthCard.vue'
import NSSetCard from '@/components/cards/concreateCards/NSSetCard.vue'
import KeySet from '@/components/cards/concreateCards/KeySet.vue'
import EventsCard from '@/components/cards/concreateCards/EventsCard.vue'

const data = ref<null | DataType>(null)
const isVerboseView = ref(false)

onMounted(async () => {
    try {
        const response = await axios.get('/data/domain-detail.json')
        data.value = response.data
    } catch (error) {
        console.error('Chyba při načítání JSON:', error)
    }
  
})
</script>

<template>
  <div class="">
    <h1 class="text-h6 mb-2" :class="{'w-60 h-10 bg-gray-100': !Boolean(data)}">{{ data?.fqdn || "" }}</h1>

    <v-switch v-model="isVerboseView" label="Verbose view" color="primary" />

    <v-row class="w-full pa-0 ma-0">
      <v-col cols="12" lg="7">
        <AuthCard :expires-at="data?.expires_at" />
        <EventsCard :events="data?.events" />
        <FlagsCard :flags="data?.state_flags" :is-verbose-view="isVerboseView" />
      </v-col>

      <v-col cols="12" lg="5">
        <ContactCard :contact="data?.owner" title="Owner" />
        <AdministrativeContactsCard
          v-if="!isVerboseView"
          :contacts="data?.administrative_contacts"
        />
        <div v-else>
          <ContactCard
            v-for="contact in data?.administrative_contacts"
            :contact="contact"
            title="Administrative contact"
          />
        </div>
        <NSSetCard :nsset="data?.nsset" />
        <KeySet :key-set="data?.keyset" />
      </v-col>
    </v-row>
  </div>
</template>
