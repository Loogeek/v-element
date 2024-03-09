<template>
  <i class="v-icon" :class="{ [`v-icon--${type}`]: type }" :style="customStyle" v-bind="$attrs">
    <fontAwesomeIcon v-bind="filteredProps" />
  </i>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { omit } from 'lodash-es'
import type { IconProps } from './types'

defineOptions({
  name: 'v-Icon',
  inheritAttrs: false,
})

const props = defineProps<IconProps>()
const filteredProps = computed(() => omit(props, ['type', 'color']))
const customStyle = computed(() => {
  return props.color ? { color: props.color } : {}
})
</script>

<style scoped></style>
