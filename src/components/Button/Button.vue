<template>
  <button
    class="v-button"
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
import type {ButtonProps} from './types'

withDefaults(defineProps<ButtonProps>(), {
  nativeType: 'button',
})

// export default {
  
// }
</script>
<style lang="">
  
</style>