<script setup>
import { defineProps } from "vue";

const props = defineProps({
  bookId: Number,
  bookTitle: String,
  authorName: String,
  srcImage: String,
  year: Number,
});
</script>

<template>
  <div class="card inline-block w-1/6 mt-10 drop-shadow-md mx-4">
    <div class="block grid justify-items-center">
      <img :src="props.srcImage" alt="" class="w-1/2 image-size" />
    </div>
    <div class="block text-lg text-center border-b-1">
      <p>{{ props.bookTitle }}</p>
    </div>
    <div class="block">
      <p class="text-base text-sm">Ano publicação: {{ props.year }}</p>
      <p class="text-base text-sm">Autor: {{ props.authorName }}</p>
      <router-link :to="{ name: 'EditBook', params: { id: props.bookId } }">
        <button
          class="bg-indigo-500 m-1 p-1 px-2 rounded-md text-white text-sm button-size"
        >
          Detalhes
        </button>
      </router-link>
      <button
        class="bg-indigo-500 m-1 p-1 px-2 rounded-md text-white text-sm button-size"
      >
        Sobre Autor
      </button>
      <button
        class="bg-indigo-500 m-1 p-1 px-2 rounded-md text-white text-sm button-size"
      >
        Sobre Editora
      </button>
      <button
        class="bg-indigo-500 m-1 p-1 px-2 rounded-md text-white text-sm button-size"
      >
        Editar
      </button>
    </div>
  </div>
</template>

<style scoped>
.image-size {
  width: 100px;
  height: 150px;
}
</style>