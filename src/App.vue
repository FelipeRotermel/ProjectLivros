<script setup>
import { RouterView } from 'vue-router'
import NavComp from './components/NavComp.vue'
import FooterComp from './components/FooterComp.vue'
</script>

<template>
  <NavComp />
  <RouterView />
  <FooterComp />
</template>
