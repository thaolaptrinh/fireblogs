<template>
  <footer>
    <div class="container">
      <div class="left">
        <div class="col-1">
          <router-link class="header" :to="{ name: 'home' }"
            >FireBlogs</router-link
          >
          <ul>
            <li>
              <a href="#">
                <youtubeBrands class="svg-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <linkedinBrands class="svg-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <instagramBrands class="svg-icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <twitterBrands class="svg-icon" />
              </a>
            </li>
          </ul>
        </div>
        <div class="col-2">
          <ul>
            <router-link class="link" :to="{ name: 'home' }">Home</router-link>
            <router-link class="link" :to="{ name: 'blogs' }"
              >blogs</router-link
            >
            <router-link class="link" :to="{ name: 'home' }" v-if="user"
              >create post</router-link
            >
            <router-link class="link" :to="{ name: 'login' }" v-else
              >login/register</router-link
            >
          </ul>
        </div>
      </div>
      <div class="right">
        <p>Copyright 2023 All right reserved</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import youtubeBrands from "../assets/Icons/youtube-brands.svg";
import twitterBrands from "../assets/Icons/twitter-brands.svg";
import instagramBrands from "../assets/Icons/instagram-brands.svg";
import linkedinBrands from "../assets/Icons/linkedin-brands.svg";
import { ref } from "vue";

const user = ref(null);
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
    > div {
      display: flex;
      flex: 1;
    }

    .left {
      gap: 32px;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media screen and (min-width: 800px) {
        flex-direction: row;
        align-items: initial;
        gap: 0;
      }

      .header {
        font-size: 24px;
        color: #fff;
        text-decoration: none;
        font-weight: 600;
        text-align: center;
        @media screen and (min-width: 800px) {
          text-align: initial;
        }
      }
      ul {
        gap: 16px;
        list-style: none;
        display: flex;
      }

      .col-1,
      .col-2 {
        gap: 32px;
        display: flex;
        flex: 1;

        @media screen and (min-width: 800px) {
          gap: 0;
        }
      }
      .col-1 {
        flex-direction: column;

        ul {
          margin-top: auto;

          li {
            display: flex;
            align-items: center;

            .svg-icon {
              width: 24px;
              height: auto;
              color: #fff;
            }
          }
        }
      }

      .col-2 {
        ul {
          height: 100%;
          justify-content: center;
          flex-direction: row;
          flex-wrap: wrap;

          @media screen and (min-width: 800px) {
            flex-direction: column;
          }

          .link {
            font-size: 16px;
            font-weight: 500;
            color: #fff;
            text-decoration: none;
          }
        }
      }
    }
    .right {
      gap: 32px;
      color: #fff;
      align-items: center;
      flex-direction: column;
      @media screen and (min-width: 800px) {
        align-items: flex-end;
        gap: 0;
      }
    }

    p {
      margin-top: auto;
    }
  }
}
</style>
