<template>
  <div v-if="isLoading"
    class="h-screen flex justify-center pt-24"
  >
    <div class="flex flex-col">
      <p class="mb-5">Buscando articulos...</p>
      <div class="">
        <spring-spinner
          :animation-duration="3000"
          :size="60"
          color="rgb(134 239 172)"
        />
      </div>
    </div>
  </div>

  <div
    v-else
    class="container mx-auto px-2"
  >
    <h1 class="text-center text-5xl p-12 font-semibold">Articulos dev.to</h1>

    <div
      v-for="article in articles"
      :key="article.id"
      class="border rounded-md p-4 my-4"
    >
      <h3 class="text-xl mb-3 font-semibold">{{ article.title }}</h3>
      <div class="my-3">
        <span 
          v-for="tag in article.tag_list"
          :key="tag"
          class="mr-1 p-1 rounded border-2 text-sm"
        >
          {{ tag }}
        </span>
      </div>
      <a :href="article.url" target="_blank">Leer articulo <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDevToArticles from '../composables/useDevToArticles'
import { SpringSpinner } from 'epic-spinners'

const { isLoading, data: articles } = useDevToArticles()
</script>
