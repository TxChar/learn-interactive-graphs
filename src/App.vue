<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="flex flex-col h-screen">
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
          <RouterLink to="/custom" class="mr-2">
          <div class="border bg-blue-100 border-blue-400 px-3 py-1 rounded hover:bg-blue-300">
            Custom
          </div>
        </RouterLink>
      </div>
    </nav>

    <div class="flex-grow overflow-y-auto">
      <RouterView />
    </div>
  </div>
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