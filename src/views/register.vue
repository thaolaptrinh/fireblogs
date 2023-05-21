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
      <div v-show="errorMsg" class="error">
        {{ errorMsg }}
      </div>
    </div>

    <button class="button">Sign Up</button>
    <div class="angle"></div>
  </form>
</template>

<script setup>
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg";
import UserIcon from "../assets/Icons/user-alt-light.svg";
import { useRouter } from "vue-router";

const form = reactive({
  fullName: "",
  email: "",
  password: "",
});

const store = useStore();
const errorMsg = ref("");
const router = useRouter();

const register = () => {
  if (Object.values(form).some((value) => value == "")) {
    errorMsg.value = "Please fill all the fields";
    return;
  }

  store
    .dispatch("auth/register", form)
    .then((data) => {
      if (data.success) {
        router.push({ name: "home" });
      }
    })
    .catch((err) => {
      errorMsg.value = "Registration failed";
    });

  errorMsg.value = "";
};
</script>

<style lang="scss" scoped></style>
