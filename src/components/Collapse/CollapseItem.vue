<template>
  <div class="v-collapse-item">
    <div class="v-collapse-item__header" :class="{
      'is-disabled': disabled,
      'is-active': isActive
    }" :id="`item-header-${name}`" @click="handleClick">
      <slot name="title">{{ title }}</slot>
    </div>
    <div class="v-coolapse-item__wrapper" v-show="isActive">
      <div class="v-collapse-item__content" :id="`item-content-${name}`">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, computed } from 'vue'
import { collapseContextKey, type CollapseItemProps } from './types'

defineOptions({
  name: 'VCollapseItem'
})

const props = defineProps<CollapseItemProps>()

const collapseContext = inject(collapseContextKey)
// const {activateNames, handleItemClick } = collapseContext
const isActive = computed(() => collapseContext?.activeNames.value?.includes(props.name))
console.log("🚀 ~ isActive:", props.name, isActive)


const handleClick = () => {
  if (props.disabled) return;

  collapseContext?.handleItemClick(props.name)
}

</script>

<style scoped></style>