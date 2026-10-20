<template>
  <img
    v-if="$nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    src="/logo.webp"
    alt="九桥同步"
    class="absolute top-4 right-6 h-8 z-10 pointer-events-none"
    :style="$nav.currentLayout === 'section' ? 'filter: brightness(0) invert(1); opacity: 0.92' : ''"
  />
  <span
    v-if="$nav.currentPage !== 1 && $nav.currentPage !== $nav.total"
    class="absolute bottom-3 z-10 select-none"
    :style="{ left: '3.5rem', fontSize: '0.7rem', color: $nav.currentLayout === 'section' ? 'oklch(82% 0.04 25)' : 'oklch(65% 0.010 35)', letterSpacing: '0.04em' }"
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

/* Section divider (章节页).
   Slidev's built-in `section` layout ships a dark ground, which breaks the
   paper-white + crimson-band system used everywhere else. Restate it here:
   same ground, brand-red heading, a short rule above it. */
.slidev-layout.section {
  background-color: var(--brand) !important;
  color: oklch(97% 0.005 30) !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  padding: 0 3.5rem;
}

.slidev-layout.section h1 {
  background: none !important;
  color: oklch(97% 0.005 30) !important;
  font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif;
  font-size: 2.6rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  line-height: 1.2;
  padding: 0;
  margin: 0 0 0.9rem;
  border: none;
}

.slidev-layout.section h1::before {
  content: '';
  display: block;
  width: 3.4rem;
  height: 3px;
  background: oklch(70% 0.06 25);
  margin-bottom: 1.1rem;
}

/* Inline code.
   Slidev derives `--slidev-code-background` from the light/dark scheme; under a
   dark browser the span goes near-black while the text keeps --ink, so the text
   disappears. Pin both colors here: the deck is light-only by design. */
.slidev-layout :not(pre) > code {
  background: var(--brand-pale) !important;
  color: var(--brand-deep) !important;
  font-family: 'Fira Code', monospace;
  font-size: 0.86em;
  font-weight: 400;
  padding: 0.1em 0.35em;
  border-radius: 3px;
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
