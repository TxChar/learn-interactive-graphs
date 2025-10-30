<script setup lang="ts">
// We need these components from vue-router
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="p-4 bg-gray-200">
    <div class="flex justify-center items-center">
      <RouterLink to="/" class="mr-2">
        <div class="border bg-blue-100 border-blue-400 px-3 py-1 rounded hover:bg-blue-300">
          Home
        </div>
      </RouterLink>
      <RouterLink to="/flow" class="mr-2">
        <div class="border bg-blue-100 border-blue-400 px-3 py-1 rounded hover:bg-blue-300">
          Flow
        </div>
      </RouterLink>
    </div>
  </nav>

  <RouterView />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100vw;
  height: 100vh;
}
</style>