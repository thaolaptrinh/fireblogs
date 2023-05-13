<template>
  <header>
    <nav class="container">
      <div class="branding">
        <router-link class="header" :to="{ name: 'home' }">
          <vueIcon />
          FireBlogs
        </router-link>
      </div>

      <div class="nav-links">
        <ul v-if="!isMobile">
          <router-link class="link" :to="{ name: 'home' }">Home</router-link>
          <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
          <router-link class="link" :to="{ name: 'home' }"
            >Create Post</router-link
          >
          <router-link class="link" :to="{ name: 'login' }"
            >Login/Register</router-link
          >
        </ul>
      </div>
    </nav>
    <menuIcon class="menu-icon" v-if="isMobile" @click="toggleMobileNav" />
    <transition name="mobile-nav">
      <ul class="mobile-nav" v-if="isMobileNavVisible">
        <router-link class="link" :to="{ name: 'home' }">Home</router-link>
        <router-link class="link" :to="{ name: 'blogs' }">Blogs</router-link>
        <router-link class="link" :to="{ name: 'home' }"
          >Create Post</router-link
        >
        <router-link class="link" :to="{ name: 'login' }"
          >Login/Register</router-link
        >
      </ul>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted } from "vue";
import menuIcon from "../assets/Icons/bars-regular.svg";
import vueIcon from "../assets/vue.svg";
const isMobile = ref(null);
const isMobileNavVisible = ref(null);
const windowWith = ref(null);

const checkScreen = () => {
  windowWith.value = window.innerWidth;

  if (windowWith.value <= 750) {
    isMobile.value = true;
    return;
  }
  isMobile.value = false;
  isMobileNavVisible.value = false;
  return;
};

onMounted(() => {
  checkScreen();
  window.addEventListener("resize", checkScreen);
});

const toggleMobileNav = () =>
  (isMobileNavVisible.value = !isMobileNavVisible.value);
</script>

<style lang="scss" scoped>
header {
  background-color: #fff;
  padding: 0 25px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  z-index: 100;

  .link {
    font-weight: 500;
    padding: 0 8px;
    transition: 0.3s color ease;

    &:hover {
      color: #1eb8b8;
    }
  }

  nav {
    display: flex;
    padding: 25px 0;

    .branding {
      display: flex;
      align-items: center;

      .header {
        font-weight: 600;
        font-size: 24px;
        color: #000;
        text-decoration: none;
      }
    }

    .nav-links {
      position: relative;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: flex-end;

      ul {
        margin-right: 32px;

        .link {
          margin-right: 32px;
        }

        .link:last-child {
          margin-right: 0;
        }
      }
    }
  }

  .menu-icon {
    cursor: pointer;
    position: absolute;
    top: 30px;
    right: 25px;
    height: 25px;
    width: auto;
  }

  .mobile-nav {
    padding: 20px;
    width: 70%;
    max-width: 250px;
    display: flex;
    flex-direction: column;
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    background-color: #303030;

    .link {
      padding: 15px 0;
      color: #fff;
    }
  }

  .mobile-nav-enter-active,
  .mobile-nav-leave-active {
    transition: all 0.7s ease;
    transform: translateX(0);
  }

  .mobile-nav-enter-from,
  .mobile-nav-leave-to {
    transform: translateX(-250px);
    opacity: 0;
  }
}
</style>
