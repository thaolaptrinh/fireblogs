<template>
  <div class="home">
    <blog-post :post="welcomeScreen" />
    <blog-post :post="post" v-for="(post, index) in sampleBlogPost" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlogPost from "../components/BlogPost.vue";

const welcomeScreen = ref({
  title: "Welcome!",
  blogPost:
    "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
  welcomeScreen: true,
  photo: "coding",
});

const sampleBlogPost = ref([
  {
    title: "THis is post",
  },
]);
</script>

<style lang="scss" scoped></style>
