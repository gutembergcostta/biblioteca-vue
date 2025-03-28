<script setup>
import PageTitle from "@/components/PageTitle.vue";
import FilterAndOrdenate from "@/components/FilterAndOrdenate.vue";
import BookCard from "@/components/BookCard.vue";
import AddRegiseterButton from "@/components/AddRegisterButton.vue";
import EditRegisterButton from "@/components/EditRegisterButton.vue";
</script>
<template>
  <div class="w-full">
    <PageTitle>413123 - Machado de Assis</PageTitle>

    <div>
      <FilterAndOrdenate />

      <AddRegiseterButton> Cadastrar novo autor </AddRegiseterButton>

      <EditRegisterButton>Editar cadastro</EditRegisterButton>

      <AddRegiseterButton>Novo livro para este autor</AddRegiseterButton>
    </div>

    <BookCard />
  </div>
</template>