<script setup>
import { onMounted, onUpdated, onUnmounted, reactive } from "vue";

const state = reactive({
  message: "Hello!",
});

onMounted(() => {
  console.log("컴포넌트가 마운트 됐다.");
});
onUpdated(() => {
  console.log("속성값이 변경되었다!", state.message);
});
onUnmounted(() => {
  alert("나 간다~");
});
</script>

<template>
  <h1>Chpater8</h1>
  <div>{{ state.message }}</div>
  <div>
    <input type="text" v-model="state.message" />
  </div>
</template>

<style scoped></style>
