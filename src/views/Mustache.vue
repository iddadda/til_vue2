<script setup>
const message = "There";
const messageObj = {
  name: "kim",
  age: 20,
};
console.log(messageObj);
console.log(messageObj.toString());
const pageId = "history";
let loading = false;
const parent = "fruits";
const child = "item";
const fruitList = ["사과", "바나나", "딸기", "배"];
</script>

<template>
  <h1>Mustache.vue</h1>
  <div>Hello, {{ message }}</div>
  <div>Hello, <span v-text="message"></span></div>
  <!-- 객체 주소값이 출력됨 -->
  <div>Hello, messageObj<span v-text="messageObj"></span></div>
  <div>Hello, messageObj.name<span v-text="messageObj.name"></span></div>
  <div v-bind:id="pageId">페이지 아이디 div</div>
  <input type="text" placeholder="아이디" :readonly="loading" />
  <input type="password" placeholder="비밀번호" :readonly="loading" />
  <button :disabled="loading">로그인</button>
  <ul :class="parent">
    <li :key="idx" v-for="(item, idx) in fruitList" :class="child">
      {{ item }}
    </li>
  </ul>
</template>

<style scoped>
#history {
  color: red;
}
</style>
