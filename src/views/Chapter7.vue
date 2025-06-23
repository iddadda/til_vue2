<script setup>
import { reactive } from "vue";

const state = reactive({
  player: "Kim",
});
const state2 = reactive({
  form: {
    id: "",
    pw: "",
  },
});

const login = () => {
  alert(state2.form.id + "님 환영합니다!");
};
</script>

<template>
  <h1>chapter7</h1>
  <h1>{{ state.player }}</h1>
  <div>
    <input type="text" :value="state.player" />
    <input type="text" v-model="state.player" />
  </div>
  <form @submit.prevent="login">
    {{ state2.form.id }}
    <input type="text" v-model="state2.form.id" placeholder="야호" />
    <input type="submit" value="로그인" />
  </form>
</template>

<style scoped></style>
