<script setup></script>

<template>
  <h1>App.vue</h1>
  <div class="router-bar">
    <router-link to="/component">컴포넌트</router-link>
    <router-link to="/mustache">콧수염 템플릿</router-link>
    <router-link to="/chapter3">Chapter3</router-link>
    <router-link to="/chapter4">Chapter4</router-link>
    <router-link to="/chapter5">반응형 상태</router-link>
    <router-link to="/chapter6">컴퓨티드</router-link>
    <router-link to="/chapter7">데이터 바인딩</router-link>
    <router-link to="/chapter8">훅(Hook)</router-link>
  </div>
  <router-view />
</template>

<style scoped></style>
