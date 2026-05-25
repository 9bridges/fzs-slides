# FZS 数据同步平台 · 产品介绍 Slides

Slidev-based product pitch deck for **FZS**（Financial-grade Zero-lag Sync）by 九桥同步.  
Audience: enterprise financial institution IT directors, architects, and procurement leads.

## Quick Start

```bash
npm install
npm run dev        # dev server with hot reload → http://localhost:3030
npm run build      # static export to dist/
npm run export     # PDF export
```

## Project Structure

```
slides.md          # all slide content (single source of truth)
global-top.vue     # global Vue layout / CSS variable definitions
DESIGN.md          # design system spec (colors, typography, creative direction)
PRODUCT.md         # product context, audience, brand voice
public/            # static assets (logo, screenshot images)
.agents/           # AI agent skills (impeccable, slidev, karpathy-guidelines)
.impeccable/       # design critique history (commit to sync across machines)
```

## Slides Overview

| # | Title |
|---|-------|
| 1 | Cover — FZS 数据同步平台 |
| 2 | 目录 |
| 3 | 什么是 FZS？ |
| 4 | 典型应用场景 |
| 5 | 支持的数据库链路 |
| 6 | 三种同步模式 |
| 7 | 链路配置：五步向导 |
| 8 | 链路实时监控 |
| 9 | 告警管理 |
| 10 | 高可用 · 自动容灾 |
| 11 | 数据比对与校验 |
| 12 | AI 助手 |
| 13 | 管理控制台一览 |
| 14 | 感谢聆听 |

## Design System

Colors and typography are defined in `DESIGN.md` and applied via CSS custom properties in `global-top.vue`. Key tokens:

- `--brand` — deep crimson `oklch(40% 0.185 25)`, structural element across all slides
- `--ground` — warm near-white background
- `--ink` / `--muted` — text hierarchy
- Fonts: PingFang SC (body), Fira Code (mono), provider: none (system fonts)

## Adding Screenshots

Drop new screenshots into `public/` and reference them in `slides.md` as `/filename.png`.
