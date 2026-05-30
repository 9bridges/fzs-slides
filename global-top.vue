<template>
  <img
    v-if="$nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    src="/logo.webp"
    alt="九桥同步"
    class="absolute top-4 right-6 h-8 z-10 pointer-events-none"
  />
  <span
    v-if="$nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    class="absolute bottom-3 z-10 select-none"
    style="left: 3.5rem; font-size: 0.7rem; color: oklch(65% 0.010 35); letter-spacing: 0.04em"
  >{{ $nav.currentPage - 1 }}</span>
</template>

<style>
:root {
  --brand:      oklch(40% 0.185 25);
  --brand-deep: oklch(30% 0.155 25);
  --brand-pale: oklch(95.5% 0.010 25);
  --ground:     oklch(97.5% 0.005 50);
  --ink:        oklch(18% 0.012 30);
  --muted:      oklch(52% 0.010 35);
  --divider:    oklch(91% 0.007 50);
  --surface:    oklch(99.2% 0.003 50);
  --s-red:      oklch(52% 0.20 25);
  --s-amber:    oklch(70% 0.14 72);
  --s-blue:     oklch(52% 0.14 245);
  --s-green:    oklch(48% 0.13 155);
}

/* Unified type voice: Kaiti SC (楷体-简) throughout.
   Calligraphic regular script matches the 九桥同步 brushstroke logo at every scale.
   Full OS fallback chain: macOS → STKaiti → Windows KaiTi → generic serif.
   Fira Code handles monospace only. */
.slidev-layout {
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
}
h1, h2, h3 {
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
}

/* Slide ground */
.slidev-layout.default {
  background-color: var(--ground);
  color: var(--ink);
  display: flex;
  flex-direction: column;
}

.slidev-layout.two-cols-header {
  background-color: var(--ground);
  color: var(--ink);
  display: flex;
  flex-direction: column;
}

/* Committed brand color: full-bleed crimson header band on all content slides.
   px-14 py-10 = 3.5rem / 2.5rem — negative margins break out of parent padding. */
.slidev-layout.default h1 {
  background-color: var(--brand);
  color: oklch(97% 0.005 30);
  padding: 0.75rem 3.5rem;
  margin: -2.5rem -3.5rem 1rem;
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  border: none;
}

.slidev-layout.two-cols-header h1 {
  background-color: var(--brand);
  color: oklch(97% 0.005 30);
  padding: 0.75rem 3.5rem;
  margin: -2.5rem -3.5rem 1rem;
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
  font-size: 1.45rem;
  font-weight: 600;
  letter-spacing: -0.01em;
  line-height: 1.3;
  border: none;
}

/* Table styles: headers carry the brand color */
.slidev-layout table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.9em;
}
.slidev-layout table thead th {
  background-color: var(--brand);
  color: oklch(97% 0.005 30);
  padding: 0.75rem 0.85rem;
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
  font-weight: 600;
  text-align: left;
}
.slidev-layout table tbody td {
  padding: 0.38rem 0.85rem;
  border-bottom: 1px solid var(--divider);
  vertical-align: top;
}
.slidev-layout table tbody tr:last-child td {
  border-bottom: none;
}
.slidev-layout table tbody tr:hover td {
  background-color: var(--brand-pale);
}

/* Keep the top-right Slidev goto/toc drawer hidden during demos. */
#slidev-goto-dialog {
  display: none !important;
}
</style>
