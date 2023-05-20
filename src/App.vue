<template>
  <div class="app-wrapper">
    <router-view></router-view>
  </div>
</template>
<script setup></script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #fff;
}

.arrow {
  margin-left: 8px;
  width: 12px;

  path {
    fill: #000;
  }
}

.arrow-light path {
  fill: #fff;
}

.button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin: 24px;
  padding: 12px 24px;
  background-color: #303030;
  color: #fff;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }
  &:hover {
    background-color: rgba(48, 48, 48, 0.7);
  }
}

.blog-card-wrapper {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media screen and (min-width: 500px) {
    padding: 100px 16px;
  }

  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr;
    @media screen and (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
