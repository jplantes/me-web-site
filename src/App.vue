<script setup lang="ts">
import { GitHub, Code, Instagram, LinkedIn } from '@iconoir/vue'
</script>

<template>
  <div class="bg-white">
  <header class="absolute inset-x-0 top-0 z-50">
    <nav class="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <!-- logo -->
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
          <span class="sr-only">menu</span>
          <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Articulos</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Tiempo Libre</a>
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Jovies</a>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <a href="#" class="text-sm font-semibold leading-6 text-gray-900">Ingresar <span aria-hidden="true">&rarr;</span></a>
      </div>
    </nav>
    <!-- Mobile menu, show/hide based on menu open state. -->
    <div class="lg:hidden hidden" role="dialog" aria-modal="true">
      <!-- Background backdrop, show/hide based on slide-over state. -->
      <div class="fixed inset-0 z-50"></div>
      <div class="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-end">
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
            <span class="sr-only">cerrar menu</span>
            <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Articulos</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Tiempo Libre</a>
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Jovies</a>
            </div>
            <div class="py-6">
              <a href="#" class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Ingresar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>

  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div class="mx-auto max-w-2xl py-44 sm:py-14 lg:py-56">
      <div class="mb-8 flex justify-center">
        <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Me estoy construyendo lento pero bonito. 
        </div>
      </div>
      <div class="text-center">
        <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Desarrollador Full Stack JavaScript</h1>
        <p class="mt-6 text-lg leading-8 text-gray-600">Aplicaciones web y movile.</p>
      </div>
    </div>
  </div>

  <div class="bg-white py-10 sm:py-10">
    <div class="mx-auto max-w-7xl px-2 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Frameworks mas utilizados</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
        <img class="col-span-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" src="@/assets/images/vue.png" alt="Logo vue" width="158" height="48">
        <img class="col-span-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" src="@/assets/images/react.png" alt="Logo react" width="158" height="48">
        <img class="col-span-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" src="@/assets/images/angular.png" alt="Logo angular" width="158" height="48">
        <img class="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1" src="@/assets/images/node.png" alt="Logo node" width="158" height="48">
        <img class="col-span-2 max-h-14 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1" src="@/assets/images/tailwindcss.png" alt="Logo tailwindcss" width="158" height="48">
      </div>
    </div>
  </div>

  <div class="bg-white py-10 sm:py-10">
    <div class="mx-auto max-w-7xl px-2 lg:px-8">
      <h2 class="text-center text-lg font-semibold leading-8 text-gray-900">Lenguajes mas utilizados</h2>
      <div class="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        <img class="col-span-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" src="@/assets/images/js.png" alt="Logo JavaScript" width="158" height="48">
        <img class="col-span-2 max-h-24 w-full object-contain sm:col-start-auto lg:col-span-1" src="@/assets/images/css3.png" alt="Logo css3" width="158" height="48">
        <img class="col-span-2 max-h-24 w-full object-contain col-start-2 sm:col-start-auto lg:col-span-1" src="@/assets/images/html5.png" alt="Logo html5" width="158" height="48">
      </div>
    </div>
  </div>

</div>

<div class="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
      <div class="max-w-xl lg:max-w-lg">
        <h2 class="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contacto</h2>
        <p class="mt-4 text-lg leading-8 text-gray-300">
          jplantes@gmail.com
        </p>
      </div>
      <dl class="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
        <div class="flex flex-col items-start">
          <dt class="mt-4 font-semibold text-white">Sitios</dt>
          <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><LinkedIn /> LinkedIn</dd>
          <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><GitHub /> GitHub</dd>
          <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><Code /> Dev.to</dd>
        </div>
        <div class="flex flex-col items-start">
          <dt class="mt-4 font-semibold text-white">Redes sociales</dt>
          <dd class="flex gap-2 mt-2 leading-7 text-gray-400"><Instagram/> Instagram</dd>
        </div>
      </dl>
    </div>
  </div>
</div>


</template>