<script setup></script>

<template>
  <h1>App.vue</h1>
  <div class="router-bar">
    <router-link to="/component">컴포넌트</router-link>
    <router-link to="/mustache">콧수염 템플릿</router-link>
    <router-link to="/chapter3">Chapter3</router-link>
    <router-link to="/chapter4">Chapter4</router-link>
    <router-link to="/chapter5">반응형 상태</router-link>
  </div>
  <router-view></router-view>
</template>

<style scoped></style>
