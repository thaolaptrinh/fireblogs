<template>
  <form class="login" @submit.prevent="login">
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

      <div class="error" v-show="errorMsg">
        {{ errorMsg }}
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
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg";

const form = reactive({
  email: "",
  password: "",
});
const router = useRouter();
const errorMsg = ref(null);
const store = useStore();
const login = () => {
  if (form.email == "" || form.password == "") {
    return;
  }

  store
    .dispatch("auth/login", form)
    .then((data) => {
      console.log(data);
      if (data.success) {
        router.push({ name: "home" });
      }
    })
    .catch((err) => {
      console.log("🚀 ~ file: login.vue:61 ~ login ~ err:", err);
      if (err) {
        errorMsg.value = "Login failed";
      }
    });

  errorMsg.value = "";
};
</script>

<style lang="scss" scoped></style>
