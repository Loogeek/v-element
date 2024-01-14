<template>
  <div>
    <Button ref="buttonRef" @click="open" type="danger">Test Button</Button>
    <Button plant @click="close">Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br/><br/>
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br/><br/>
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br/><br/>
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br/><br/>
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br/><br/>  
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type {ButtonInstance} from '@/components/Button/types'
import Button from './components/Button/Button.vue'

const buttonRef = ref<ButtonInstance | null>(null)

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})
</script>

<style scoped>
  
</style>