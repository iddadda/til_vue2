<script setup>
// color 라는 속성으로 데이터를 받을 수 있다
const props = defineProps({
  color: String,
});
</script>

<template>
  <div :style="{ color: props.color }">{{ props.color || Black }} Tire</div>
  <div style="background-color: black; color: #fff">Black Tire</div>
</template>

<style scoped></style>
