<template>
  <div class="v-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue'
import type { CollapseProps, NameType } from './types'
import { collapseContextKey } from './types'

defineOptions({
  name: 'VCollapse'
})

const props = defineProps<CollapseProps>()
const activeNames = ref<NameType[]>(props.modelValue || [])

const handleItemClick = (activateName: NameType) => {
  console.log("🚀 ~ handleItemClick ~ activateName:", activateName)

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
}

provide(collapseContextKey, {
  activeNames,
  handleItemClick
})

</script>

<style scoped></style>
