<template>
  <div class="v-collapse-item">
    <div class="v-collapse-item__header" :id="`item-header-${name}`">
      <slot name="title">{{ title }}</slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { CollapseItemProps } from './types'

defineOptions({
  name: 'VCollapseItem'
})

const props = defineProps<CollapseItemProps>()

</script>

<style scoped></style>