<script setup lang="ts">
import { ref } from 'vue'
import { VueFlow } from '@vue-flow/core'
import type { Node, Edge } from '@vue-flow/core'

// 1. Import CustomNode ที่เราเพิ่งสร้าง
import CustomNode from '@/components/CustomNode.vue'

// (ถ้าคุณจะใช้ MiniMap / Controls ก็ import เข้ามาด้วย)
import { MiniMap } from '@vue-flow/minimap'
import { Controls } from '@vue-flow/controls'

const nodes = ref<Node[]>([
{ id: '1', type: 'input', label: 'Node 1', position: { x: 250, y: 5 } },
  
  // 2. เปลี่ยนโหนด '2' ให้เป็น "type: 'custom'"
  { 
    id: '2', 
    type: 'custom', // <-- ตั้งชื่อ type ที่เราจะใช้
    label: 'โหนดที่ 2 (แบบ Custom)', 
    position: { x: 100, y: 100 },
    // 3. ส่งข้อมูล 'data' เข้าไป
    data: {
      description: 'นี่คือข้อมูลที่ส่งมาจาก Data',
      isSpecial: false
    }
  },

  { 
    id: '3', 
    label: 'Node 3', 
    position: { x: 400, y: 100 } 
  },
  
  // 4. ลองสร้างโหนด custom อีกอัน
  { 
    id: '4', 
    type: 'custom', // <-- ใช้ type ชื่อเดิม
    label: 'โหนดที่ 4 (Special)', 
    position: { x: 400, y: 200 },
    data: {
      description: 'โหนดนี้เป็นสีเขียว',
      isSpecial: true // <-- ส่ง data ที่แตกต่างกัน
    }
  },
])
  
const edges = ref<Edge[]>([
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4', animated: true }, // เพิ่มเส้นเชื่อม
])
</script>

<template>
  <div class="h-full w-full">
        <VueFlow
        v-model:nodes="nodes"
        v-model:edges="edges"
        :fit-view-on-init="true"
        >
        <Controls />
        <MiniMap />

        <template #node-custom="props">
          <CustomNode v-bind="props" />
        </template>
        
      </VueFlow>
  </div>
</template>