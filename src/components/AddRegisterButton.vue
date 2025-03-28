<template>
  <div class="inline">
    <button
      class="bg-cyan-500 float-right m-1 p-2 rounded-md text-white text-base"
      @click="$router.push('/new-book')"
    >
      <slot />
    </button>
  </div>
</template>