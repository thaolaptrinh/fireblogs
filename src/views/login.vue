<template>
  <form class="login">
    <p class="login-register">
      Don't have an account?
      <router-link class="router-link" :to="{ name: 'register' }"
        >Register</router-link
      >
    </p>
    <h2>Login to FireBlogs</h2>
    <div class="inputs">
      <div class="input">
        <input type="text" placeholder="Email" v-model="form.email" />
        <email-icon class="icon" />
      </div>

      <div class="input">
        <input type="password" placeholder="Password" v-model="form.password" />
        <password-icon class="icon" />
      </div>
    </div>
    <router-link class="forgot-password" :to="{ name: 'forgot-password' }"
      >Forgot your password?</router-link
    >
    <button class="button">Sign In</button>
    <div class="angle"></div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg";

const form = ref({
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped></style>
