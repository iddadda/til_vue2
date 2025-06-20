<script setup>
import TireVue from "./Tire.vue";
</script>

<template>
  <div class="rear-wheel">
    <span>REAR WHEEL</span>
    <TireVue color="Green" />
  </div>
</template>

<style scoped>
.rear-wheel {
  border: 1px solid white;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
}
</style>
