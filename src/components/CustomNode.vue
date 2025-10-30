<script setup lang="ts">
import { Handle, Position } from '@vue-flow/core'
import type { VNode, Component } from 'vue'
import { computed } from 'vue'

interface CustomNodeProps {
  label?: string | VNode | Component | object
  data?: {
    description?: string
    isSpecial?: boolean
  }
}

const props = defineProps<CustomNodeProps>()

const borderColor = computed(() => {
  return props.data?.isSpecial ? 'border-green-500' : 'border-blue-500'
})
</script>

<template>
  <Handle type="target" :position="Position.Left" />
  <Handle type="source" :position="Position.Right" />

  <div
    class="p-4 bg-white border-2 rounded-lg shadow-lg"
    :class="borderColor"
    style="width: 250px"
  >
    <div v-if="props.label" class="font-bold text-gray-800">
      <template v-if="typeof props.label === 'string'">
        {{ props.label }}
      </template>
      <component :is="props.label" v-else />
    </div>

    <div v-if="props.data?.description" class="mt-2 text-sm text-gray-600">
      <p>Description: {{ props.data.description }}</p>
    </div>
  </div>
</template>