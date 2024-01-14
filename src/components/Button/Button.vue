<template>
  <button
    class="v-button"
    ref="buttonRef"
    :class="{
      [`v-button--${type}`]: type,
      [`v-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }"
    :disabled="disabled"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot />
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import type {ButtonProps} from './types'

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

const buttonRef = ref<HTMLElement | null>(null)

defineExpose({
  ref: buttonRef
})
</script>
<style scoped>
  
</style>