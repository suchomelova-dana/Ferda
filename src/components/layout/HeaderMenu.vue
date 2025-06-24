<script setup lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBars, faRightFromBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { ref } from 'vue'

const user = ref({
  name: 'Jan Musílek',
  role: 'user',
})

const onLogout = () => {}
</script>

<template>
  <v-app-bar app color="primary" dark>
    <v-app-bar-nav-icon @click="$emit('toggleDrawer')">
      <FontAwesomeIcon :icon="faBars" />
    </v-app-bar-nav-icon>

    <v-toolbar-title>Ferda</v-toolbar-title>

    <v-spacer />

    <v-menu offset-y transition="scale-transition">
      <template #activator="{ props }">
        <v-btn v-bind="props" variant="text" class="mr-4">
          {{ user.name }}
          <v-icon class="pl-4">
            <FontAwesomeIcon :icon="faUser" />
          </v-icon>
        </v-btn>
      </template>

      <v-card class="pa-4" width="250">
        <v-row dense>
          <v-col cols="4" class="d-flex align-center justify-center">
            <v-icon class="pl-4">
              <FontAwesomeIcon :icon="faUser" />
            </v-icon>
          </v-col>
          <v-col cols="8" dense>
            <v-col dense class="pa-0 text-md">{{ user.name }}</v-col>
            <v-col dense class="pa-0 text-sm text-grey">{{ user.role }}</v-col>
          </v-col>
        </v-row>

        <v-divider class="my-4" />

        <v-btn variant="flat" class="w-full text-grey" @click="onLogout">
          <v-icon class="pr-4">
            <FontAwesomeIcon :icon="faRightFromBracket" />
          </v-icon>
          <span class="lowercase">Logout</span>
        </v-btn>
      </v-card>
    </v-menu>
  </v-app-bar>
</template>
