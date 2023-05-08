<template>
  <NavBar />

  <div class="bg-white py-10 sm:py-10 min-h-screen">
    <router-view></router-view>
  </div>

  <FooterComponent />
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue'
import FooterComponent from '../components/FooterComponent.vue'
</script>
