<script setup>
import { ref } from "vue";
// 클래스 추가용 변수
const fruits = "apple avocado";
const fruitArr = ["banana", "blueberry"];
const visible = ref({ fruit: true, pointer: true });
const hidden = { fruit: false };

// 클릭시 색상 변경 함수
const changeVisible = () => {
  visible.value.fruit = !visible.value.fruit;
};

const rect = "background-color: gray; width: 200px; height: 100px";
const rectObj = {
  backgroundColor: "green",
  width: "200px",
  height: "100px",
  marginTop: "10px",
};
// 조건 티렉티브
const loading = false;
</script>

<template>
  <h1>Chapter3.vue</h1>
  <div :class="fruits">사과 / 아보카도</div>
  <div :class="fruitArr" :title="fruitArr">바나나 / 블루베리</div>
  <div :class="visible" @click="changeVisible">사과 {{ visible.fruit }}</div>
  <div :class="hidden">오이</div>
  <div :style="rect">rect</div>
  <div :style="rectObj">rectObj</div>
  <!-- 조건 디렉티브 -->
  <!-- loading 이 true이면 나오고 false이면 주석처리됨 -->
  <div v-if="loading">로딩 중!!</div>
  <div v-else>로딩 끝!!</div>

  <div v-show="loading">show loading</div>
</template>

<style scoped>
.fruit {
  color: aquamarine;
}
</style>
