<template>
  <div>
    <Button ref="buttonRef" @click="buttonClick" type="danger">Test Button</Button>
    <Button plant>Plain Button</Button>
    <Button round>Round Button</Button>
    <Button circle>VK</Button>
    <Button disabled>Disabled Button</Button><br /><br />
    <Button type="primary">Primary</Button>
    <Button type="success">Success</Button>
    <Button type="info">Info</Button>
    <Button type="warning">Warning</Button>
    <Button type="danger">Danger</Button><br /><br />
    <Button type="primary" plain>Primary</Button>
    <Button type="success" plain>Success</Button>
    <Button type="info" plain>Info</Button>
    <Button type="warning" plain>Warning</Button>
    <Button type="danger" plain>Danger</Button><br /><br />
    <Button size="large">Large</Button>
    <Button size="small">Small</Button><br /><br />
    <Button size="large" loading>Loading</Button>
    <Button size="large" icon="arrow-up">Icon</Button><br /><br />
  </div>

  <div>
    <Collapse accordion v-model="openedValue">
      <CollapseItem name="a" title="title a">
        content a
      </CollapseItem>
      <CollapseItem name="b" title="title b">
        content b
      </CollapseItem>
      <CollapseItem name="c" title="title c" disabled>
        content c
      </CollapseItem>
    </Collapse>

    <Collapse v-model="openedValue">
      <CollapseItem name="a" title="Title A">
        <h1>headline title</h1>
        <div> this is content a aaa </div>
      </CollapseItem>
      <CollapseItem name="b" title="Title B">
        <div> this is bbbbb test </div>
      </CollapseItem>
      <CollapseItem name="c" title="Disabled Title" disabled>
        <div> this is cccc test </div>
      </CollapseItem>
    </Collapse>

    <div>
      11111111
      <Icon icon="spinner" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import type { ButtonInstance } from '@/components/Button/types'
import Button from './components/Button'
import { Collapse, CollapseItem } from './components/Collapse'
import Icon from './components/Icon'

const buttonRef = ref<ButtonInstance | null>(null)

const buttonClick = () => {
  console.log('button clicked')
}

onMounted(() => {
  if (buttonRef.value) {
    console.log(buttonRef.value.ref)
  }
})

const openedValue = ref(['a'])
</script>

<style scoped></style>