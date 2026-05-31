---
theme: default
title: FZS 数据同步平台 · 产品介绍
info: 金融街证券 · 九桥同步
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
mdc: true
fonts:
  sans: 'Kaiti SC'
  mono: 'Fira Code'
  provider: none
css: unocss
---

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 40% 60%">
  <div class="flex flex-col justify-center items-center gap-5 px-10" style="background: var(--brand)">
    <img src="/logo.webp" alt="九桥同步" class="h-14" style="filter: brightness(0) invert(1); opacity: 0.93" />
    <div style="width: 2rem; height: 1px; background: oklch(72% 0.04 25)"></div>
    <p class="text-center" style="color: oklch(82% 0.045 25); font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase">数据库同步专家</p>
  </div>
  <div class="flex flex-col justify-center px-14 gap-3" style="background: var(--ground)">
    <p style="color: var(--brand); font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 600">产品能力介绍</p>
    <h1 style="font-size: 2.5rem; font-weight: 700; color: var(--ink); line-height: 1.1; letter-spacing: -0.015em; background: none; padding: 0; margin: 0">FZS 数据同步平台</h1>
    <p style="font-size: 0.88rem; color: var(--muted); line-height: 1.7; margin: 0">Financial-grade Zero-lag Sync<br>金融级零延迟数据库同步</p>
    <div style="margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--divider); color: var(--muted); font-size: 0.78rem; letter-spacing: 0.04em">
      金融街证券 · 2026 年 6 月 1 日
    </div>
  </div>
</div>

---
layout: default
---

# 目录

<div class="grid grid-cols-2 gap-x-14 gap-y-4 mt-3" style="font-size: 0.92rem">
<div class="space-y-3">
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">01</span><span>什么是 FZS？</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">02</span><span>支持的数据库链路</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">03</span><span>三种同步模式</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">04</span><span>数据同步原理</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">05</span><span>管理控制台一览</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">06</span><span>链路配置 · 监控 · 告警</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">07</span><span>高可用 · 自动容灾</span></div>
</div>
<div class="space-y-3">
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">08</span><span>数据比对与校验</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">09</span><span>AI 助手</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">10</span><span>性能测试 · 信创认证</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">13</span><span>典型应用场景 · 案例分享</span></div>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; letter-spacing: 0.08em; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">金融级 CDC · 异构同步 · 可视化运维 · AI 助手一体化</div>

---
layout: default
---

# FZS 是什么？

<div class="grid grid-cols-2 gap-8">
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">产品特性</p>

- **同步性能高**：捕获分析数据库重做日志 redo，数据高效实时同步
- **范围覆盖广**：主流商业库 + 国产信创库 / 数据湖仓 / 数据中间件
- **运维成本低**：UI 简单易用直观，软件支持容器化一键部署
- **智能体加持**：AI 助理赋能用户，使用自然语言实现运维操作

</div>
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">五大组件</p>

| 组件 | 技术栈 | 职责 |
|------|------|------|
| **FZS Agent** | C | 抓取 + 装载（源/备端） |
| **FZS Web** | React / Remix | 可视化管理控制台 |
| **FZS Web Server** | C++ REST | Agent 调度网关 |
| **FZS Daemon** | Node.js | 告警监控 + 自动重启 |
| **FZS Query** | Java / Spring Boot | 数据比对与校验 |

</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">完全自主研发 · CDC 实时同步 · 异构数据库 · AI 运维</div>

---
layout: default
---

# 支持的数据库链路

<div class="grid grid-cols-2 gap-6">
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">可作为数据源（Source）</p>

通过 CDC 日志抓取，覆盖商业库与国产信创库：

<div class="text-sm mt-2">

- Oracle DB
- MySQL / MariaDB
- PostgreSQL / openGauss / GaussDB
- SQL Server / DB2 / Informix
- OceanBase（Oracle / MySQL 模式）
- 达梦 DM / 金仓 KingBase
- 崖山 YashanDB / GoldenDB
- TiDB / TDSQL（MySQL / PostgreSQL）
- 海量数据 Vastbase G100 · MogDB

</div>

<p style="font-size: 0.78rem; color: var(--muted); margin-top: 0.5rem">另支持 GBase8s · SUNDB · StarRocks · Hive 等，共 20+ 种数据源</p>

</div>
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">可作为数据目标（Sink）</p>

所有 Source 库均可作为目标；额外支持专属 Sink 目标：

<div class="text-sm mt-2">

| 目标类型 | 典型场景 |
|----------|---------|
| Apache Kafka | 事件流 / 下游消费 |
| Apache Doris / SelectDB | OLAP 分析 |
| Apache Iceberg | 湖仓一体 |
| Apache Paimon | 流批一体 |
| GaussDB DWS | 华为数仓 |
| PolarDB（MySQL/PG） | 阿里云 RDS |

</div>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">17 种数据源 · 异构全覆盖 · 所有 Source 库均可作为 Sink 目标</div>

---
layout: default
---

# 三种同步模式

<div class="grid grid-cols-3 gap-8 mt-4">

<div class="pr-6" style="border-right: 1px solid var(--divider)">
<div style="display: inline-block; background: var(--brand); color: oklch(97% 0.005 30); font-size: 1.45rem; font-weight: 700; line-height: 1; padding: 0.15rem 0.45rem; font-family: 'Kaiti SC', STKaiti, serif">01</div>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 1rem">实时模式</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.8rem">全量 + 增量</p>
<ul class="mt-3 space-y-2" style="font-size: 0.88rem">
<li>先做全量快照，完成后自动切入 CDC 增量</li>
<li>中断后断点续传，不需重做全量</li>
<li>适合：数据容灾、实时集成</li>
</ul>
</div>

<div class="pr-6" style="border-right: 1px solid var(--divider)">
<div style="display: inline-block; background: var(--brand); color: oklch(97% 0.005 30); font-size: 1.45rem; font-weight: 700; line-height: 1; padding: 0.15rem 0.45rem; font-family: 'Kaiti SC', STKaiti, serif">02</div>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 1rem">增量模式</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.8rem">仅增量</p>
<ul class="mt-3 space-y-2" style="font-size: 0.88rem">
<li>跳过全量，直接从指定位点开始抓取 CDC</li>
<li>适合：源/备端数据已对齐后的持续同步，及灾备库完成初始化后的接管</li>
</ul>
</div>

<div>
<div style="display: inline-block; background: var(--brand); color: oklch(97% 0.005 30); font-size: 1.45rem; font-weight: 700; line-height: 1; padding: 0.15rem 0.45rem; font-family: 'Kaiti SC', STKaiti, serif">03</div>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 1rem">迁移模式</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.8rem">仅全量</p>
<ul class="mt-3 space-y-2" style="font-size: 0.88rem">
<li>只做一次性全量快照，不开启增量</li>
<li>同步对象：表数据、序列、视图、存储过程、约束、权限、表空间等</li>
<li>适合：信创替换、一次性数据迁移</li>
</ul>
</div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">定时调度：所有模式均支持 cron 调度与交易日历，非交易日自动暂停</div>

<style>
.flow-diagram-wrap .mermaid {
  width: 100%;
  display: flex;
  justify-content: center;
}

.flow-diagram-wrap .mermaid svg {
  width: 100% !important;
  height: auto !important;
  max-width: 100%;
}

.flow-diagram-wrap > div:first-child {
  transform: scale(0.93);
  transform-origin: top center;
}

.flow-diagram-wrap > div:last-child {
  transform: scale(1.12);
  transform-origin: top center;
}
</style>

---
layout: default
transition: slide-left
---

# 数据装载原理剖析

<div class="flow-diagram-wrap" style="width: calc(100% - 6rem); margin: 0 3rem; display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 1rem; align-items: start">

<div style="display: flex; flex-direction: column; align-items: center;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 12, 'rankSpacing': 12, 'padding': 6, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#f8fafc','primaryTextColor':'#1f2937','primaryBorderColor':'#d1d5db','lineColor':'#6b7280','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'10px'}}}%%
flowchart TD
  A([开始]) --> B[open 文件]
  B --> C[解析增量]
  C --> D{同上条操作?}
  D -->|否| E[prepare]
  D -->|是| G
  E --> G[添加数据到 statement]
  G --> H{batch=1024\n或文件尾?}
  H -->|否| C
  H -->|是| X([进入执行段])
```

<div style="margin-top: -0.2rem; color: var(--muted); font-size: 0.72rem; text-align: center; width: 100%;">解析与组批阶段</div>

</div>

<div style="display: flex; flex-direction: column; align-items: center;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 12, 'rankSpacing': 12, 'padding': 6, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#f8fafc','primaryTextColor':'#1f2937','primaryBorderColor':'#d1d5db','lineColor':'#6b7280','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'10px'}}}%%
flowchart TD
  X([进入执行段]) --> I[execute]
  I --> J{文件结束?}
  J -->|否| C2[回解析段]
  J -->|是| K[commit + checkpoint]
  K --> L([结束])
```

<div style="margin-top: -0.2rem; color: var(--muted); font-size: 0.72rem; text-align: center; width: 100%;">执行与提交阶段</div>

</div>

</div>

<div style="position: absolute; left: 0; right: 0; bottom: 0; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600; z-index: 6">按操作类型复用 statement · 批满即执行 · 文件结束提交 checkpoint</div>

---
layout: default
transition: slide-left
---

# 数据传输流程详解

<div class="flow-diagram-wrap" style="width: calc(100% - 6rem); margin: 0 3rem; display: grid; grid-template-columns: 0.92fr 1.08fr; gap: 1rem; align-items: start">

<div style="display: flex; flex-direction: column; align-items: center;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 12, 'rankSpacing': 12, 'padding': 6, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#f8fafc','primaryTextColor':'#1f2937','primaryBorderColor':'#d1d5db','lineColor':'#6b7280','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'10px'}}}%%
flowchart TD
  A([开始]) --> B[取增量]
  B --> C{成功?}
  C -->|是| D[写缓存]
  C -->|否| F{超0.5s?}
  D --> E{缓存>4M?}
  E -->|否| B
  E -->|是| J[写磁盘]
  F -->|否| B
  F -->|是| G{缓存有数据?}
  G -->|否| B
  G -->|是| J
  J --> X([进入发送段])
```

<div style="margin-top: -0.2rem; color: var(--muted); font-size: 0.72rem; text-align: center; width: 100%;">采集/缓存/落盘阶段</div>

</div>

<div style="display: flex; flex-direction: column; align-items: center;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 12, 'rankSpacing': 12, 'padding': 6, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#f8fafc','primaryTextColor':'#1f2937','primaryBorderColor':'#d1d5db','lineColor':'#6b7280','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'10px'}}}%%
flowchart TD
  X([进入发送段]) --> K[tcp 发送]
  K --> L{收到 ACK?}
  L -->|否| K
  L -->|是| M[记完成号并删源文件]
  M --> N([结束])
```

<div style="margin-top: -0.2rem; color: var(--muted); font-size: 0.72rem; text-align: center; width: 100%;">发送/确认/清理阶段</div>

</div>

</div>

<div style="position: absolute; left: 0; right: 0; bottom: 0; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600; z-index: 6">4M 缓存阈值落盘 · 0.5s 超时兜底发送 · ACK 后删除源端文件</div>

---
layout: default
---

# 管理控制台一览

<div class="flex gap-8 mt-3 items-start">

<div class="space-y-2 text-sm" style="flex: 0 0 42%">

- **仪表盘**：链路状态总览（运行 / 暂停 / 异常 / 闲置）、CPU / 内存负载、活跃链路列表
- **数据链路**：按分组管理，导航树快速定位，每条链路独立监控面板
- **操作审计**：所有操作留痕可追溯，满足金融合规要求
- **系统设置**：用户管理、告警策略、License 与 Agent 软件管理
- **深色 / 浅色主题**：跟随系统或手动切换
- **刷新频率**：10s / 30s / 60s 可配置

</div>

<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-main.webp" alt="FZS 管理控制台" style="width: 100%; display: block" />
</div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">本地独立部署 · 无外部依赖 · 深色 / 浅色主题自适应 · 刷新频率 10s / 30s / 60s 可配</div>

---
layout: default
---

# 链路配置：五步向导

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

**① 基础信息**：选择源端节点 → 备端节点，填写链路名称与描述

**② 同步对象**：用户级 / 表级 / 列级；支持名称映射、类型映射、列过滤（WHERE 条件）及备端加列

**③ 同步策略**：选择同步模式（全量+增量 / 仅增量 / 仅全量）；配置 cron 调度与交易日历

**④ 同步配置**：全量并发数、增量批次大小、网络压缩

**⑤ 其他配置**：告警绑定、分组归属、备注信息

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-create-link.webp" alt="链路配置向导" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">同步对象粒度：用户级 / 表级 / 列级 · 名称映射 · 类型映射 · 列过滤 · 五步完成配置</div>

---
layout: default
---

# 链路实时监控

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

**增量累计**：统计 INSERT / UPDATE / DELETE / DDL 在抓取端与装载端的累计行数，两端对比可发现积压或数据丢失

**实时延时**：独立展示抓取端与装载端的秒级延时，快速定位瓶颈在网络层还是目标库

**全量统计**：显示全量阶段的迁移进度、已同步行数与 QPS

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/data-link.jpeg" alt="链路实时监控" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">抓取端 / 装载端双端延时独立监控 · 秒级定位瓶颈 · 全量 QPS 实时可见</div>

---
layout: default
---

# 告警管理

<div class="flex gap-8 mt-3 items-start">
<div style="flex: 0 0 42%">
<div class="space-y-3 text-sm">

<div class="flex gap-3 items-start">
  <span class="shrink-0" style="width: 0.6rem; height: 0.6rem; background: var(--s-red); margin-top: 0.3rem; display: inline-block"></span>
  <div><strong>报错告警</strong>：链路进入异常状态时立即触发，最长 30 秒内感知同步中断</div>
</div>

<div class="flex gap-3 items-start">
  <span class="shrink-0" style="width: 0.6rem; height: 0.6rem; background: var(--s-amber); margin-top: 0.3rem; display: inline-block"></span>
  <div><strong>延时告警</strong>：增量延时超过自定义阈值（秒）时触发，可按业务 RPO 要求自定义</div>
</div>

<div class="flex gap-3 items-start">
  <span class="shrink-0" style="width: 0.6rem; height: 0.6rem; background: var(--s-blue); margin-top: 0.3rem; display: inline-block"></span>
  <div><strong>空闲告警</strong>：源端在阈值时间内无数据变化时触发，检测业务静默或上游采集失效</div>
</div>

</div>
</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-alert-settings.webp" alt="告警管理" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">通知渠道：Webhook（企微 / 钉钉 / 飞书 / 短信平台）+ SMTP 邮件</div>

---
layout: default
---

# 高可用 · 自动容灾

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.4rem">Docker Swarm + Gluster 三节点</p>

三节点混合集群，3 台节点同时承载 Swarm 管理与业务容器，任一节点故障不影响整体调度

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin: 0.9rem 0 0.4rem">Daemon 自动重启</p>

FZS Daemon 每 **30 秒**检测所有配置了 Agent 的节点是否可达：

1. 若 Agent 进程宕机 → 自动触发重启命令
2. 若链路运行中断 → 自动恢复同步（可配置）
3. 所有恢复动作均写入系统日志，可追溯

<p style="color: var(--muted); font-size: 0.88rem; margin-top: 0.75rem; line-height: 1.6">实现链路级故障的无人值守自恢复，降低人工介入成本</p>

</div>
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">主备切换 / 灾备切换</p>

| 操作 | 说明 |
|------|------|
| **激活备端** | 将备库切换为可读写状态 |
| **主备切换** | 交换源端与备端角色，链路反向同步 |
| **灾备切换** | 一键将容灾备库提升为主库，RTO < 10 分钟 |

以上操作均可通过 Web UI 或 AI 助手完成，均需二次确认。



</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">RTO &lt; 10 分钟 · RPO ≈ 0 · 无人值守自恢复 · Web UI 一键切换 · 操作前二次确认</div>

---
layout: default
---

# 数据比对与校验

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

通过 **FZS Query**（独立 Java 服务）提供两层验证：

**快速行数比对**：并行查询源端与备端同名表的行数，秒级获取差异，即时判断是否一致

**逐行内容差异校验**：SQL 层对比实际数据，生成差异 Excel 文件供下载，精确定位不一致行；AI 助手可汇总差异摘要

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/data-verification.webp" alt="数据比对与校验" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">行数比对秒级完成 · 差异明细导出 Excel · 支持 14 种数据库</div>

---
layout: default
---

# AI 助手

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

**支持主流 LLM**：DeepSeek · 豆包 · 千问 · Kimi · 智谱 GLM · MiniMax；支持私有部署地址，适合内网隔离

- Web Server、数据节点的增删改查
- 链路的创建、启停、修复、重置、主备切换、灾备切换
- 告警阈值与通知渠道配置
- 数据比对、日志查询、坏表检查
- 导航分组管理、系统概览与日志

**边界约束**：遵守当前用户权限；高风险操作需二次确认；不能访问业务明细数据

</div>
<div style="flex: 1; display: grid; grid-template-columns: 45fr 55fr; grid-template-rows: auto auto; gap: 0.75rem">
  <div style="border: 1px solid var(--divider); overflow: hidden; grid-column: 1; grid-row: 1 / 3">
    <img src="/ai-chatbox.webp" alt="AI 对话" style="width: 100%; display: block" />
  </div>
  <div style="border: 1px solid var(--divider); overflow: hidden; grid-column: 2; grid-row: 1">
    <img src="/ai-llm-config.webp" alt="AI 模型配置" style="width: 100%; display: block" />
  </div>
  <div style="border: 1px solid var(--divider); overflow: hidden; grid-column: 2; grid-row: 2">
    <img src="/ai-llm-config-dialog.webp" alt="添加 AI 配置" style="width: 100%; display: block" />
  </div>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">支持私有部署 · 支持内网隔离 · 权限约束 · 高风险操作需二次确认</div>

---
layout: default
---

# 性能测试

<img src="/perf-test.webp" alt="性能测试报告" style="display: block; max-width: 100%; max-height: 380px; border: 1px solid var(--divider)" />

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">部署模式：中间机 · CPU 16c 海光 Dhyana · MEM 32 GB · 1–4 与竞品齐平 · 5–6 优于竞品</div>

---
layout: default
---

# 信创适配认证

<div style="display: flex; gap: 2rem; margin-top: 0.75rem; align-items: flex-start">

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-phytium.jpg" alt="飞腾兼容性证明" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">飞腾<br>产品兼容性证明</p>
  </div>

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-kingbase.jpg" alt="金仓兼容性认证" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">金仓 KingBase<br>兼容性认证证书</p>
  </div>

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-tencent.jpg" alt="腾讯云兼容性互认" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">腾讯云<br>产品兼容性互认证明</p>
  </div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">飞腾 · 金仓 KingBase · 腾讯云 TDSQL · 共 9 项信创认证（1 / 3）</div>

---
layout: default
---

# 信创适配认证

<div style="display: flex; gap: 2rem; margin-top: 0.75rem; align-items: flex-start">

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-aliyun.jpg" alt="阿里云生态集成认证" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">阿里云<br>产品生态集成认证</p>
  </div>

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-oceanbase.jpg" alt="OceanBase兼容互认" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">OceanBase<br>产品兼容互认证书</p>
  </div>

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-huawei.jpg" alt="华为技术认证" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">华为<br>HUAWEI COMPATIBLE 技术认证</p>
  </div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">阿里云 PolarDB · OceanBase · 华为 GaussDB · 共 9 项信创认证（2 / 3）</div>

---
layout: default
---

# 信创适配认证

<div style="display: flex; gap: 2rem; margin-top: 0.75rem; align-items: flex-start">

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-dameng.jpg" alt="达梦兼容互认" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">达梦数据库<br>产品兼容互认证证书</p>
  </div>

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-yashandb.jpg" alt="崖山兼容互认" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">崖山 YashanDB<br>产品兼容互认证明</p>
  </div>

  <div style="flex: 1; min-width: 0; display: flex; flex-direction: column">
    <img src="/cert-kylinsoft.jpg" alt="麒麟软件适配认证" style="width: 100%; display: block; border: 1px solid var(--divider)" />
    <p style="font-size: 0.65rem; color: var(--muted); text-align: center; margin: 0.45rem 0 0; line-height: 1.5">麒麟软件<br>适配认证</p>
  </div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">达梦 · 崖山 YashanDB · 麒麟软件 · 共 9 项信创认证（3 / 3）</div>

---
layout: default
---

# 典型应用场景

<div style="margin: 0 -3.5rem; padding: 1rem 3.5rem 1rem; background: var(--brand); color: oklch(97% 0.005 30)">
  <div class="flex items-center gap-4">
    <span style="font-size: 1.8rem; font-weight: 700; opacity: 0.45; font-family: 'Kaiti SC', STKaiti, serif; line-height: 1">01</span>
    <div>
      <h3 style="color: oklch(97% 0.005 30); font-weight: 700; font-size: 1rem; margin: 0 0 0.3rem">数据集成</h3>
      <p style="font-size: 0.88rem; line-height: 1.55; opacity: 0.9; margin: 0">CDC 变更实时写入分析库（StarRocks / Doris）及消息队列（Kafka），T+0 报表与风控模型所需数据秒级就绪，彻底消除批处理等待窗口。</p>
      <div style="display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.5rem; align-items: center">
        <span style="font-size: 0.58rem; opacity: 0.45; letter-spacing: 0.08em; margin-right: 0.15rem; flex-shrink: 0; white-space: nowrap">代表客户</span>
        <span style="font-size: 0.63rem; background: oklch(100% 0 0 / 0.13); color: oklch(97% 0.005 30); padding: 0.08rem 0.42rem; border: 1px solid oklch(100% 0 0 / 0.22); white-space: nowrap">中银国际证券</span>
        <span style="font-size: 0.63rem; background: oklch(100% 0 0 / 0.13); color: oklch(97% 0.005 30); padding: 0.08rem 0.42rem; border: 1px solid oklch(100% 0 0 / 0.22); white-space: nowrap">华安证券</span>
        <span style="font-size: 0.63rem; background: oklch(100% 0 0 / 0.13); color: oklch(97% 0.005 30); padding: 0.08rem 0.42rem; border: 1px solid oklch(100% 0 0 / 0.22); white-space: nowrap">山西证券</span>
        <span style="font-size: 0.63rem; background: oklch(100% 0 0 / 0.13); color: oklch(97% 0.005 30); padding: 0.08rem 0.42rem; border: 1px solid oklch(100% 0 0 / 0.22); white-space: nowrap">财通证券</span>
        <span style="font-size: 0.63rem; background: oklch(100% 0 0 / 0.13); color: oklch(97% 0.005 30); padding: 0.08rem 0.42rem; border: 1px solid oklch(100% 0 0 / 0.22); white-space: nowrap">万联证券</span>
        <span style="font-size: 0.63rem; background: oklch(100% 0 0 / 0.13); color: oklch(97% 0.005 30); padding: 0.08rem 0.42rem; border: 1px solid oklch(100% 0 0 / 0.22); white-space: nowrap">阜外医院/平安期货</span>
        <span style="font-size: 0.63rem; background: oklch(100% 0 0 / 0.13); color: oklch(97% 0.005 30); padding: 0.08rem 0.42rem; border: 1px solid oklch(100% 0 0 / 0.22); white-space: nowrap">金融街证券</span>
      </div>
    </div>
    <div style="margin-left: auto; text-align: right; flex-shrink: 0; padding-left: 2rem">
      <p style="font-size: 0.72rem; opacity: 0.6; margin: 0 0 0.15rem; letter-spacing: 0.06em">报表时效</p>
      <p style="font-size: 1.6rem; font-weight: 700; margin: 0; font-family: 'Kaiti SC', STKaiti, serif; line-height: 1">T+0</p>
      <p style="font-size: 0.72rem; opacity: 0.6; margin: 0.25rem 0 0; letter-spacing: 0.06em">无 ETL 批处理窗口</p>
    </div>
  </div>
</div>

<div class="grid grid-cols-3 mt-0" style="gap: 0">

<div class="p-4" style="border: 1px solid var(--divider); border-top: none; border-right: none">
<div class="flex items-baseline gap-2 mb-2">
<span style="color: var(--muted); font-size: 1rem; font-weight: 700; line-height: 1">02</span>
<h3 class="font-bold" style="color: var(--ink); font-size: 0.95rem">实时容灾</h3>
</div>
<p style="font-size: 0.83rem; line-height: 1.6; color: var(--muted)">数据实时同步至备库，增量延时 &lt; 1 秒，RPO ≈ 0；故障时 Web UI 一键切换备库，RTO &lt; 10 分钟。</p>
<div style="display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.45rem; align-items: center">
  <span style="font-size: 0.58rem; color: var(--muted); opacity: 0.6; letter-spacing: 0.08em; margin-right: 0.15rem; flex-shrink: 0; white-space: nowrap">代表客户</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">民生/盛达/晨鑫/东方汇金期货</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">中信/金瑞/国证期货</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">三立/华源期货</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">云南信托/联储证券/橡华国际</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">科蓝软件</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">山西证券</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">浙商期货</span>
</div>
</div>

<div class="p-4" style="border: 1px solid var(--divider); border-top: none; border-right: none">
<div class="flex items-baseline gap-2 mb-2">
<span style="color: var(--muted); font-size: 1rem; font-weight: 700; line-height: 1">03</span>
<h3 class="font-bold" style="color: var(--ink); font-size: 0.95rem">信创迁移</h3>
</div>
<p style="font-size: 0.83rem; line-height: 1.6; color: var(--muted)">Oracle → 达梦 / 金仓 / openGauss 全链路覆盖，全量完成后自动切入增量同步，业务切换停机窗口可缩短至分钟级。</p>
<div style="display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.45rem; align-items: center">
  <span style="font-size: 0.58rem; color: var(--muted); opacity: 0.6; letter-spacing: 0.08em; margin-right: 0.15rem; flex-shrink: 0; white-space: nowrap">代表客户</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">中信/金瑞/五矿/中盛/创元期货</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">南华期货</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">科蓝软件</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">宁证期货</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">山西证券</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">中邮证券</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">国投安信期货</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">长城基金</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">混沌天成期货</span>
</div>
</div>

<div class="p-4" style="border: 1px solid var(--divider); border-top: none">
<div class="flex items-baseline gap-2 mb-2">
<span style="color: var(--muted); font-size: 1rem; font-weight: 700; line-height: 1">04</span>
<h3 class="font-bold" style="color: var(--ink); font-size: 0.95rem">数据分发</h3>
</div>
<p style="font-size: 0.83rem; line-height: 1.6; color: var(--muted)">一次 CDC 抓取驱动多条下游链路，变更数据同时分发至报表库、缓存、消息队列，源库读压力不随消费方数量增加。</p>
<div style="display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.45rem; align-items: center">
  <span style="font-size: 0.58rem; color: var(--muted); opacity: 0.6; letter-spacing: 0.07em; margin-right: 0.15rem; flex-shrink: 0; white-space: nowrap">代表客户</span>
  <span style="font-size: 0.63rem; color: var(--ink); background: var(--brand-pale); padding: 0.08rem 0.42rem; border: 1px solid var(--divider); white-space: nowrap">中国人寿财险</span>
</div>
</div>

</div>

---
layout: default
---

# 山西证券恒生 UF 3.0 信创升级

<div style="margin-top: 0.5rem">

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.3rem">案例背景</p>
  <p style="font-size: 0.88rem; line-height: 1.55; color: var(--ink); margin: 0 0 0.8rem">恒生 UF 3.0 嫁接 GaussDB 的<strong>首个券商行业案例</strong>，核心交易系统信创迁移，业务零中断切换。</p>

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.35rem">九桥 FZS 业务链路</p>
  <div style="border: 1px solid var(--divider); margin-bottom: 0.7rem">
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; padding: 0.2rem 0.75rem">
      <span>业务系统</span><span>源端 → 目标端</span><span>同步类型</span><span>归属部门</span>
    </div>
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; padding: 0.22rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.75rem; font-weight: 600; color: var(--ink)">UF 3.0</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.7rem; color: var(--muted)">GaussDB <span style="color: var(--brand); font-weight: 700">→</span> GaussDB</span>
      <span style="font-size: 0.62rem; color: var(--muted)">实时容灾</span>
      <span style="font-size: 0.62rem; color: var(--muted)">信息技术部</span>
    </div>
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; padding: 0.22rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.75rem; font-weight: 600; color: var(--ink)">UF 3.0</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.7rem; color: var(--muted)">GaussDB <span style="color: var(--brand); font-weight: 700">→</span> Oracle</span>
      <span style="font-size: 0.62rem; color: var(--muted)">异构同步</span>
      <span style="font-size: 0.62rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; padding: 0.22rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.75rem; font-weight: 600; color: var(--ink)">集中交易</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.7rem; color: var(--muted)">Oracle 11G <span style="color: var(--brand); font-weight: 700">→</span> Oracle 11G</span>
      <span style="font-size: 0.62rem; color: var(--muted)">实时容灾</span>
      <span style="font-size: 0.62rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; padding: 0.22rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.75rem; font-weight: 600; color: var(--ink)">OA 办公</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.7rem; color: var(--muted)">达梦 V8 <span style="color: var(--brand); font-weight: 700">→</span> Oracle 11G</span>
      <span style="font-size: 0.62rem; color: var(--muted)">信创同步</span>
      <span style="font-size: 0.62rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; padding: 0.22rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.75rem; font-weight: 600; color: var(--ink)">开户系统</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.7rem; color: var(--muted)">MySQL 8.0 <span style="color: var(--brand); font-weight: 700">→</span> Oracle 11G</span>
      <span style="font-size: 0.62rem; color: var(--muted)">异构同步</span>
      <span style="font-size: 0.62rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; padding: 0.22rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.75rem; font-weight: 600; color: var(--ink)">账户系统</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.7rem; color: var(--muted)">Oracle 11G <span style="color: var(--brand); font-weight: 700">→</span> MySQL 8.0</span>
      <span style="font-size: 0.62rem; color: var(--muted)">反向回写</span>
      <span style="font-size: 0.62rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 5.5rem 1fr 5.2rem 5.5rem; padding: 0.22rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.75rem; font-weight: 600; color: var(--ink)">交易风控</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.7rem; color: var(--muted)">Oracle 11G <span style="color: var(--brand); font-weight: 700">→</span> Kafka 2.7.x</span>
      <span style="font-size: 0.62rem; color: var(--muted)">实时集成</span>
      <span style="font-size: 0.62rem; color: var(--muted)">金融科技部</span>
    </div>
  </div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 山西证券 · 恒生 UF 3.0 信创升级（1 / 3）</div>

---
layout: default
---

# 山西证券 · UF30 信创 OTC 逻辑部署

<p style="font-size: 0.72rem; color: var(--muted); margin: 0.35rem 0 0.6rem">微服务同城双活 · 数据库域名连接透明切换 · FZS 跨机房实时同步</p>
<img src="/case-shanxi-arch.webp" alt="山西证券 UF30 信创 OTC 逻辑部署图" style="display: block; max-width: 100%; max-height: 360px; border: 1px solid var(--divider)" />

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 山西证券 · 微服务同城双活 · 数据库域名连接 · 全局负载均衡（2 / 3）</div>

---
layout: default
---

# 山西证券 · 上线切换任务分解

<p style="font-size: 0.72rem; color: var(--muted); margin: 0.35rem 0 0.6rem">准备阶段 · 周五清算前 · 标黄行为九桥同步检查项（GAUSS-GAUSS / GAUSS-ORACLE）</p>
<img src="/case-shanxi-checklist.webp" alt="山西证券上线切换任务清单" style="display: block; max-width: 100%; max-height: 360px; border: 1px solid var(--divider)" />

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 山西证券 · 九桥同步检查项：GAUSS-GAUSS / GAUSS-ORACLE（3 / 3）</div>

---
layout: default
---

# 贵阳农商行信创改造

<div style="margin-top: 0.9rem">

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.4rem">案例背景</p>
  <p style="font-size: 0.9rem; line-height: 1.65; color: var(--ink); margin: 0 0 1.5rem">科蓝软件（300663）合作项目，SUNDB 数据库基于 FZS 实现<strong>两地三中心数据容灾</strong>，同组主备节点支持灾备切换。</p>

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">核心 SLA 指标</p>
  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-bottom: 1.5rem">
    <div style="border: 1px solid var(--divider); overflow: hidden">
      <div style="background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.65rem; padding: 0.3rem 0.75rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600; letter-spacing: 0.05em">数据一致性</div>
      <div style="padding: 0.65rem 0.75rem">
        <div style="font-size: 1.1rem; font-family: 'Fira Code', monospace; color: var(--ink); font-weight: 600; margin-bottom: 0.2rem">RPO = 0</div>
        <div style="font-size: 0.72rem; color: var(--muted); line-height: 1.5">零数据丢失</div>
      </div>
    </div>
    <div style="border: 1px solid var(--divider); overflow: hidden">
      <div style="background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.65rem; padding: 0.3rem 0.75rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600; letter-spacing: 0.05em">恢复时间</div>
      <div style="padding: 0.65rem 0.75rem">
        <div style="font-size: 1.1rem; font-family: 'Fira Code', monospace; color: var(--ink); font-weight: 600; margin-bottom: 0.2rem">RTO &lt; 10min</div>
        <div style="font-size: 0.72rem; color: var(--muted); line-height: 1.5">灾备节点秒级接管</div>
      </div>
    </div>
  </div>

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">方案特点</p>
  <div style="display: flex; gap: 0.75rem">
    <div style="background: var(--brand-pale); border: 1px solid var(--divider); padding: 0.45rem 1.1rem">
      <div style="font-size: 0.82rem; font-weight: 600; color: var(--ink)">同组主备切换</div>
      <div style="font-size: 0.68rem; color: var(--muted); margin-top: 0.12rem">灾备节点自动接管</div>
    </div>
    <div style="background: var(--brand-pale); border: 1px solid var(--divider); padding: 0.45rem 1.1rem">
      <div style="font-size: 0.82rem; font-weight: 600; color: var(--ink)">数据库无关</div>
      <div style="font-size: 0.68rem; color: var(--muted); margin-top: 0.12rem">方案适用于任意数据库</div>
    </div>
  </div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 贵阳农商行 · 信创改造 两地三中心容灾（1 / 2）</div>

---
layout: default
---

# 贵阳农商行 · 生产数据库信创部署方案

<p style="font-size: 0.72rem; color: var(--muted); margin: 0.35rem 0 0.6rem">主+备+灾备+管控+逃生库 · CDC 实时同步 · 鲲鹏 Arm · 麒麟 v10</p>
<img src="/case-guiyang-arch.webp" alt="贵阳农商行信创部署方案架构" style="display: block; max-width: 100%; max-height: 360px; border: 1px solid var(--divider)" />

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 贵阳农商行 · 主副中心 CDC 同步架构（2 / 2）</div>

---
layout: center
class: text-center
title: 感谢聆听
---

<div style="position: absolute; inset: 0; background: var(--brand); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2rem">
  <img src="/logo.webp" alt="九桥同步" class="h-14" style="filter: brightness(0) invert(1); opacity: 0.92" />
  <div style="width: 2.5rem; height: 1px; background: oklch(70% 0.06 25)"></div>
  <h2 style="font-size: 2rem; font-weight: 600; color: oklch(97% 0.005 30); letter-spacing: 0.02em; margin: 0">感谢聆听</h2>
  <div style="width: 2.5rem; height: 1px; background: oklch(70% 0.06 25)"></div>
  <p style="font-size: 0.82rem; color: oklch(82% 0.04 25); letter-spacing: 0.06em; margin: 0">如需 POC 方案或进一步演示，请联系九桥同步售前团队</p>
  <p style="font-size: 0.78rem; color: oklch(72% 0.035 25); margin: 0; letter-spacing: 0.04em">九桥同步 · 9bridges.cn</p>
</div>
