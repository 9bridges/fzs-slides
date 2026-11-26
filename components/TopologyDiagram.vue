<template>
  <svg class="topo" :viewBox="`0 0 ${W} ${H}`" role="img" :aria-label="ariaLabel">
    <defs>
      <marker :id="mid('brand')" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--brand)" />
      </marker>
      <marker :id="mid('down')" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="#b8b1ab" />
      </marker>
      <marker :id="mid('ink')" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--ink)" />
      </marker>
      <marker :id="mid('uft')" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--s-blue)" />
      </marker>
      <marker :id="mid('log')" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L8 4 L0 8 z" fill="var(--s-amber)" />
      </marker>
    </defs>

    <!-- 站点分区 -->
    <rect
      v-for="p in panels"
      :key="p.zone"
      :x="p.x"
      y="0"
      :width="p.w"
      :height="H - 4"
      rx="7"
      class="panel"
      :class="{ 'panel-down': p.down }"
    />
    <text v-for="p in panels" :key="`z-${p.zone}`" :x="p.x + p.w / 2" y="13" class="zone">{{ p.zone }}</text>

    <!-- 站点标题与角色 -->
    <g v-for="(s, i) in sites" :key="s.name" :class="{ down: !isActive(i) }">
      <text :x="s.cx" y="27" class="site">{{ s.name }}</text>
      <text :x="s.cx" y="41" class="role" :class="{ prod: isProd(i) }">{{ roleText(i) }}</text>

      <!-- 应用 / UFT 通道 -->
      <template v-if="isActive(i)">
        <template v-if="isProd(i)">
          <text :x="s.cx - 28" y="68" class="app-label">应用</text>
          <path
            :d="`M${s.cx - 28} 76 V102`"
            class="edge app"
            :marker-start="`url(#${mid('ink')})`"
            :marker-end="`url(#${mid('ink')})`"
          />
          <text :x="s.cx + 30" y="68" class="uft-label">UFT</text>
          <path :d="`M${s.cx + 30} 76 V102`" class="edge uft" :marker-end="`url(#${mid('uft')})`" />
        </template>
        <template v-else>
          <text :x="s.cx" y="68" class="uft-label">UFT</text>
          <path :d="`M${s.cx} 76 V102`" class="edge uft" :marker-end="`url(#${mid('uft')})`" />
        </template>
      </template>

      <!-- 经管库租户 -->
      <rect :x="s.cx - 62" y="106" width="124" height="30" rx="6" class="tenant" />
      <text :x="s.cx" y="121" class="tenant-label" dominant-baseline="middle">经管库租户</text>
    </g>

    <!-- 全网测试租户（仅采集库） -->
    <g>
      <rect :x="TEST_X - 56" y="186" width="112" height="28" rx="6" class="test-box" />
      <text :x="TEST_X" y="200" class="test-label" dominant-baseline="middle">全网测试租户</text>
      <path :d="`M${TEST_X} 136 V182`" class="edge log" :marker-end="`url(#${mid('log')})`" />
      <text :x="TEST_X - 8" y="152" class="log-label" text-anchor="end">日志同步</text>
      <text :x="TEST_X - 8" y="163" class="log-label" text-anchor="end">全网测试时创建</text>
      <path :d="`M${TEST_X} 238 V218`" class="edge log" :marker-end="`url(#${mid('log')})`" />
      <text :x="TEST_X + 8" y="230" class="log-label">UFT</text>
      <text :x="TEST_X + 8" y="240" class="log-label">全网测试时启动</text>
    </g>

    <!-- 九桥同步链路 -->
    <g v-for="e in edges" :key="e.d">
      <path
        :d="e.d"
        class="edge"
        :class="e.kind"
        :marker-end="`url(#${mid(e.kind === 'down' ? 'down' : 'brand')})`"
      />
      <text :x="e.lx" :y="e.ly" class="edge-label" :class="e.kind" :text-anchor="e.anchor || 'middle'">
        <tspan v-for="(line, li) in e.lines" :key="line" :x="e.lx" :dy="li === 0 ? 0 : 9.8">{{ line }}</tspan>
      </text>
    </g>
  </svg>
</template>

<script setup>
import { computed, useId } from 'vue'

const props = defineProps({
  scenario: { type: String, default: 'normal' },
})

const uid = useId()
const mid = (name) => `topo-${name}-${uid}`

const W = 900
const H = 246
const TEST_X = 563

const sites = [
  { name: '主集群 · 3 节点', role: '同机房采集库', cx: 107 },
  { name: '温备库 · 1 节点', role: '同机房采集库', cx: 335 },
  { name: '采集库 · 1 节点', role: '同城采集库 · 全网', cx: 563 },
  { name: '灾备库 · 1 节点', role: '异地灾备', cx: 791 },
]

const DR_BASE = {
  active: [false, false, true, true],
  prod: 3,
  edges: [
    { d: 'M169 121 H273', kind: 'down', lines: ['九桥同步', '（不含 UFT、HS_RDC）'], lx: 170, ly: 146 },
    {
      d: 'M501 121 H397',
      kind: 'down',
      lines: ['九桥同步', '（不含 UFT、HS_RDC，增量）', '可温备时启动'],
      lx: 385,
      ly: 146,
    },
    {
      d: 'M729 121 H625',
      kind: 'sync',
      lines: ['九桥同步', '（不含 HS_RDC，增量）', '切换灾备时启动'],
      lx: 677,
      ly: 146,
    },
  ],
}

const CONFIG = {
  normal: {
    active: [true, true, true, true],
    prod: 0,
    edges: [
      { d: 'M169 121 H273', kind: 'sync', lines: ['九桥同步', '（不含 UFT、HS_RDC）'], lx: 221, ly: 146 },
      { d: 'M489 170 V121 H501', kind: 'sync', lines: ['九桥同步', '（不含 HS_RDC）'], lx: 390, ly: 150 },
      { d: 'M107 136 V170 H791 V136', kind: 'sync', lines: ['九桥同步'], lx: 710, ly: 150 },
    ],
  },
  warm: {
    active: [false, true, true, true],
    prod: 1,
    edges: [
      { d: 'M169 121 H273', kind: 'down', lines: ['九桥同步', '（不含 UFT、HS_RDC）'], lx: 170, ly: 146 },
      {
        d: 'M397 121 H501',
        kind: 'sync',
        lines: ['九桥同步', '（不含 HS_RDC，增量）', '切温备时启动'],
        lx: 385,
        ly: 146,
      },
      {
        d: 'M335 136 V170 H791 V136',
        kind: 'sync',
        lines: ['九桥同步', '（不含 UFT、HS_RDC，增量）', '切温备时启动'],
        lx: 710,
        ly: 146,
      },
    ],
  },
  drB: { ...DR_BASE, roleOverrides: { 1: '接管后宕机' } },
  drC: { ...DR_BASE, roleOverrides: { 1: '同时宕机' } },
}

const cfg = computed(() => CONFIG[props.scenario] ?? CONFIG.normal)
const isActive = (i) => cfg.value.active[i]
const isProd = (i) => cfg.value.prod === i
const roleText = (i) =>
  cfg.value.roleOverrides?.[i] ?? (!isActive(i) ? '宕机' : isProd(i) ? '生产（主）' : sites[i].role)

const panels = computed(() => [
  { x: 0, w: 442, zone: '同机房', down: !cfg.value.active[0] && !cfg.value.active[1] },
  { x: 456, w: 214, zone: '同城', down: false },
  { x: 684, w: 214, zone: '异地', down: false },
])

const edges = computed(() => cfg.value.edges)

const SCENARIO_NAMES = {
  normal: '正常生产，一源三目标',
  warm: '主集群宕机，温备接管',
  drB: '主集群宕机，温备接管后也宕机，灾备接管',
  drC: '主集群与温备同时宕机，灾备接管',
}
const ariaLabel = computed(() => `信创库侧部署拓扑：${SCENARIO_NAMES[props.scenario] ?? ''}`)
</script>

<style scoped>
.topo {
  width: 100%;
  height: auto;
  display: block;
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
}

.panel {
  fill: oklch(95.8% 0.006 55);
  stroke: var(--divider);
  stroke-width: 1;
}
.panel-down {
  fill: oklch(97.2% 0.004 55);
}

.zone {
  fill: var(--muted);
  font-family: 'PingFang SC', system-ui, sans-serif;
  font-size: 8.2px;
  letter-spacing: 0.12em;
  text-anchor: middle;
}

.site {
  fill: var(--ink);
  font-size: 10.8px;
  font-weight: 600;
  text-anchor: middle;
}
.role {
  fill: var(--muted);
  font-size: 9.4px;
  text-anchor: middle;
}
.role.prod {
  fill: var(--brand);
  font-weight: 600;
}
.down .site,
.down .role {
  fill: oklch(64% 0.008 35);
}

.tenant {
  fill: oklch(94.5% 0.035 245);
  stroke: var(--s-blue);
  stroke-width: 1;
}
.down .tenant {
  fill: oklch(96.5% 0.003 55);
  stroke: var(--divider);
}
.tenant-label {
  fill: var(--ink);
  font-size: 10.2px;
  font-weight: 600;
  text-anchor: middle;
}
.down .tenant-label {
  fill: oklch(62% 0.008 35);
}

.test-box {
  fill: oklch(95.5% 0.06 85);
  stroke: var(--s-amber);
  stroke-width: 1;
}
.test-label {
  fill: var(--ink);
  font-size: 10px;
  font-weight: 600;
  text-anchor: middle;
}

.edge {
  fill: none;
  stroke-width: 1.3;
  stroke-linecap: round;
  stroke-linejoin: round;
}
.edge.sync {
  stroke: var(--brand);
}
.edge.down {
  stroke: #b8b1ab;
  stroke-width: 1.1;
}
.edge.app {
  stroke: var(--ink);
  stroke-width: 1.2;
}
.edge.uft {
  stroke: var(--s-blue);
  stroke-width: 1.2;
}
.edge.log {
  stroke: var(--s-amber);
  stroke-width: 1.2;
}

.app-label,
.uft-label {
  font-family: 'PingFang SC', system-ui, sans-serif;
  font-size: 8.4px;
  text-anchor: middle;
}
.app-label {
  fill: var(--ink);
}
.uft-label {
  fill: var(--s-blue);
}

.edge-label {
  font-size: 8.4px;
  fill: var(--brand);
  paint-order: stroke;
  stroke: oklch(95.8% 0.006 55);
  stroke-width: 2.6px;
  stroke-linejoin: round;
}
.edge-label.down {
  fill: #9a938d;
}
.log-label {
  fill: oklch(55% 0.13 72);
  font-size: 8.2px;
  paint-order: stroke;
  stroke: oklch(95.8% 0.006 55);
  stroke-width: 2.4px;
  stroke-linejoin: round;
}
</style>
