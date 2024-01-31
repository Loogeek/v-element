<template>
  <div class="v-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { CollapseProps } from './types'

defineOptions({
  name: 'VCollapse'
})

const props = defineProps<CollapseProps>()
const activateNames = ref(props.modelValue)
</script>

<style scoped></style>
