<template>
  <form class="register">
    <p class="login-register">
      Have an account?
      <router-link class="router-link" :to="{ name: 'login' }"
        >Login</router-link
      >
    </p>
    <h2>Create Your FireBlogs Account</h2>
    <div class="inputs">
      <div class="input">
        <input type="text" placeholder="First Name" v-model="form.firstName" />
        <user-icon class="icon" />
      </div>

      <div class="input">
        <input type="text" placeholder="Last Name" v-model="form.lastName" />
        <user-icon class="icon" />
      </div>

      <div class="input">
        <input type="text" placeholder="Username" v-model="form.username" />
        <user-icon class="icon" />
      </div>
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
    <button class="button">Sign Up</button>
    <div class="angle"></div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg";
import UserIcon from "../assets/Icons/user-alt-light.svg";

const form = ref({
  firstName: "",
  lastName: "",
  username: "",
  email: "",
  password: "",
});
</script>

<style lang="scss" scoped></style>
