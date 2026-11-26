<template>
  <div class="scenario-path">
    <div class="step on">
      <p class="k">01 · 正常生产</p>
      <p class="v">主 → 温备 / 采集 / 灾备</p>
    </div>

    <div class="conn on">
      <span class="lbl">{{ variant === 'C' ? '主+温备同时宕机' : '主集群宕机' }}</span>
      <span class="arrow">→</span>
    </div>

    <div class="step" :class="{ on: variant !== 'C', skipped: variant === 'C' }">
      <p class="k">02 · 温备接管</p>
      <p class="v">{{ variant === 'C' ? '跳过（同时宕机）' : '温备 → 采集 / 灾备' }}</p>
    </div>

    <div class="conn" :class="{ on: variant === 'B', skipped: variant !== 'B' }">
      <span class="lbl">{{ variant === 'A' ? '未发生' : variant === 'C' ? '不经过' : '温备宕机' }}</span>
      <span class="arrow">→</span>
    </div>

    <div class="step" :class="{ on: variant === 'B' || variant === 'C', skipped: variant === 'A' }">
      <p class="k">03 · 灾备接管</p>
      <p class="v">{{ variant === 'A' ? '未到达' : '灾备 → 采集（反向补数）' }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  variant: { type: String, default: 'A' },
})
</script>

<style scoped>
.scenario-path {
  display: flex;
  align-items: stretch;
  gap: 0;
  margin: 0.12rem 0 0.3rem;
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
}

.step {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--divider);
  border-top: 2px solid var(--divider);
  background: var(--surface);
  padding: 0.22rem 0.55rem 0.26rem;
}
.step.on {
  border-top-color: var(--brand);
  background: var(--brand-pale);
}
.step.skipped {
  opacity: 0.55;
}

.k {
  margin: 0;
  font-size: 0.6rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--muted);
}
.step.on .k {
  color: var(--brand);
}
.v {
  margin: 0.08rem 0 0;
  font-size: 0.68rem;
  line-height: 1.35;
  color: var(--ink);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.step.skipped .v {
  color: var(--muted);
}

.conn {
  width: 5.8rem;
  flex: 0 0 5.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.02rem;
  color: var(--muted);
}
.conn.on {
  color: var(--brand);
}
.conn.skipped {
  opacity: 0.55;
}
.lbl {
  font-size: 0.56rem;
  line-height: 1.2;
  white-space: nowrap;
  color: currentColor;
}
.arrow {
  font-family: 'Fira Code', monospace;
  font-size: 0.74rem;
  line-height: 1;
  color: currentColor;
}
</style>
