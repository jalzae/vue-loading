<template>
  <transition name="fade">
    <div
      v-if="visible"
      class="vue-loading-overlay"
      role="status"
      aria-label="Loading"
      :style="{ '--loader-color': color }"
    >
      <div class="vue-loading">
        <div
          v-for="i in 8"
          :key="i"
          class="vue-loading__line"
          :style="{ transform: `rotate(${(i - 1) * 45}deg)` }"
        >
          <div
            class="vue-loading__dot"
            :style="{ animationDelay: `${(i - 1) * 0.1}s` }"
          />
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { loadingVisible, loaderColor } from './loadingState'

const visible = loadingVisible
const color = loaderColor
</script>

<style scoped>
.vue-loading-overlay {
  position: fixed;
  inset: 0;
  background: rgba(255, 255, 255, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
}

.vue-loading {
  position: relative;
  width: 80px;
  height: 80px;
}

.vue-loading__line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.vue-loading__dot {
  position: absolute;
  top: 0;
  left: 50%;
  width: 17%;
  height: 17%;
  background-color: var(--loader-color, #ad5160);
  border-radius: 50%;
  transform: translateX(-50%);
  animation: vue-loading-fade 2s linear infinite;
}

@keyframes vue-loading-fade {
  0% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateX(-50%) scale(1.6);
    opacity: 0.3;
  }
  100% {
    transform: translateX(-50%) scale(1);
    opacity: 1;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
