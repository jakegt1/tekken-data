<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <RouterLink class="navbar-item" active-class="active" to="/">Tekken 8 Sidesteps</RouterLink>
    </div>
  </nav>

  <RouterView />
</template>

<style lang="scss">

</style>
