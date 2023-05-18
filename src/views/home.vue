<template>
  <div class="home">
    <blog-post :post="welcomeScreen" />
    <blog-post :post="post" v-for="(post, index) in sampleBlogPost" />

    <div class="blog-card-wrapper">
      <div class="container">
        <h3>View More Recent Blogs</h3>
        <div class="blog-cards">
          <blog-card
            v-for="(post, index) in sampleBlogCard"
            :key="index"
            :post="post"
          />
        </div>
      </div>
    </div>

    <div class="updates">
      <div class="container">
        <h2>never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#"
          >Register for FireBlogs
          <Arrow class="arrow arrow-link" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import BlogPost from "../components/BlogPost.vue";
import BlogCard from "../components/BlogCard.vue";
import Arrow from "../assets/Icons/arrow-right-light.svg";
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
    blogHTML: "the is blog HTML",
    blogCoverPhoto: "beautiful-stories",
  },
]);

const sampleBlogCard = ref([
  {
    blogTitle: "fsajhafsjhafs",
    blogCoverPhoto: "stock-1",
    blogDate: "May 1, 2021",
  },
  {
    blogTitle: "fsajhafsjhafs",
    blogCoverPhoto: "stock-2",
    blogDate: "May 1, 2021",
  },
  {
    blogTitle: "fsajhafsjhafs",
    blogCoverPhoto: "stock-3",
    blogDate: "May 1, 2021",
  },
  {
    blogTitle: "fsajhafsjhafs",
    blogCoverPhoto: "stock-4",
    blogDate: "May 1, 2021",
  },
]);
</script>

<style lang="scss" scoped>
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

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media screen and (min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;

      @media screen and (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2 {
      font-weight: 300;
      max-width: 425px;
      font-size: 32px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media screen and (min-width: 800px) {
        text-align: initial;
        font-size: 38px;
      }
    }
  }
}
</style>
