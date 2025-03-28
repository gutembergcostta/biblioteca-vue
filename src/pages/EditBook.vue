<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";
import PageTitle from "@/components/PageTitle.vue";

const route = useRoute(); // Pegando a rota
const bookId = ref(route.params.id); // Pegando o ID do livro da URL
const books = ref([]);
const book = ref(null);
const authors = ref([]);
const publishers = ref([]);

const getSingleBook = (id) => {
  return books.value.find((b) => b.id === parseInt(id, 10)) || null; // Garante que a comparação de id seja feita corretamente
};

onMounted(async () => {
  try {
    books.value = JSON.parse(localStorage.getItem("books")) || [];
    authors.value = JSON.parse(localStorage.getItem("authors")) || [];
    publishers.value = JSON.parse(localStorage.getItem("publishers")) || [];

    book.value = getSingleBook(bookId.value);
  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
  }
});

watch(bookId, (newId) => {
  book.value = getSingleBook(newId);
});

const handleSubmit = () => {
  updateBook(book.value.id, book.value); // Atualiza o livro com os dados modificados

  book.value = {
    // Limpa os campos após o cadastro
    id: null,
    title: "",
    year: "",
    srcImage: "",
    authorId: "",
    publisherID: "",
    sinopse: "",
  };
};

const updateBook = (bookId, updatedBook) => {
  const index = books.value.findIndex((book) => book.id === bookId);
  if (index !== -1) {
    books.value[index] = { ...books.value[index], ...updatedBook };
    localStorage.setItem("books", JSON.stringify(books.value)); // Salva as alterações no localStorage
    alert("Atualizado com sucesso!");
  }
};
</script>

<template>
  <div class="w-full grid justify-items-center">
    <PageTitle>Editar Livro</PageTitle>

    <form
      class="align-center place-content-center block w-1/2"
      v-if="book"
      @submit.prevent="handleSubmit"
    >
      <div>
        <label>Nome do Livro</label>
        <input
          type="text"
          placeholder="Descrição do livro"
          class="w-full p-2 border rounded-lg w-64"
          v-model="book.title"
        />
      </div>

      <div>
        <label>Ano de publicação</label>
        <input
          type="text"
          placeholder="Data da publicação"
          class="w-full p-2 border rounded-lg w-64"
          v-model="book.year"
        />
      </div>

      <div>
        <label>Foto da Capa</label>
        <input
          type="text"
          placeholder="URL da imagem"
          class="w-full p-2 border rounded-lg w-64"
          v-model="book.srcImage"
        />
      </div>

      <div>
        <label>Autor</label>
        <select
          v-model="book.authorId"
          class="w-full p-2 border rounded-lg w-64"
        >
          <option value="">Selecione o Autor</option>
          <option v-for="author in authors" :key="author.id" :value="author.id">
            {{ author.name }}
          </option>
        </select>
      </div>

      <div>
        <label>Editora</label>
        <select
          v-model="book.publisherID"
          class="w-full p-2 border rounded-lg w-64"
        >
          <option value="">Selecione a Editora</option>
          <option
            v-for="publisher in publishers"
            :key="publisher.id"
            :value="publisher.id"
          >
            {{ publisher.name }}
          </option>
        </select>
      </div>

      <div>
        <label>Sinopse</label>
        <input
          type="text"
          placeholder="Sinopse do livro"
          class="w-full p-2 border rounded-lg w-64"
          v-model="book.sinopse"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-blue-600 float-right"
      >
        Editar
      </button>
    </form>

    <p v-else>Carregando ou livro não encontrado...</p>
  </div>
</template>
