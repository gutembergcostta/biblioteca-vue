<script setup>
import { useRoute } from "vue-router";
import { ref, onMounted, watch } from "vue";

const route = useRoute(); // Pegando a rota
const bookId = ref(route.params.id); // Pegando o ID do livro da URL
const books = ref([]);
const book = ref(null);
const authors = ref([]);
const publishers = ref([]);

const getSingleBook = (id) => {
  return books.value.find((b) => b.id === parseInt(id)) || null;
};

onMounted(async () => {
  try {
    const response = await fetch("/api/livros.json");
    if (!response.ok) {
      throw new Error("Erro ao carregar os dados");
    }

    const data = await response.json();
    books.value = data.books;
    authors.value = data.authors; // Adicionando autores ao estado
    publishers.value = data.publishers; // Adicionando editoras ao estado

    // Atualizar o livro quando os dados forem carregados
    book.value = getSingleBook(bookId.value);
  } catch (error) {
    console.error("Erro ao buscar os livros:", error);
  }
});

// Atualiza `book` caso a rota mude
watch(bookId, (newId) => {
  book.value = getSingleBook(newId);
});
</script>

<template>
  <form class="align-center place-content-center block w-1/2" v-if="book">
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
      <select v-model="book.author" class="w-full p-2 border rounded-lg w-64">
        <option value="">Selecione o Autor</option>
        <option v-for="author in authors" :key="author.id" :value="author.name">
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
          :selected="publisher.id === book.publisherID"
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
      Cadastrar
    </button>
  </form>

  <p v-else>Carregando ou livro não encontrado...</p>
</template>
