<script setup>
import FrontWheel from "@/components/FrontWheel.vue";
import RearWheel from "@/components/RearWheel.vue";
</script>

<template>
  <h1>Component.vue</h1>
  <div class="tire">
    <div class="wheel">
      <FrontWheel />
      <FrontWheel />
    </div>
    <div class="wheel">
      <RearWheel />
      <RearWheel />
    </div>
  </div>
</template>

<style scoped>
.tire {
}
.wheel {
  display: flex;
  gap: 20px;
  padding: 20px 0;
}
</style>
