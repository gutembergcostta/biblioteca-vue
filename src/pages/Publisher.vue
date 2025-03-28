<script setup>
import PageTitle from "@/components/PageTitle.vue";
import FilterAndOrdenate from "@/components/FilterAndOrdenate.vue";
import BookCard from "@/components/BookCard.vue";
import AddRegisterButton from "@/components/AddRegisterButton.vue";
import EditRegisterButton from "@/components/EditRegisterButton.vue";
</script>
<template>
  <div class="w-full">
    <PageTitle>413123 - Editora Novatec</PageTitle>
    <div>
      <label>Buscar título: </label>

      <FilterAndOrdenate />

      <AddRegisterButton>Cadastrar nova editora</AddRegisterButton>

      <EditRegisterButton>Editar cadastro</EditRegisterButton>

      <AddRegisterButton>Novo livro para esta editora</AddRegisterButton>
    </div>

    <BookCard />
  </div>
</template>