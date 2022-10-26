<script setup>
import { toggleDark } from '@/composables/dark.js'
</script>

<template>
  <n-icon mr20 size="18" style="cursor: pointer" @click="toggleDark()">
    <div v-if="isDark" i-carbon-moon />
    <div v-else i-carbon-sun />
  </n-icon>
</template>
