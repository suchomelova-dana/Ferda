<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = router.getRoutes()
</script>

<template>
  <v-list nav dense>
    <v-list-item
      v-for="route in routes"
      :key="route.name"
      :to="route.path"
      link
      :exact="true"
      active-class="bg-yellow"
    >
      <v-list-item-title class="text-uppercase font-weight-bold">{{
        route.name
      }}</v-list-item-title>
    </v-list-item>
  </v-list>
</template>
