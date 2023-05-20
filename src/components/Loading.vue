<template>
  <div class="loading">
    <span></span>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.loading {
  position: fixed;
  top: 0;
  height: 100%;
  z-index: 100;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spin {
    to {
      transform: rotateZ(1turn);
    }
  }
  span {
    display: block;
    width: 60px;
    height: 60px;
    border: 3px solid transparent;
    border-top-color: #fff;
    border-bottom-color: #fff;
    border-radius: 50%;
    animation: spin ease 1s infinite;
  }
}
</style>
