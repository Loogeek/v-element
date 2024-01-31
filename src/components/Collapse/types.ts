import type { Ref, InjectionKey } from 'vue'

export type NameType = string | number

export interface CollapseProps {
  modelValue: NameType[]
  accordion?: boolean
}

export interface CollapseItemProps {
  name: NameType
  title?: string
  disabled?: boolean
}
