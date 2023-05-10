<template>
  <div class="relative isolate overflow-hidden bg-gray-900 py-4 sm:py-16 lg:py-16">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 md:gap-y-16 lg:max-w-none lg:grid-cols-2">
        
        <div class="max-w-xl lg:max-w-lg">
          <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contacto</h2>
          <p class="mt-4 text-lg leading-8 text-gray-300">
            jplantes@gmail.com
          </p>
        </div>

        <dl class="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
          <div class="flex flex-col items-start">
            <dt class="mt-1 md:mt-4 font-semibold text-white">Sitios</dt>
            <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><LinkedIn /> LinkedIn</dd>
            <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><GitHub /> GitHub</dd>
            <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><Code /> Dev.to</dd>
          </div>
          <div class="flex flex-col items-start">
            <dt class="mt-1 md:mt-4 font-semibold text-white">Redes sociales</dt>
            <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><Instagram/> Instagram</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GitHub, Code, Instagram, LinkedIn } from '@iconoir/vue'
</script>
