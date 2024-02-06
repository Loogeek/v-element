<template>
  <div class="v-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { CollapseEmits, CollapseProps, NameType } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'VCollapse'
})

const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
const activeNames = ref<NameType[]>(props.modelValue || [])

watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue!
})

if (props.accordion && activeNames.value.length > 1) {
  console.warn('accordion mode should only have one active item')
}

const handleItemClick = (activateName: NameType) => {
  let _activeNames = [...activeNames.value]

  if (props.accordion) {
    _activeNames = [_activeNames[0] === activateName ? '' : activateName]

  } else {
    const index = _activeNames.indexOf(activateName)

    if (index > -1) {
      _activeNames.splice(index, 1)
    } else {
      _activeNames.push(activateName)
    }
  }

  activeNames.value = _activeNames

  emits('update:modelValue', _activeNames)
  emits('change', _activeNames)
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})

</script>

<style scoped></style>
