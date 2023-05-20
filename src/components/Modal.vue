<template>
  <div class="modal">
    <div class="modal-content">
      <p>{{ props.msg }}</p>
      <button class="button" @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  message: {
    type: String,
    require: true,
  },
});
const emit = defineEmits(["close-modal"]);
const closeModal = () => {
  emit("close-modal");
};
</script>

<style lang="scss" scoped>
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.7);

  &-content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 8px;
    width: 300px;
    padding: 40px 30px;
    background-color: #fff;

    p {
      text-align: center;
    }

    button {
      align-self: center;
    }
  }
}
</style>
