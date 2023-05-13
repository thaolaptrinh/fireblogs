<template>
  <footer>
    <div class="container">
      


    </div>
  </footer>
</template>

<script setup>
import youtubeBrands from "../assets/Icons/youtube-brands.svg";
import twitterBrands from "../assets/Icons/twitter-brands.svg";
import instagramBrands from "../assets/Icons/instagram-brands.svg";
import linkedinBrands from "../assets/Icons/linkedin-brands.svg";
</script>

<style lang="scss" scoped>
footer {
  margin-top: auto;
  padding: 100px 25px;
  background-color: #303030;

  .container {
    display: flex;
    flex-direction: column;
    gap: 32px;
    @media screen and (min-width: 800px) {
      flex-direction: row;
      gap: 0;
    }
  }
}
</style>
