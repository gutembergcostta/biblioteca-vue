<script setup>
import BookCard from "@/components/BookCard.vue";
import FilterAndOrdenate from "@/components/FilterAndOrdenate.vue";
import PageTitle from "@/components/PageTitle.vue";
import AddRegisterButton from "@/components/AddRegisterButton.vue";

import { ref, onMounted } from "vue";

const authors = ref([]);
const publishers = ref([]);
const books = ref([]);

const getAuthorName = (authorId) => {
  const author = authors.value.find((a) => a.id === authorId);
  return author ? author.name : "Autor desconhecido";
};

const getPublisherName = (publisherId) => {
  const publisher = publishers.value.find((p) => p.id === publisherId);
  return publisher ? publisher.name : "Editora desconhecida";
};

onMounted(async () => {
  try {
    if (localStorage.getItem("books") === null) {
      const response = await fetch("/api/livros.json");
      if (!response.ok) {
        throw new Error("Erro ao carregar os dados");
      }

      const data = await response.json();
      localStorage.setItem("books", JSON.stringify(data.books));
      localStorage.setItem("authors", JSON.stringify(data.authors));
      localStorage.setItem("publishers", JSON.stringify(data.publishers));
      books.value = data.books;
      authors.value = data.authors;
      publishers.value = data.publishers;
    } else {
      books.value = JSON.parse(localStorage.getItem("books"));
      authors.value = JSON.parse(localStorage.getItem("authors"));
      publishers.value = JSON.parse(localStorage.getItem("publishers"));
    }
  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
  }
});
</script>
<template>
  <div class="w-full">
    <PageTitle>Livros disponíves</PageTitle>

    <div>
      <FilterAndOrdenate />
      <AddRegisterButton>Adicionar Livro</AddRegisterButton>
    </div>
    <br />

    <div
      v-for="book in books"
      :key="book.id"
      class="inline justify-items-center"
    >
      <BookCard
        :bookId="book.id"
        :bookTitle="book.title"
        :authorName="getAuthorName(book.authorId)"
        :srcImage="book.cover"
        :year="book.year"
      />
    </div>
  </div>
</template>