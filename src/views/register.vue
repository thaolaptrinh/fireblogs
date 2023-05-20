<template>
  <form class="register" @submit.prevent="register">
    <p class="login-register">
      Have an account?
      <router-link class="router-link" :to="{ name: 'login' }"
        >Login</router-link
      >
    </p>
    <h2>Create Your FireBlogs Account</h2>
    <div class="inputs">
      <div class="input">
        <input type="text" placeholder="Full Name" v-model="form.fullName" />
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
      <div v-show="error" class="error">
        {{ errorMsg }}
      </div>
    </div>

    <button class="button">Sign Up</button>
    <div class="angle"></div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg";
import UserIcon from "../assets/Icons/user-alt-light.svg";
import { useRouter } from "vue-router";

const form = ref({
  fullName: "",
  email: "",
  password: "",
});

const store = useStore();
const router = useRouter();

const { error, errorMsg } = store.state.auth;

const register = () => {
  store.dispatch("auth/register", form.value);

  if (!error) {
    router.push({ name: "home" });
  }
};
</script>

<style lang="scss" scoped></style>
