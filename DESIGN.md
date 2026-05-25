---
name: FZS 数据同步平台 Presentation System
description: Pitch deck design system for FZS by 九桥同步 — engineered precision for enterprise financial audiences.
colors:
  brand:      "oklch(40% 0.185 25)"
  brand-deep: "oklch(30% 0.155 25)"
  brand-pale: "oklch(95.5% 0.010 25)"
  ground:     "oklch(97.5% 0.005 50)"
  ink:        "oklch(18% 0.012 30)"
  muted:      "oklch(52% 0.010 35)"
  divider:    "oklch(91% 0.007 50)"
  surface:    "oklch(99.2% 0.003 50)"
  s-red:      "oklch(52% 0.20 25)"
  s-amber:    "oklch(70% 0.14 72)"
  s-blue:     "oklch(52% 0.14 245)"
  s-green:    "oklch(48% 0.13 155)"
typography:
  display:
    fontFamily: "STSong, 'Songti SC', Georgia, serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  headline:
    fontFamily: "STSong, 'Songti SC', Georgia, serif"
    fontSize: "1.45rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  subheading:
    fontFamily: "STSong, 'Songti SC', Georgia, serif"
    fontSize: "1rem"
    fontWeight: 700
    lineHeight: 1.4
  body:
    fontFamily: "'PingFang SC', system-ui, sans-serif"
    fontSize: "0.92rem"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "'PingFang SC', system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 400
    lineHeight: 1.5
  mono:
    fontFamily: "Fira Code, monospace"
    fontSize: "0.88rem"
    fontWeight: 400
---

# Design System: FZS 数据同步平台 Presentation System

## 1. Overview

**Creative North Star: "The Instrument Panel"**

Every slide is a precision readout — not a page of content, but a calibrated display. The viewer is an expert: a financial institution's IT director or architecture lead, evaluating mission-critical infrastructure in a well-lit meeting room. The design serves that evaluation context. Nothing is decorative. Information is structured so that hierarchy is immediately legible at projection distance: what matters first is first, what supports is smaller, what is supplementary recedes. Density is not a flaw; it is expected and must be handled with composure, not chaos.

One committed color — a deep crimson, taken directly from the 九桥同步 logo's brushstroke — carries 30–60% of every slide. It is not a background wash, nor a thin accent stripe; it is a structural element used for section header bands, table headers, callout panels, and numbered anchors. The ground is warm-tinted near-white. The result is authoritative without being cold: the brand's calligraphic identity scaled up to fill a meeting room.

Typography pairs STSong (Chinese serif) for display headlines with a clean humanist sans for body text. The pairing conveys institutional weight at the headline level and maximal legibility at body level — especially critical for dense Chinese technical content.

This design explicitly rejects: SaaS startup aesthetics (no decorative gradients, no rounded pill buttons, no pastel panel backgrounds); dry government-report flatness (no black-on-white walls of text with zero visual hierarchy); generic Western enterprise grids (no IBM/SAP navy-and-gray). And above all: no **unstructured pavement of information** — the primary failure mode to design against. Every slide has a clear primary point, clear secondary support, and clear tertiary detail. If something doesn't fit that hierarchy, it is cut.

**Key Characteristics:**
- Committed single-color strategy: deep engineering blue present on 30–60% of every slide
- Serif display + humanist sans body: institutional gravitas with technical legibility
- Projection-optimized hierarchy: every slide readable at a glance from a meeting room seat
- Density with structure: technical tables, component grids, and database matrices handled with composure
- Restrained motion: slide-left transitions only, no per-element choreography
- Chinese-first typesetting: Simplified Chinese as primary script, not afterthought

## 2. Colors

A **Committed** palette: one saturated engineering-blue anchor plus a warm near-white ground and controlled neutrals. No second accent is defined at this stage.

### Primary
- **Brand Crimson** `oklch(40% 0.185 25)` / approx. `#8c1a20`: The committed color. Taken from the 九桥同步 logo brushstroke. Used for full-bleed slide header bands, table header rows, numbered section anchors, and key callout panel headings. Target: present on 30–60% of any given slide's surface area. Deep and authoritative — not aggressive red, not corporate burgundy. The brushstroke quality of the logo's hue family carried into the typographic system.
- **Brand Pale** `oklch(95.5% 0.010 25)`: A near-invisible tint of the brand hue. Used as background for the featured/primary item in grid layouts (e.g., the 实时容灾 cell). Barely visible, just enough to signal primacy.

### Neutral
- **Ground** `oklch(97.5% 0.005 50)`: The slide background. Warm near-white — the `50` hue (slightly warm/amber) prevents clinical whiteness. Never pure `#fff`.
- **Ink** `oklch(18% 0.012 30)`: Primary text. Near-black with a warm tint toward the brand hue.
- **Muted** `oklch(52% 0.010 35)`: Secondary text, captions, subtitles, supporting labels.
- **Divider** `oklch(91% 0.007 50)`: Horizontal rules, table cell borders, column separators. Almost invisible; structural only.
- **Surface** `oklch(99.2% 0.003 50)`: Slightly elevated panel background. Used for content callout panels, code blocks, info boxes.

### Status Colors (functional only — never used as brand accents)
- **Status Red** `oklch(52% 0.20 25)`: Error, sync interrupted. Distinguishable from Brand Crimson (higher chroma, brighter).
- **Status Amber** `oklch(70% 0.14 72)`: Warning, delay threshold, attention needed.
- **Status Blue** `oklch(52% 0.14 245)`: Idle alert, informational state.
- **Status Green** `oklch(48% 0.13 155)`: Sync running, healthy.

### Named Rules
**The Committed Rule.** Brand Crimson covers 30–60% of every slide. Its presence is structural, not decorative. If a slide has less than 30% coverage, add a full-width callout band or header block. If a slide has more than 60%, the content risks reading as overwhelming. Balance is measured by area, not number of elements.

**The One Accent Rule.** There is no second accent color. Status colors (green, amber, red, blue) are functional indicators only — never used for decoration, emphasis, or branding. If reaching for a second brand color, use white, Ink, or Brand Crimson at reduced opacity instead.

## 3. Typography

**Display / Heading Font:** STSong (宋体) — Chinese serif, formal institutional weight. Applied explicitly to `h1`, `h2`, `h3` via CSS `font-family` override. This family carries the crimson h1 band and all subheadings. At display sizes, the single-weight limitation is acceptable; the crisp serif stroke and narrow letterfit read as authority, not limitation. Fallback: `'Songti SC', Georgia, serif`.

**Body Font:** PingFang SC (苹方-简) — a humanist sans with 6 weight variants (Ultralight → Semibold). Set as `fonts.sans` in the Slidev frontmatter. Handles all body text, list items, table cells, labels, and UI annotations. The weight range enables genuine hierarchy within body content (Regular for body, Semibold for inline emphasis). Latin glyph quality is strong — English technical terms (Oracle, MySQL, PostgreSQL, Java, C++) render with correct proportions alongside Chinese. Fallback: `system-ui, sans-serif`.

**Mono Font:** Fira Code — for all code samples, database identifiers, technical strings, and version numbers. Configured via `fonts.mono: 'Fira Code'`.

**Character:** The pairing anchors headlines in the historical weight of printed Chinese editorial (STSong), while keeping body text maximally legible and weight-rich (PingFang SC). The visual contrast between the two scripts' texture — serif strokes at the heading, clean humanist loops in the body — signals "official seal above, precision instrument below," which is precisely the "Instrument Panel" intent.

### Hierarchy
- **Display** (STSong, weight 700, 2.5rem, tight line-height): Slide main title only (title slide). One per deck. The identity apex.
- **Headline** (STSong, weight 600, 1.45rem, in brand crimson band): Section h1 header band. One per content slide.
- **Subheading** (STSong, weight 600–700, ~1rem): Section subheadings (h2, h3). One or two per slide.
- **Body** (PingFang SC, weight 400, 0.88–0.92rem): Primary explanatory text. Dense technical lists. Max ~40–50 characters per line on a slide.
- **Label** (PingFang SC, weight 400, 0.78–0.85rem): Supporting annotations, data labels, footnote-level context. Minimum size at projection distance.
- **Mono** (Fira Code, weight 400, 0.88rem): All code snippets, database names, configuration values, CLI commands, version strings.

### Named Rules
**The Chinese-First Rule.** Typography decisions are made for Simplified Chinese glyphs, then checked for Latin fallback. Font size, line-height, and weight are calibrated to Chinese character readability at projection distance. Never choose a typeface for its Latin appeal and treat Chinese as a fallback.

**The No-Orphan Rule.** Slide text does not wrap to a single short orphan line. If a sentence wraps, either the container width is adjusted or the sentence is shortened. Single orphan words on pitch slides communicate carelessness.

## 4. Elevation

This system is **flat by default**. Slides are a contained presentation surface; shadow-based depth creates visual noise at projection scale and implies interactive affordances that don't exist. Depth is conveyed through:

1. **Color layering**: Engineering Slate Blue panels read as elevated against the Instrument White ground.
2. **Type scale contrast**: Large display text draws the eye before smaller body text.
3. **Spatial separation**: Generous white space between content blocks communicates hierarchy without shadows.
4. **Border weight**: 1px borders in Divider color for table cells; no decorative border accents wider than 1px.

Shadows are prohibited except for one case: screenshot or product UI images inset into slides may carry a very light ambient shadow (`box-shadow: 0 2px 12px rgba(0,0,0,0.10)`) to distinguish them from the slide surface. This is functional (helps the screenshot read as a distinct artifact), not decorative.

### Named Rules
**The Flat-By-Default Rule.** Shadows appear only on imported product screenshots, never on slide content elements. Any other shadow use is a design error.

## 5. Components

*Components will be specified on the next scan-mode run once implementation begins. Below are placeholder declarations for the components that will exist in this Slidev-based system.*

### Slide Header Band
A full-width colored band used for slide section titles — the primary vehicle for committing Engineering Slate Blue to 30–60% of the slide. To be specified: height, padding, font treatment, whether it bleeds to edge.

### Callout Panel
A contained rectangular block used for key claims, summary stats, or highlighted process steps. To be specified: background (committed color or near-white surface), border treatment, internal padding.

### Data Table
Technical comparison tables (database support matrices, component lists, mode comparisons). To be specified: header background, row stripe treatment, border style, text alignment, font size.

### Status Indicator
Three-state visual marker (running / warning / error) used in monitoring and alert slides. Colors: Signal Green / Amber / Red. Icon-only or icon + label. To be specified: size, border, label font.

### Code Block
Inline or block-level display of configuration values, SQL, identifiers, and version strings. Uses Fira Code. To be specified: background tint, padding, border or rule treatment.

## 6. Do's and Don'ts

### Do:
- **Do** use Engineering Slate Blue as a structural element — full-width bands, table headers, key callout panels. It earns its 30–60% coverage through area, not repetition.
- **Do** ensure every slide has a single apex: one piece of information that is visually and hierarchically first. Body text, tables, and diagrams all support it; they never compete with it.
- **Do** calibrate all font sizes for projection distance. A font that looks fine on a laptop screen may be illegible at 4 meters. Minimum effective body text is ~18–20px at slide resolution.
- **Do** use Chinese-first typesetting: set STSong and Noto Sans SC as the primary fonts, Latin as fallback. Chinese glyphs are the primary script.
- **Do** use status colors (green/amber/red) exclusively for functional indicators: sync state, alert severity, comparison result. Never use them as brand accents or decorative highlights.
- **Do** keep all borders to 1px. Table cell dividers, container boundaries, diagram frames: all 1px in Divider color.
- **Do** let white space do structural work. Slide sections separated by space read as structured. Sections crammed together read as "unstructured pavement of information."

### Don't:
- **Don't** use decorative gradients on slide backgrounds, panel fills, or text. This is financial infrastructure, not a consumer app. Any gradient is a SaaS signal and prohibited.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on callout panels or alerts. This is a design cliché: rewrite with full-border containers, background tints, or leading icons.
- **Don't** use rounded pill buttons or pill-shaped UI elements. Corner radii should be small and functional — not the rounded soft shape associated with SaaS dashboards.
- **Don't** use pastel-tinted panel backgrounds (soft blue, soft orange, soft green sections). These read as SaaS landing-page anatomy. Every panel background is either Instrument White, a Surface Panel tint, or Engineering Slate Blue.
- **Don't** create slides that are unstructured pavements of information — the named anti-reference. If a slide has no clear hierarchy (no obvious apex, no primary vs. secondary), it is not ready. Cut content until the hierarchy emerges.
- **Don't** create slides with more than three levels of typographic hierarchy active simultaneously. Display / Headline / Body is the maximum stack. Adding Title + Label + Mono on top creates noise.
- **Don't** use generic Western enterprise aesthetics: no IBM/SAP navy-and-gray grids, no heavy blue-shadowed boxes, no clip-art-style infographic icons. The design must read as a modern, technically sharp domestic platform.
- **Don't** use pure `#000000` or `#ffffff`. Every neutral is tinted toward the Engineering Slate Blue hue (even a trace of chroma is enough). Pure black and pure white read as undesigned defaults.
