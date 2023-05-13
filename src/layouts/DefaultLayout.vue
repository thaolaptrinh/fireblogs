<template>
  <div class="app">
    <navigation />
    <router-view></router-view>
    <footer-app />
  </div>
</template>

<script setup>
import FooterApp from "../components/Footer.vue";
import Navigation from "../components/Navigation.vue";
</script>

<style lang="scss" scoped></style>
