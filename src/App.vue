<template>
  <div class="app-wrapper">
    <div class="app">
      <navigation />
      <router-view></router-view>
      <footer-app />
    </div>
  </div>
</template>
<script setup>
import FooterApp from "./components/Footer.vue";
import Navigation from "./components/Navigation.vue";
</script>

<style scoped></style>
