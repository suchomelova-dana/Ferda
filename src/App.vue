<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderMenu from './components/layout/HeaderMenu.vue'
import { ref } from 'vue'
import Sidebar from './components/layout/Sidebar.vue'

const isDrawerOpen = ref(true)
</script>

<template>
  <v-app>
    <HeaderMenu @toggle-drawer="isDrawerOpen = !isDrawerOpen" />

    <v-navigation-drawer v-model="isDrawerOpen" app>
      <Sidebar />
    </v-navigation-drawer>

    <v-main app>
      <v-container>
        <RouterView />
      </v-container>
    </v-main>
  </v-app>
</template>
