<script setup>
import PageTitle from "@/components/PageTitle.vue";
import { ref } from "vue";

const authors = ref(JSON.parse(localStorage.getItem("authors")) || []);
const publishers = ref(JSON.parse(localStorage.getItem("publishers")) || []);

const books = ref(JSON.parse(localStorage.getItem("books")) || []);
const book = ref({
  id: null,
  title: "",
  year: "",
  srcImage: "",
  authorId: "",
  publisherID: "",
  sinopse: "",
});

const createBook = (newBook) => {
  newBook.id = books.value.length
    ? Math.max(...books.value.map((b) => b.id)) + 1
    : 1;
  books.value.push(newBook);
  localStorage.setItem("books", JSON.stringify(books.value));
};

const handleSubmit = () => {
  createBook(book.value);
  alert("Cadastro efetuado com sucesso!");
  book.value = {
    id: null,
    title: "",
    year: "",
    srcImage: "",
    authorId: "",
    publisherID: "",
    sinopse: "",
  };
};
</script>

<template>
  <div class="w-full grid justify-items-center">
    <PageTitle>Cadastrar Livro</PageTitle>

    <form
      class="align-center place-content-center block w-1/2"
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
        Cadastrar
      </button>
    </form>
  </div>
</template>
