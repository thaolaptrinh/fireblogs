<template>
  <form class="reset">
    <h2>Reset Password</h2>
    <p>Forgot your password? Enter your email to reset it</p>
    <div class="inputs">
      <div class="input">
        <input type="text" placeholder="Email" v-model="form.email" />
        <email-icon class="icon" />
      </div>
    </div>

    <button class="button">Reset</button>
    <div class="angle"></div>
  </form>
</template>

<script setup>
import { ref } from "vue";
import EmailIcon from "../assets/Icons/envelope-regular.svg";
import PasswordIcon from "../assets/Icons/lock-alt-solid.svg";
import UserIcon from "../assets/Icons/user-alt-light.svg";

const form = ref({
  email: "",
});
</script>

<style lang="scss" scoped>
.reset {
  h2 {
    margin-bottom: 8px;
  }
  p {
    text-align: center;
    margin-bottom: 32px;
  }
}
</style>
