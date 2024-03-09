<template>
  <button class="v-button" ref="buttonRef" :class="{
      [`v-button--${type}`]: type,
      [`v-button--${size}`]: size,
      'is-plain': plain,
      'is-round': round,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-loading': loading
    }" :disabled="disabled" :autofocus="autofocus" :type="nativeType">
    <Icon icon="spinner" spin v-if="loading" />
    <Icon :icon="icon" v-if="icon" />
    <span>
      <slot />

    </span>
  </button>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import Icon from '../Icon'
import type { ButtonProps } from './types'

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

defineOptions({
  name: 'v-button'
})

const buttonRef = ref<HTMLElement | null>(null)

defineExpose({
  ref: buttonRef
})
</script>
<style scoped>
/* @import './style.css' */
</style>