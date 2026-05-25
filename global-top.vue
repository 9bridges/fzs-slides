<template>
  <img
    v-if="$nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    src="/logo.png"
    class="absolute top-4 right-6 h-8 z-10 pointer-events-none"
  />
</template>
