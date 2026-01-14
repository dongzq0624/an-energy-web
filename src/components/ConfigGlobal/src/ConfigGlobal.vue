<script lang="ts" setup>
import { ConfigGlobalTypes } from '@/types/configGlobal'

defineOptions({ name: 'ConfigGlobal' })

const props = withDefaults(
  defineProps<{
    size?: ConfigGlobalTypes['size']
  }>(),
  {
    size: 'default'
  }
)

// 全局配置
const configGlobal: ConfigGlobalTypes = reactive({
  size: props.size
})

// 监听 size 变化
watch(
  () => props.size,
  (newSize) => {
    configGlobal.size = newSize
  }
)

// 提供给子组件使用
provide('configGlobal', configGlobal)
</script>

<template>
  <div class="config-global">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.config-global {
  width: 100%;
  height: 100%;
}
</style>
