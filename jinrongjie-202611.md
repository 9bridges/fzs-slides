---
title: 金融街证券 · FZS 产品介绍与 OceanBase 同步原理
titleTemplate: '%s - 九桥同步'
info: 金融街证券 · 恒生 UF 3.0 信创升级（OceanBase）· FZS 产品介绍与同步原理
theme: default
highlighter: shiki
lineNumbers: false
drawings:
  persist: false
transition: slide-left
colorSchema: light
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
    <p style="color: var(--brand); font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 600">九桥同步（FZS）· 数据库实时复制平台</p>
    <h1 style="font-size: 2.3rem; font-weight: 700; color: var(--ink); line-height: 1.18; letter-spacing: -0.015em; background: none; padding: 0; margin: 0">FZS 产品介绍<br/>与 OceanBase 同步原理</h1>
    <p style="font-size: 0.88rem; color: var(--muted); line-height: 1.7; margin: 0">产品能力 · 同步原理 · UF3.0 升级与灾备方案</p>
    <div style="margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--divider); color: var(--muted); font-size: 0.78rem; letter-spacing: 0.04em">
      金融街证券 · 2026 年 11 月
    </div>
  </div>
</div>
---
layout: default
---

# 目录

<div class="grid grid-cols-2 gap-x-14 gap-y-3 mt-2" style="font-size: 0.9rem">
<div class="space-y-2.5">
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">01</span><span>产品能力：FZS 是什么 · 支持的链路 · 三种同步模式</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">02</span><span>平台能力：控制台 · 链路配置 · 监控 · 告警</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">03</span><span>可靠性：高可用 · 数据比对 · AI 助手 · 信创认证</span></div>
</div>
<div class="space-y-2.5">
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">04</span><span>案例：山西证券 UF3.0 · 贵阳农商行信创</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">05</span><span><strong>OceanBase 同步原理</strong>（重点）：全量 · 增量 CDC · 无缝衔接</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">06</span><span><strong>UF3.0 升级方案</strong>：范围与起点 · 信创库侧拓扑 · 四个动作 · 校验与三场景</span></div>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">产品能力先行 · 原理讲透 · 方案落到 UF3.0</div>

---
layout: default
---

# FZS 是什么？

<div class="grid grid-cols-2 gap-8">
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">产品特性</p>

- **同步性能高**：捕获分析数据库重做日志 redo，数据高效实时同步
- **范围覆盖广**：主流商业库 + 国产信创库 / 数据湖仓 / 数据中间件
- **运维成本低**：无需 CLI，Web UI 简洁高效直观易用
- **智能体加持**：AI 助理赋能用户，使用自然语言实现运维操作

</div>
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">五大组件</p>

<style>
.comp-tb { table-layout: fixed; }
.comp-tb th, .comp-tb td { padding: 0.34rem 0.6rem !important; }
.comp-tb td:nth-child(1), .comp-tb td:nth-child(2), .comp-tb th:nth-child(1), .comp-tb th:nth-child(2) { white-space: nowrap; }
</style>

<table class="comp-tb">
<thead><tr><th style="width: 24%">组件</th><th style="width: 34%">技术栈</th><th>职责</th></tr></thead>
<tbody>
<tr><td><strong>Agent</strong></td><td>C</td><td>抓取 + 装载（源/目标端）</td></tr>
<tr><td><strong>Web</strong></td><td>React / Remix</td><td>可视化管理控制台</td></tr>
<tr><td><strong>Web Server</strong></td><td>C++ REST</td><td>Agent 调度网关</td></tr>
<tr><td><strong>Daemon</strong></td><td>Node.js</td><td>告警监控 + 自动重启</td></tr>
<tr><td><strong>Query</strong></td><td>Java / Spring Boot</td><td>数据比对与校验</td></tr>
</tbody>
</table>

</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">完全自主研发 · CDC 实时同步 · 异构数据库 · AI 运维</div>
---
layout: default
---

# 支持的数据库链路

<div class="grid grid-cols-2 gap-6">
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.22rem">数据容灾模块</p>
<p style="font-size: 0.72rem; color: var(--muted); margin: 0 0 0.55rem; letter-spacing: 0.03em">OLTP 数据库之间 · 可作为数据源（Source）</p>

<div class="text-sm mt-2">

- Oracle DB
- MySQL / MariaDB
- PostgreSQL / openGauss / GaussDB
- SQL Server / DB2 / Informix
- **OceanBase（Oracle / MySQL 模式）**
- 达梦 DM / 金仓 KingBase
- 崖山 YashanDB / GoldenDB
- TiDB / TDSQL（MySQL / PostgreSQL）
- 海量数据 Vastbase G100 · MogDB

</div>

<p style="font-size: 0.78rem; color: var(--muted); margin-top: 0.5rem">另支持 GBase8s · SUNDB · StarRocks · Hive 等，共 24 类源端、35 类目标端</p>

</div>
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.22rem">数据集成模块</p>
<p style="font-size: 0.72rem; color: var(--muted); margin: 0 0 0.55rem; letter-spacing: 0.03em">面向湖仓与消息队列 · 可作为数据目标（Sink）</p>

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

<div class="mt-3 px-4 py-2.5" style="background: var(--brand-pale); font-size: 0.82rem; color: var(--muted)">
<strong style="color: var(--brand)">模块分工：</strong>OLTP 库之间的实时同步（同构 / 异构）归 <strong>数据容灾</strong>；业务库向消息队列与湖仓的实时投递归 <strong>数据集成</strong>。
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">24 类源端 · 35 类目标端 · OceanBase 双向支持 · 异构全覆盖</div>
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
<li>适合：源/目标端数据已对齐后的持续同步，及灾备库完成全量后的接管</li>
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

**① 基础信息**：选择源端节点 → 目标端节点

**② 同步对象**：用户级 / 表级 / 列级；支持名称映射、类型映射、列过滤（WHERE 条件）及目标端加列

**③ 同步策略**：选择运行模式（实时 / 增量 / 迁移）；配置 cron 定时与交易日历

**④ 同步配置**：全量并发数（默认 8）、数据传输端口、是否同步 DDL、增量启动时间点、抽取限速

**⑤ 其它配置**：源端 / 目标端 Agent 高级参数（export / load / recv 等），按目标端预填默认值

<p style="font-size:.72rem; color:var(--muted); margin-top:.5rem">注：控制台界面中的“备端”即本文所称的目标端，仅为界面用词，不影响配置含义。</p>

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-create-link.webp" alt="链路配置向导" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">同步对象粒度：用户级 / 表级 / 列级 · 名称映射 · 类型映射 · 列过滤 · 五步完成配置</div>
---
layout: default
---

# 操作对照：老 Web 界面 → 新 Web 控制台

<p style="font-size: 0.82rem; color: var(--muted); margin: 0.2rem 0 0.9rem">同一套同步内核，操作层重构 —— 原来在系统配置、map、conf 文件、进程监控之间来回切换，现在收敛到对象与向导里</p>

<style>
.cmp-tb th, .cmp-tb td { padding: 0.62rem 0.9rem !important; }
</style>

<table class="cmp-tb" style="font-size: 0.96rem">
<thead><tr><th style="width: 46%">老 Web 界面</th><th>新 Web 控制台</th></tr></thead>
<tbody>
<tr><td>系统配置里填<strong>源端 / 目标端 IP、端口、源端 id</strong></td><td>录一次<strong>数据节点</strong>，多条链路复用，无需重复填写连接信息</td></tr>
<tr><td>配 <strong>map</strong>，再到「配置文件信息」里核对 conf</td><td><strong>同步对象</strong>页直接勾选用户 / 表 / 列，conf 由系统生成</td></tr>
<tr><td>在系统级<strong>参数配置</strong>页调导出、装载参数</td><td>收敛到单条链路第 5 步<strong>其它配置</strong>，按目标端预填默认值</td></tr>
<tr><td>到<strong>进程监控</strong>页逐个启动、停止、修复</td><td>链路<strong>启停 / 修复 / 重置</strong>一个入口，异常还能自愈与组内漂移</td></tr>
</tbody>
</table>

<div class="mt-6 px-4 py-3" style="background: var(--brand-pale); font-size: 0.88rem; color: var(--muted)">
<strong style="color: var(--brand)">参数一个没少：</strong>原来系统级的参数在新界面里都能对上——导出、装载、接收、分配、监控五类前缀参数，从「系统级」下沉到「单条链路」，并带默认值；节点与链路均可复制，无需逐条重复配置。
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">概念对应：源端 / 目标端 → 数据节点 · map → 同步对象 · conf → 链路配置 · 进程 → 链路状态</div>
---
layout: default
---

# 链路实时监控

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

**增量累计**：统计 INSERT / UPDATE / DELETE / DDL 在源端与目标端的累计行数，两端对比可发现积压或数据丢失

**实时延时**：独立展示源端与目标端的秒级延时，快速定位瓶颈在网络层还是目标端

**全量统计**：显示全量阶段的迁移进度、已同步行数与 QPS

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/data-link.jpeg" alt="链路实时监控" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">源端 / 目标端双端延时独立监控 · 秒级定位瓶颈 · 全量 QPS 实时可见</div>
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

# 高可用 · 多节点自愈与调度

<div class="grid grid-cols-3 gap-7 mt-2" style="font-size: 0.86rem">

<div class="pr-5" style="border-right: 1px solid var(--divider)">
<div style="display: inline-block; background: var(--brand); color: oklch(97% 0.005 30); font-size: 1.3rem; font-weight: 700; line-height: 1; padding: 0.12rem 0.42rem; font-family: 'Kaiti SC', STKaiti, serif">01</div>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 0.98rem">进程与集群自愈</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.78rem">无人值守</p>
<ul class="mt-2 space-y-1.5" style="font-size: 0.84rem">
<li><strong>Daemon 每 30 秒</strong>巡检全部节点</li>
<li>Agent 进程宕机 → 自动重启；链路中断 → 自动恢复同步</li>
<li>三节点集群部署，单节点故障不影响整体调度</li>
<li>恢复动作全部写入系统日志，可追溯</li>
</ul>
</div>

<div class="pr-5" style="border-right: 1px solid var(--divider)">
<div style="display: inline-block; background: var(--brand); color: oklch(97% 0.005 30); font-size: 1.3rem; font-weight: 700; line-height: 1; padding: 0.12rem 0.42rem; font-family: 'Kaiti SC', STKaiti, serif">02</div>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 0.98rem">链路漂移与负载均衡</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.78rem">组内选址 · 按角色均衡</p>
<ul class="mt-2 space-y-1.5" style="font-size: 0.84rem">
<li>数据节点绑定<strong>节点组</strong>，链路在组内多台之间选址分担，不绑死单机</li>
<li>一条链路的<strong>源端与目标端各算一个角色</strong>，默认落在同一台 WebServer 上</li>
<li>选址排序：健康且 CPU / 内存未超 <strong>90%</strong> → 承担角色最少 → 资源压力最低</li>
<li>节点不可达 → 组内排除故障成员，在新节点重建并<strong>从位点续跑</strong></li>
</ul>
</div>

<div>
<div style="display: inline-block; background: var(--brand); color: oklch(97% 0.005 30); font-size: 1.3rem; font-weight: 700; line-height: 1; padding: 0.12rem 0.42rem; font-family: 'Kaiti SC', STKaiti, serif">03</div>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 0.98rem">一键切换</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.78rem">主备与灾备</p>
<ul class="mt-2 space-y-1.5" style="font-size: 0.84rem">
<li><strong>主备切换</strong>：交换源端与目标端角色，链路反向同步</li>
<li><strong>灾备切换</strong>：备库提升为主库，RTO &lt; 10 分钟</li>
<li>Web UI 或 AI 助手发起，均需二次确认</li>
</ul>
</div>

</div>

<div class="mt-4 px-4 py-2.5" style="background: var(--brand-pale); font-size: 0.82rem; color: var(--muted)">
<strong style="color: var(--brand)">对 OceanBase 割接的意义：</strong>追平阶段多条链路并行时，按角色数与 CPU / 内存压力分摊到组内多台，不会全压在一台上，也不因单节点宕机而中断；割接后若新库异常，可用同一套反向链路切回原库。
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">RTO &lt; 10 分钟 · RPO ≈ 0 · 进程自愈 + 组内负载均衡 + 链路自漂移 · 一键切换</div>
---
layout: default
---

# 数据比对与校验

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

通过 **FZS Query**（独立 Java 服务）提供两层验证：

**快速行数比对**：并行查询源端与目标端同名表行数，秒级获取差异

**逐行内容差异校验**：SQL 层逐行对比，差异导出 Excel，AI 助手可汇总摘要

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/data-verification.webp" alt="数据比对与校验" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">行数比对秒级完成 · 差异明细导出 Excel</div>
---
layout: default
---

# AI 助手

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

**支持主流 LLM**：DeepSeek · 豆包 · 千问 · Kimi · 智谱 GLM · MiniMax；支持私有部署地址，适合内网隔离

- **平台对象**：Web Server / 数据节点 / 链路的增删改查，含启停、修复、重置、复制
- **运行操作**：主备与灾备切换、数据比对、坏表检查、日志查询
- **调度**：自然语言排定时 —— 「今晚 18 点停止追平」「5 分钟后启动」
- **巡检**：一键生成 Word 巡检报告（拓扑 / 指标 / 比对结论）
- **配置**：告警阈值与通知渠道、导航分组、系统概览

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

# 数据容灾

- **需求特点：**
  - 数据零丢失：RPO = 0
  - 恢复窗口短：RTO 分钟级别
  - 支持灾备切换
- **所属案例：**
  - 民生期货 / 盛达期货 / 晨鑫期货 / 东方汇金期货 / 东吴基金：Oracle -> Oracle 异地灾备
  - 中信期货 / 金瑞期货 / 国证期货：DM -> DM 数据容灾
  - 三立期货 / 华源期货：DM -> Oracle 数据容灾
  - 云南信托 / 联储证券 / 横华国际：MySQL -> MySQL 异地灾备
  - 科蓝软件：SUNDB -> SUNDB 两地三中心
  - 山西证券：GaussDB -> GaussDB 同城灾备, TA6 基金登记过户 OB Oracle -> OB Oracle 同构灾备
  - 浙商期货：DM -> DM, OB MySQL -> OB MySQL 数据容灾
  - 长江证券：DM -> DM 数据容灾
  - 川财证券：DM -> MySQL 数据容灾

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">典型应用场景（1 / 4）</div>
---
layout: default
---

# 数据集成

<style>
.slidev-layout li { line-height: 1.9; }
</style>

- **需求特点：**
  - 从业务库中获取实时数据并发送至消息队列或数据湖仓，下游自行消费
  - 实时性要求秒级（< 10 sec）
- **所属案例：**
  - 金融街证券：OceanBase / DM -> SelectDB
  - 山西证券：
    - Oracle / MySQL -> Kafka
    - GaussDB -> Oracle / Doris
  - 财通证券：Oracle / MySQL / OceanBase -> Kafka / Doris
  - 中银国际证券：Oracle / GaussDB -> Kafka
  - 华安证券：TDSQL -> Kafka
  - 万联证券 / 阜外医院 / 平安期货 / 创元期货：Oracle -> Kafka

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">典型应用场景（2 / 4）</div>
---
layout: default
---

# 数据迁移

- **需求特点：**
  - 信创需求占大多数，旧业务系统数据迁移至信创库
  - 在指定割接窗口之内完成全量数据迁移，对数据迁移性能要求高
  - 采用低风险的信创 + 非信创环境双轨运行机制，对数据同步稳定性要求高
- **所属案例：**
  - 中信期货 / 金瑞期货 / 五矿期货 / 中盛期货 / 创元期货 / 宁证期货 / 国金期货 / 大地期货 / 金鹏期货：Oracle -> DM
  - 南华期货：Oracle -> TDSQL
  - 科蓝软件：Oracle -> SUNDB
  - 山西证券 / 中邮证券：Oracle -> GaussDB
  - 国投安信期货：MySQL -> MySQL
  - 长城基金：Oracle -> OceanBase Oracle
  - 混沌天成期货：Oracle -> 海量 Vastbase

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">典型应用场景（3 / 4）</div>
---
layout: default
---

# 数据分发

- **需求特点：**
  - 从主业务系统将数据分发到其他业务系统，供下游消费
  - 全量结束后需持续同步增量数据
  - 稳定性要求高，下游数据随时可用
- **所属案例：**
  - 中国人寿财险：Oracle -> TiDB
  - 中国人寿财险：TiDB -> DM

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">典型应用场景（4 / 4）</div>
---
layout: default
---

# 山西证券恒生 UF 3.0 信创升级

<div style="margin-top: 0.5rem">

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.3rem">案例背景</p>
  <p style="font-size: 0.88rem; line-height: 1.55; color: var(--ink); margin: 0 0 0.8rem">恒生 UF 3.0 嫁接 GaussDB 的<strong>首个券商行业案例</strong>，核心交易系统信创迁移，业务零中断切换。</p>

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.35rem">九桥 FZS 业务链路</p>
        <div style="border: 1px solid var(--divider); margin-bottom: 0.7rem">
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.6rem; font-weight: 700; letter-spacing: 0.1em; padding: 0.2rem 0.75rem">
      <span>业务系统</span><span>源端 → 目标端</span><span>同步类型</span><span>归属部门</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">UF 3.0</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">GaussDB <span style="color: var(--brand); font-weight: 700">→</span> GaussDB</span>
      <span style="font-size: 0.6rem; color: var(--muted)">实时灾备</span>
      <span style="font-size: 0.6rem; color: var(--muted)">信息技术部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">OTC 账户 / 多金</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">GaussDB <span style="color: var(--brand); font-weight: 700">→</span> Oracle（当前库）</span>
      <span style="font-size: 0.6rem; color: var(--muted)">异构同步</span>
      <span style="font-size: 0.6rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">OTC 账户 / 多金</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">GaussDB <span style="color: var(--brand); font-weight: 700">→</span> Oracle（历史库）</span>
      <span style="font-size: 0.6rem; color: var(--muted)">异构同步</span>
      <span style="font-size: 0.6rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">TA6 基金登记过户</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">OB Oracle <span style="color: var(--brand); font-weight: 700">→</span> OB Oracle</span>
      <span style="font-size: 0.6rem; color: var(--muted)">同构灾备</span>
      <span style="font-size: 0.6rem; color: var(--muted)">信息技术部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">新 UF3.0 · SEE 平台</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">MySQL <span style="color: var(--brand); font-weight: 700">→</span> MySQL</span>
      <span style="font-size: 0.6rem; color: var(--muted)">同构同步</span>
      <span style="font-size: 0.6rem; color: var(--muted)">信息技术部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">集中交易</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">Oracle 11G <span style="color: var(--brand); font-weight: 700">→</span> Oracle 11G</span>
      <span style="font-size: 0.6rem; color: var(--muted)">实时灾备</span>
      <span style="font-size: 0.6rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">OA 办公</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">达梦 V8 <span style="color: var(--brand); font-weight: 700">→</span> Oracle 11G</span>
      <span style="font-size: 0.6rem; color: var(--muted)">信创同步</span>
      <span style="font-size: 0.6rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">开户系统</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">MySQL 8.0 <span style="color: var(--brand); font-weight: 700">→</span> Oracle 11G</span>
      <span style="font-size: 0.6rem; color: var(--muted)">异构同步</span>
      <span style="font-size: 0.6rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">账户系统</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">Oracle 11G <span style="color: var(--brand); font-weight: 700">→</span> MySQL 8.0</span>
      <span style="font-size: 0.6rem; color: var(--muted)">反向回写</span>
      <span style="font-size: 0.6rem; color: var(--muted)">金融科技部</span>
    </div>
    <div style="display: grid; grid-template-columns: 7rem 1fr 5.2rem 5.5rem; padding: 0.15rem 0.75rem; border-top: 1px solid var(--divider); align-items: center; background: var(--brand-pale)">
      <span style="font-size: 0.7rem; font-weight: 600; color: var(--ink)">交易风控</span>
      <span style="font-family: 'Fira Code', monospace; font-size: 0.66rem; color: var(--muted)">Oracle 11G <span style="color: var(--brand); font-weight: 700">→</span> Kafka 2.7.x</span>
      <span style="font-size: 0.6rem; color: var(--muted)">实时集成</span>
      <span style="font-size: 0.6rem; color: var(--muted)">金融科技部</span>
    </div>
  </div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 山西证券 · 恒生 UF 3.0 信创升级（1 / 3）</div>

---

# 山西证券 · 部署拓扑

<div style="position:relative; border:1px dashed var(--border); padding:1.15rem .7rem .6rem; background:#faf8f6">
  <span style="position:absolute; top:.35rem; left:.8rem; font-size:.64rem; letter-spacing:.12em; color:var(--muted); font-weight:700">同机房（生产机房）</span>
  <div style="display:flex; align-items:center; gap:.55rem">
    <div style="flex:1; border:1px solid var(--divider); background:var(--surface); padding:.5rem .6rem">
      <p style="font-size:.7rem; font-weight:700; margin:0 0 .25rem; color:var(--brand); letter-spacing:.06em">源库</p>
      <div style="font-size:.72rem; line-height:1.85; color:var(--fg)">GaussDB · UF 3.0 主<br/>OB Oracle · TA6<br/>MySQL · SEE</div>
    </div>
    <div style="text-align:center; color:var(--brand); font-size:.64rem; line-height:1.4; min-width:2.6rem">读日志<br/><span style="font-size:1.05rem; font-weight:700">→</span></div>
    <div style="flex:1.2; border:1px solid var(--brand); background:var(--surface); padding:.5rem .6rem">
      <p style="font-size:.7rem; font-weight:700; margin:0 0 .25rem; color:var(--brand); letter-spacing:.06em">中间机（1 台）</p>
      <div style="font-size:.72rem; line-height:1.85; color:var(--fg)">Web Server ×1<br/>源端 Agent<br/>目标端 Agent</div>
    </div>
    <div style="text-align:center; color:var(--brand); font-size:.64rem; line-height:1.4; min-width:2.6rem">写入<br/><span style="font-size:1.05rem; font-weight:700">→</span></div>
    <div style="flex:1; border:1px solid var(--divider); background:var(--surface); padding:.5rem .6rem">
      <p style="font-size:.7rem; font-weight:700; margin:0 0 .25rem; color:var(--brand); letter-spacing:.06em">目标库</p>
      <div style="font-size:.72rem; line-height:1.85; color:var(--fg)">GaussDB · UF 3.0 备<br/>Oracle · 当前 / 历史<br/>OB Oracle · TA6 备<br/>MySQL · SEE 备</div>
    </div>
  </div>
</div>

<div style="display:flex; gap:.4rem; margin:.5rem 0 .55rem; flex-wrap:wrap">
  <span style="font-size:.66rem; padding:.18rem .5rem; border:1px solid var(--divider); background:var(--surface); color:var(--muted)">UF 3.0：GaussDB → GaussDB</span>
  <span style="font-size:.66rem; padding:.18rem .5rem; border:1px solid var(--divider); background:var(--surface); color:var(--muted)">OTC 账户 / 多金：GaussDB → Oracle（当前库）</span>
  <span style="font-size:.66rem; padding:.18rem .5rem; border:1px solid var(--divider); background:var(--surface); color:var(--muted)">OTC 账户 / 多金：GaussDB → Oracle（历史库）</span>
  <span style="font-size:.66rem; padding:.18rem .5rem; border:1px solid var(--divider); background:var(--surface); color:var(--muted)">TA6：OB Oracle → OB Oracle</span>
  <span style="font-size:.66rem; padding:.18rem .5rem; border:1px solid var(--divider); background:var(--surface); color:var(--muted)">新 UF3.0 · SEE：MySQL → MySQL</span>
</div>

<div class="grid grid-cols-4 gap-3 mt-1">
  <div style="border-top:2px solid var(--brand); padding-top:.45rem">
    <p style="font-size:.82rem; font-weight:600; margin:0 0 .15rem">单 Web Server</p>
    <p style="font-size:.74rem; color:var(--muted); line-height:1.55; margin:0">只部署在中间机，负责建链、监控与告警</p>
  </div>
  <div style="border-top:2px solid var(--brand); padding-top:.45rem">
    <p style="font-size:.82rem; font-weight:600; margin:0 0 .15rem">Agent 源 / 备同机</p>
    <p style="font-size:.74rem; color:var(--muted); line-height:1.55; margin:0">源端与目标端 Agent 都在这台中间机上</p>
  </div>
  <div style="border-top:2px solid var(--brand); padding-top:.45rem">
    <p style="font-size:.82rem; font-weight:600; margin:0 0 .15rem">全部同机房</p>
    <p style="font-size:.74rem; color:var(--muted); line-height:1.55; margin:0">5 条链路不出机房，不占跨机房专线</p>
  </div>
  <div style="border-top:2px solid var(--brand); padding-top:.45rem">
    <p style="font-size:.82rem; font-weight:600; margin:0 0 .15rem">与库分离</p>
    <p style="font-size:.74rem; color:var(--muted); line-height:1.55; margin:0">Agent 不落在数据库主机，负载与库互不影响</p>
  </div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 山西证券 · 部署拓扑（2 / 3）</div>

---
layout: default
---

# 山西证券 · UF30 信创 OTC 逻辑部署

<p style="font-size: 0.72rem; color: var(--muted); margin: 0.35rem 0 0.6rem">微服务同城双活 · 数据库域名连接透明切换 · FZS 跨机房实时同步</p>
<img src="/case-shanxi-arch.webp" alt="山西证券 UF30 信创 OTC 逻辑部署图" style="display: block; max-width: 100%; max-height: 360px; border: 1px solid var(--divider)" />

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 山西证券 · 微服务同城双活 · 数据库域名连接 · 全局负载均衡（3 / 3）</div>
---
layout: default
---

# 山西证券 · 信创数据库灾备规划

<style>
.sx-plan { font-size: 0.82rem !important; }
.sx-plan th { padding: 0.34rem 0.6rem !important; font-size: 0.84rem !important; }
.sx-plan td { padding: 0.34rem 0.6rem !important; line-height: 1.35 !important; }
</style>

<p style="font-size: 0.82rem; color: var(--muted); margin: 0.5rem 0 0.7rem">信创替换涉及的库间同步需求 · 全部为<strong>全库、全量 + 增量、单向</strong>同步</p>

<table class="sx-plan">
<thead><tr><th style="width: 8rem">系统</th><th>源端 → 目标端</th></tr></thead>
<tbody>
<tr><td>TA6</td><td><span style="font-family: 'Fira Code', monospace">OceanBase → OceanBase</span></td></tr>
<tr><td>宽途交易</td><td><span style="font-family: 'Fira Code', monospace">OceanBase → OceanBase</span></td></tr>
<tr><td>网上营业厅</td><td><span style="font-family: 'Fira Code', monospace">OceanBase → OceanBase　/　TDSQL → TDSQL</span></td></tr>
<tr><td>UF30</td><td><span style="font-family: 'Fira Code', monospace">MySQL → MySQL</span></td></tr>
<tr><td>衡泰</td><td><span style="font-family: 'Fira Code', monospace">TDSQL-PG ↔ Oracle（两条单向）</span></td></tr>
<tr><td>新意资金结算</td><td><span style="font-family: 'Fira Code', monospace">OceanBase / GaussDB 同构</span></td></tr>
<tr><td>恒生 PB</td><td><span style="font-family: 'Fira Code', monospace">OceanBase / GoldenDB / GaussDB 同构</span></td></tr>
<tr><td>自营 O32</td><td><span style="font-family: 'Fira Code', monospace">OceanBase / GaussDB / TDSQL 同构</span></td></tr>
<tr><td>股权激励</td><td><span style="font-family: 'Fira Code', monospace">OceanBase / GaussDB / TDSQL 同构</span></td></tr>
<tr><td>OTC 估值</td><td><span style="font-family: 'Fira Code', monospace">OceanBase / GaussDB / TDSQL 同构</span></td></tr>
</tbody>
</table>

<p style="font-size: 0.84rem; color: var(--muted); margin: 0.7rem 0 0"><strong style="color: var(--brand)">10 个系统 · 12 条链路：</strong>覆盖 OceanBase / GaussDB / TDSQL / GoldenDB / MySQL　·　同构替换与异构回写并存　·　同一套 FZS 统一纳管</p>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 山西证券 · 信创数据库替换规划</div>
---
layout: default
---

# 贵阳农商行信创改造

<div style="margin-top: 0.9rem">

  <p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.4rem">案例背景</p>
  <p style="font-size: 0.9rem; line-height: 1.65; color: var(--ink); margin: 0 0 1.5rem">科蓝软件（300663）合作项目，SUNDB 数据库基于 FZS 实现<strong>两地三中心灾备</strong>，同组主备节点支持灾备切换。</p>

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

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 贵阳农商行 · 信创改造 两地三中心灾备（1 / 2）</div>
---
layout: default
---

# 贵阳农商行 · 生产数据库信创部署方案

<p style="font-size: 0.72rem; color: var(--muted); margin: 0.35rem 0 0.6rem">主+备+灾备+管控+逃生库 · CDC 实时同步 · 鲲鹏 Arm · 麒麟 v10</p>
<img src="/case-guiyang-arch.webp" alt="贵阳农商行信创部署方案架构" style="display: block; max-width: 100%; max-height: 360px; border: 1px solid var(--divider)" />

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">案例分享 · 贵阳农商行 · 主副中心 CDC 同步架构（2 / 2）</div>
---
layout: section
---

# OceanBase 同步原理

<div style="color: oklch(86% 0.025 30); margin-top: 1rem; font-size: 0.95rem; letter-spacing: 0.02em">全量迁移 · 增量追平 · 两者如何无缝衔接</div>
---
layout: default
---

# 为什么是 FZS：正向投递与反向补数

<div class="grid grid-cols-2 gap-10 mt-3">
<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">正向：信创库 → 温备库 / 采集库 / 异地灾备</p>
<ul class="text-sm mt-2 space-y-2">
<li>以<strong>信创库（OceanBase）为源</strong>，日志级增量捕获</li>
<li>一源三目标：温备库、采集库、异地灾备</li>
<li>源端只读日志，不侵入业务表</li>
</ul>
</div>
<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">反向：接管后 灾备 → 采集库</p>
<ul class="text-sm mt-2 space-y-2">
<li>灾备接管生产后，由接管端向采集库<strong>反向补数</strong>（C1）</li>
<li>采集库转为被同步端，下游报表与报送不断供</li>
<li>两端同为 OceanBase 时类型一致，无需结构转换</li>
</ul>
</div>
</div>

<div class="mt-4">
<table>
<thead><tr><th>关键事实</th><th>说明</th></tr></thead>
<tbody>
<tr><td>OceanBase 适配认证</td><td>已取得 OceanBase 产品兼容互认</td></tr>
<tr><td>信创底座</td><td>鲲鹏 / 飞腾 / 海光 / 龙芯 + 麒麟 / UOS，全栈可运行</td></tr>
<tr><td>部署形态</td><td>支持中间机部署：Agent 不落在数据库主机</td></tr>
</tbody>
</table>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">同一套链路覆盖正向投递与反向补数，切换后无需重建</div>

---
layout: default
---

# 原理一：全量同步

<div class="flow-diagram-wrap ob-fig" style="width: calc(100% - 5rem); margin: 0.4rem 2.5rem 0;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 22, 'rankSpacing': 30, 'padding': 8, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#fbf7f6','primaryTextColor':'#1c1917','primaryBorderColor':'#d6cfcb','lineColor':'#b23a2c','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'14px'}}}%%
flowchart LR
  A([开始]) --> B["锚定一致性快照点<br/>记录系统变更号"]
  B --> C["按表 / 分区拆分任务<br/>大表单独并发"]
  C --> D["一致读取数据<br/>多进程并行"]
  D --> E["按同构结构建表<br/>在 OceanBase 装载"]
  E --> F([全量完成<br/>增量从同一变更号接续])
```

</div>

<div class="grid grid-cols-2 gap-8 mt-4">

<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.6rem">工程要点</p>
<ul style="font-size: 0.82rem; line-height: 1.6" class="space-y-1">
<li><strong>快照点不阻塞业务写入</strong>：一致性读取点以时间点标识，业务无感</li>
<li><strong>结构与数据一并完成</strong>：建表、分区、索引、约束与数据装载同一过程</li>
<li><strong>可中断、可重做</strong>：支持重置后重做与单表重做，不必整链路推倒</li>
<li><strong>可限速</strong>：按带宽与目标端写入能力限制速率，避免挤占专线</li>
</ul>
</div>

<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.6rem">为什么先锚定时间点</p>
<p style="font-size: 0.88rem; line-height: 1.75; color: var(--muted)">它与后面的增量是同一个坐标原点：全量读取的是 时间 = N 的一致快照，增量从 N 起捕获，两段覆盖同一时间轴，中间没有空档。</p>
<div class="mt-3 px-4 py-3" style="background: var(--brand-pale); font-size: 0.86rem">
<strong>简言之：</strong>全量负责存量搬迁，增量从搬迁完成那一刻起持续追平，两者共用同一时间基准。
</div>
</div>

</div>

<div class="mt-3 px-4 py-2.5" style="background: var(--brand-pale); border-left: 2px solid var(--brand); font-size: 0.84rem; line-height: 1.6"><strong>全量阶段的关键不是速度，而是起点可复现</strong>——起始时间点一旦确定，全量与增量的所有动作都有据可依。</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">全量期间业务照常写入 · 快照点与增量共用同一个时间点</div>
---
layout: default
---

# 原理二：增量同步（日志级 CDC）

<div class="flow-diagram-wrap ob-fig" style="width: calc(100% - 5rem); margin: 0 2.5rem;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 20, 'rankSpacing': 30, 'padding': 8, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#fbf7f6','primaryTextColor':'#1c1917','primaryBorderColor':'#d6cfcb','lineColor':'#b23a2c','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'15px'}}}%%
flowchart LR
  A[("OceanBase<br/>数据库日志")] --> B["实时识别数据变化"]
  B --> C["保留变化顺序<br/>形成增量数据"]
  C --> D["本地暂存<br/>记录同步进度"]
  D --> E["可靠传输<br/>失败自动重试"]
  E --> F["目标端持续更新"]
```

</div>

<div class="grid grid-cols-2 gap-6 mt-1">
<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.4rem">三个关键设计</p>
<ul style="font-size: 0.84rem; line-height: 1.65" class="space-y-1">
<li><strong>只投递已提交事务</strong>：未提交与回滚事务不进入数据流</li>
<li><strong>按提交顺序投递</strong>：保证目标端事务先后关系不颠倒</li>
<li><strong>位点与数据同源</strong>：重启从上次位点继续，无需重做全量</li>
</ul>
</div>
<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.4rem">装载侧（写入 OceanBase）</p>
<ul style="font-size: 0.84rem; line-height: 1.65" class="space-y-1">
<li>批量装载（批次大小可配置），把逐行往返变成批量写入</li>
<li>重复键冲突可自动识别并按策略重试或转换为更新</li>
<li>传输压缩，跨机房与专线带宽占用显著降低</li>
</ul>
</div>
</div>

<div class="mt-5 px-5 py-4" style="background: var(--brand-pale); border-left: 2px solid var(--brand); font-size: 0.9rem; line-height: 1.7"><strong>CDC 的正确性只取决于三件事：</strong>只投递已提交事务、按提交排序、位点与数据同源。</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">只用数据库自己的日志，不改业务表、不加触发器</div>
---
layout: default
---

# 原理三：全量与增量的无缝衔接

<div style="margin: 1.2rem 0 0.5rem">

<div class="flow-diagram-wrap ob-fig" style="width: calc(100% - 4rem); margin: 0 2rem;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 18, 'rankSpacing': 24, 'padding': 8, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#fbf7f6','primaryTextColor':'#1c1917','primaryBorderColor':'#d6cfcb','lineColor':'#b23a2c','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'16px'}}}%%
flowchart LR
  P(["一致快照点<br/>时间 = N"]) --> F["全量同步<br/>结构与存量数据"]
  F --> I["增量同步<br/>从 时间 = N 开始追平"]
  I --> C(["切换点<br/>短暂停写"])
  C --> R["反向链路就绪<br/>可补数"]
```

</div>
</div>

<div class="grid grid-cols-3 gap-5 mt-4" style="font-size: 0.86rem">
<div class="px-5 py-5" style="background: var(--surface); border: 1px solid var(--divider)">
<strong style="color: var(--brand)">为什么不会漏数</strong><br/>
<span style="color: var(--muted)">全量读取的是 时间 = N 的一致快照，增量从 N 起捕获，两者覆盖同一时间轴，中间没有空档</span>
</div>
<div class="px-4 py-3" style="background: var(--surface); border: 1px solid var(--divider)">
<strong style="color: var(--brand)">为什么要并行推进</strong><br/>
<span style="color: var(--muted)">增量在全量期间就已开始捕获，全量结束时差距已被压缩到很小，切换窗口自然变短</span>
</div>
<div class="px-4 py-3" style="background: var(--surface); border: 1px solid var(--divider)">
<strong style="color: var(--brand)">停机窗口估算</strong><br/>
<span style="color: var(--muted)">等于"最后一段增量追平 + 应用切换"的时间，而不是全量搬迁的时间</span>
</div>
</div>

<div class="mt-5 px-5 py-4" style="background: var(--brand-pale); border-left: 2px solid var(--brand); font-size: 0.9rem; line-height: 1.7"><strong>全量与增量不是两个任务，而是同一条链路的两个阶段：</strong>一个负责起跑，一个负责保持。</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">切换窗口由增量追平决定，通常只有分钟级</div>
---
layout: default
transition: slide-left
---

# 同步原理 · 数据抽取与传输机制

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
transition: slide-left
---

# 同步原理 · 数据装载机制

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
  J -->|是| K[commit + 记录位点]
  K --> L([结束])
```

<div style="margin-top: -0.2rem; color: var(--muted); font-size: 0.72rem; text-align: center; width: 100%;">执行与提交阶段</div>

</div>

</div>

<div style="position: absolute; left: 0; right: 0; bottom: 0; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600; z-index: 6">按操作类型复用 statement · 批满即执行 · 文件结束记录位点</div>
---
layout: default
---

# 写入 OceanBase：装载与适配

<div class="grid grid-cols-2 gap-8 mt-2">
<div>
<table>
<thead><tr><th>环节</th><th>做法</th></tr></thead>
<tbody>
<tr><td>结构</td><td>同构：两端均为 OceanBase，表、分区、索引、约束保持一致，无需方言转换</td></tr>
<tr><td>连接</td><td>通过 ODP（OBProxy）或直连 OBServer 装载；端口 2883 / 2881</td></tr>
<tr><td>DDL</td><td>分区维护动作按同构重放（新增 / 拆分 / 合并 / 交换 / 重命名 / 截断）</td></tr>
<tr><td>装载</td><td>批量装载 + 主键 / 唯一键冲突处理；目标端持续可读写，可直接承接查询与报表</td></tr>
</tbody>
</table>
</div>
<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">仍然需要注意</p>
<ul style="font-size: 0.84rem; line-height: 1.65" class="space-y-1">
<li>大字段 / LOB 表按目标端参数评估写入与存储</li>
<li>无唯一键表无法判定行同一性，须建链前逐表处置</li>
<li>字符集与排序规则在建库时确定，建链前确认一致</li>
</ul>
</div>
</div>
<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">同构同步：结构不转换、类型不映射，装载即生效</div>

---
layout: default
---

# OceanBase 作为源端：日志捕获

<div class="grid gap-8 mt-2" style="grid-template-columns: 2fr 3fr">
<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">捕获原理</p>
<ul style="font-size: 0.86rem; line-height: 1.7" class="space-y-2">
<li>直接读取 OceanBase 的<strong>增量日志</strong>获取变更，不依赖触发器</li>
<li>支持 OceanBase <strong>3.x / 4.x</strong> 两个大版本</li>
<li>需要提供 <strong>RootService 列表</strong>与 <strong>config-url</strong>（增量链路配置来源）</li>
<li>变更经事务重组后按顺序投递，目标端同为 OceanBase，结构一致</li>
</ul>
</div>
<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">OceanBase 侧需要准备什么</p>
<table>
<colgroup><col style="width:34%"><col></colgroup>
<thead><tr><th>项目</th><th>要求</th></tr></thead>
<tbody>
<tr><td>端口</td><td>OBProxy 2883、OBServer 2881；增量抓取另需 RootService <strong>2882</strong> 与 OBConfig 8080</td></tr>
<tr><td>sys 账号</td><td>创建带密码用户并授权，用于增量链路配置读取</td></tr>
<tr><td>业务账号</td><td>Oracle 模式：<code>__OCEANBASE_INNER_DRC_USER</code>（DBA）；MySQL 模式：<code>__oceanbase_inner_drc_user</code>（ALL）</td></tr>
<tr><td>配置地址</td><td><code>show parameters like 'obconfig_url'</code> 获取并放通对应地址</td></tr>
</tbody>
</table>
</div>
</div>
<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">捕获、重组、投递三段可分别观测，便于定位瓶颈</div>

---
layout: default
---

# 一致性保证：RPO ≈ 0 的实现机制

<div class="grid grid-cols-2 gap-8 mt-2">

<div>
<table>
<thead><tr><th>机制</th><th>作用</th></tr></thead>
<tbody>
<tr><td>只投递已提交事务</td><td>目标端不会出现源端未提交或已回滚的数据</td></tr>
<tr><td>按源端提交顺序投递</td><td>事务先后关系不颠倒，避免"先删后插"错乱</td></tr>
<tr><td>位点续传</td><td>进程或链路中断后从上次位点继续，不重做全量</td></tr>
<tr><td>重复键幂等处理</td><td>重放不会造成数据错乱</td></tr>
</tbody>
</table>
</div>

<div>
<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">与"数据库自带主备"的区别</p>
<ul style="font-size: 0.84rem; line-height: 1.65" class="space-y-2">
<li>自带主备：同构、同版本、由数据库厂商实现，跨库/跨版本不可用</li>
<li>FZS：跨版本、跨站点，可同时服务同机房温备、异地灾备与采集库供数</li>
<li>自带主备：切换通常需要 DBA 介入；FZS 提供一键方向反转与灾备自动接管</li>
<li>FZS 额外提供<strong>数据比对</strong>，可证明目标端数据一致</li>
</ul>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">一致性由机制与验证共同保证</div>
---
layout: default
---

# 校验闭环：切换前必须给出结论

<div class="flow-diagram-wrap ob-fig" style="width: calc(100% - 5rem); margin: 0 2.5rem;">

```mermaid
%%{init: {'theme':'base','flowchart': {'nodeSpacing': 22, 'rankSpacing': 30, 'padding': 8, 'curve': 'linear'}, 'themeVariables':{'primaryColor':'#fbf7f6','primaryTextColor':'#1c1917','primaryBorderColor':'#d6cfcb','lineColor':'#b23a2c','fontFamily':'Kaiti SC, KaiTi, serif','fontSize':'16px'}}}%%
flowchart LR
  A["并行比对<br/>行级内容 / 行数 / 对象"] --> B["差异清单<br/>定位行与列"]
  B -->|不一致| C["异常表一键重抽"]
  C --> A
  B -->|一致| D["结果导出留档"]
```

</div>

<div class="grid grid-cols-3 gap-5 mt-1" style="font-size: 0.82rem">
<div class="px-4 py-3" style="background: var(--surface); border: 1px solid var(--divider)">
<strong style="color: var(--brand)">三种比对</strong><br/>
<span style="color: var(--muted)">行级内容逐列比对；逐表行数与对象定义比对；自定义 SQL 双向比对</span>
</div>
<div class="px-4 py-3" style="background: var(--surface); border: 1px solid var(--divider)">
<strong style="color: var(--brand)">支持级别</strong><br/>
<span style="color: var(--muted)">信创库与各同步端之间支持到数据校验（行级内容 + 行数 + 对象定义）</span>
</div>
<div class="px-4 py-3" style="background: var(--surface); border: 1px solid var(--divider)">
<strong style="color: var(--brand)">执行建议</strong><br/>
<span style="color: var(--muted)">目标端无延迟、非业务高峰时段执行；结果作为切换放行依据</span>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">比对 → 修复 → 复验，形成可交付、可审计的闭环</div>
---
layout: section
---

# UF3.0 信创升级 · 数据库同步方案

<div style="color: oklch(86% 0.025 30); margin-top: 1rem; font-size: 0.95rem; letter-spacing: 0.02em">以信创库为起点：同步 · 接管 · 切换</div>
---
layout: default
---

# 范围：从信创库开始

<div class="grid grid-cols-2 gap-7 mt-1">
<div style="border:1px solid var(--divider); padding:1rem 1.1rem">
<p style="font-size:.7rem; font-weight:700; letter-spacing:.12em; color:oklch(97% 0.005 30); background:var(--brand); display:inline-block; padding:.12rem .55rem; margin:0 0 .5rem">本方案覆盖</p>
<ul style="font-size:.86rem; line-height:1.85; margin:0">
<li>以<strong>信创库（OceanBase）为源</strong>，向温备库、采集库与异地灾备实时同步</li>
<li>灾备接管：故障时按场景 A / B / C 切换</li>
<li>信创库与各同步端之间的校验、监控与告警</li>
</ul>
</div>
<div style="border:1px solid var(--divider); padding:1rem 1.1rem">
<p style="font-size:.7rem; font-weight:700; letter-spacing:.12em; color:oklch(97% 0.005 30); background:var(--brand); display:inline-block; padding:.12rem .55rem; margin:0 0 .5rem">不在本方案范围</p>
<ul style="font-size:.86rem; line-height:1.85; margin:0">
<li>非信创库到信创库的<strong>迁移与全量</strong></li>
<li>应用改造、存储过程与触发器的重建</li>
<li>UF3.0 参数配置与硬件选型</li>
</ul>
</div>
</div>
<div class="mt-3 px-4 py-2.5" style="background: var(--brand-pale); font-size:0.84rem; color:var(--muted)">
<strong style="color:var(--brand)">起点：</strong>信创库就绪、可读之后接入；信创库成为生产源后，FZS 转入常态运行。
</div>
<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">以信创库为起点 · 只做同步与接管</div>
---
layout: default
---

# 部署架构：控制面与 Agent

<div class="grid grid-cols-2 gap-7 mt-1">
<div>
<p style="font-size:.7rem; font-weight:700; letter-spacing:.12em; color:oklch(97% 0.005 30); background:var(--brand); display:inline-block; padding:.12rem .55rem; margin:0 0 .5rem">控制面：三节点</p>
<ul style="font-size:.84rem; line-height:1.85">
<li><strong>组成</strong>：Web Server 组 + 控制台 + 巡检，节点间共享存储</li>
<li><strong>调度</strong>：链路在组内选址，节点故障自动漂移、断点续跑</li>
<li><strong>资源</strong>：8c / 32g / 500G 起，节点间万兆</li>
</ul>
<p style="font-size:.76rem; color:var(--muted); margin:.2rem 0 0">生产环境建议三节点；评估与 POC 可单机。</p>
</div>
<div>
<p style="font-size:.7rem; font-weight:700; letter-spacing:.12em; color:oklch(97% 0.005 30); background:var(--brand); display:inline-block; padding:.12rem .55rem; margin:0 0 .5rem">Agent：两种形态</p>
<ul style="font-size:.84rem; line-height:1.85">
<li><strong>中间机</strong>：源 / 目标 Agent 同机，数据在机房内闭环 → 同机房、低侵入</li>
<li><strong>异地分离</strong>：两端分设，经专线传输并限速 → 跨站点</li>
<li><strong>资源</strong>：2C / 4G 起，按链路数量与全量规模调整</li>
</ul>
<p style="font-size:.76rem; color:var(--muted); margin:.2rem 0 0">Agent 不依赖控制面存活，控制面重启不影响同步。</p>
</div>
</div>

<div class="mt-3 px-4 py-2.5" style="background: var(--brand-pale); font-size:0.84rem; color:var(--muted)">
<strong style="color:var(--brand)">网络：</strong>管理区到各站点单向可达即可下发与纳管；中间机形态数据走本机，异地分离才占用专线带宽。
</div>

<table class="mt-3">
<thead><tr><th style="width:24%">部署位置</th><th>部署组件</th><th style="width:34%">说明</th></tr></thead>
<tbody>
<tr><td>管理区（或生产中心）</td><td>控制面三节点：Web Server 组 + 控制台 + 巡检</td><td>三节点共享存储，故障自动漂移</td></tr>
<tr><td>生产中心</td><td>源端 Agent</td><td>中间机形态时部署在中间机</td></tr>
<tr><td>同机房温备 / 异地灾备</td><td>目标端 Agent</td><td>异地分离时两端各一套</td></tr>
<tr><td>采集库</td><td>目标端 Agent</td><td>供数链路单独限速</td></tr>
</tbody>
</table>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">控制面三节点 · Agent 两形态 · 资源与网络可预估</div>
---
layout: default
---

# 信创库侧的拓扑与任务链

<div style="margin: 0.1rem 0 0">
  <TopologyDiagram scenario="normal" />
</div>

<p style="font-size:0.74rem; color:var(--muted); margin:0.22rem 0 0.35rem">连线为业务表同步；应用专用通道（极速交易、行情复制等）不在链路内。</p>

<table class="mt-1 topo-table">
<thead><tr><th style="width:20%">任务</th><th>方向</th><th style="width:26%">启动条件</th></tr></thead>
<tbody>
<tr><td>T1 生产同步</td><td>主集群 → 温备库 / 采集库 / 异地灾备（一源三目标）</td><td>常态运行</td></tr>
<tr><td>T2 同机房接管</td><td>温备库 → 采集库 / 异地灾备（一源两目标）</td><td>主集群不可用，场景 A / B</td></tr>
<tr><td>T3 异地兜底</td><td>异地灾备 → 采集库（反向补数）</td><td>温备不可用，场景 B / C</td></tr>
</tbody>
</table>

<p style="font-size:0.76rem; color:var(--muted); margin:0.2rem 0 0">任一时刻只有一个写入源；切换动作即“停上一级、启下一级”。</p>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">信创库 → 温备 / 采集 / 异地 · 三级任务 · 单一写入源</div>
---
layout: default
---

# 场景 A：主集群宕机 → 温备接管

<ScenarioPath variant="A" />

<div style="width: calc(100% - 1.5rem); margin: 0 auto">
  <TopologyDiagram scenario="warm" />
</div>

<table class="mt-1 topo-table">
<thead><tr><th style="width:16%">项目</th><th>场景 A：主集群宕机，温备接管</th></tr></thead>
<tbody>
<tr><td>触发</td><td>主集群不可用</td></tr>
<tr><td>动作与结果</td><td>温备接管生产；停 T1，启 T2：温备 → 采集 / 灾备</td></tr>
<tr><td>RPO</td><td>主 → 温备 链路时延</td></tr>
</tbody>
</table>

<p style="font-size:0.72rem; color:var(--muted); margin:0.2rem 0 0">A 停在状态 2：温备接管；不进入灾备接管。</p>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">主集群宕机 · 温备接管 · 采集与灾备继续</div>
---
layout: default
---

# 场景 B：主集群宕机 → 温备接管 → 温备宕机 → 灾备接管

<ScenarioPath variant="B" />

<div style="width: calc(100% - 1.5rem); margin: 0 auto">
  <TopologyDiagram scenario="drB" />
</div>

<table class="mt-1 topo-table">
<thead><tr><th style="width:17%">项目</th><th>场景 B：温备接管后也宕机，灾备接管</th></tr></thead>
<tbody>
<tr><td>触发</td><td>主集群不可用 → 温备接管 → 温备也宕机</td></tr>
<tr><td>动作与结果</td><td>灾备接管生产；停 T2，启 T3：灾备 → 采集（反向补数）</td></tr>
<tr><td>RPO</td><td>温备 → 灾备 链路时延（接管期间）</td></tr>
</tbody>
</table>

<p style="font-size:0.72rem; color:var(--muted); margin:0.2rem 0 0">B 经过状态 2 再到状态 3：温备先接管，随后故障，由灾备接手。</p>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">主集群宕机 → 温备接管 → 温备宕机 · 灾备接管</div>
---
layout: default
---

# 场景 C：主集群 + 温备同时宕机 → 灾备接管

<ScenarioPath variant="C" />

<div style="width: calc(100% - 1.5rem); margin: 0 auto">
  <TopologyDiagram scenario="drC" />
</div>

<table class="mt-1 topo-table">
<thead><tr><th style="width:17%">项目</th><th>场景 C：主 + 温备同时宕机，灾备接管</th></tr></thead>
<tbody>
<tr><td>触发</td><td>主集群与温备同时不可用（机房整体故障）</td></tr>
<tr><td>动作与结果</td><td>灾备接管生产；停 T1，启 T3：灾备 → 采集（反向补数）</td></tr>
<tr><td>RPO</td><td>主 → 灾备 链路时延</td></tr>
</tbody>
</table>

<p style="font-size:0.72rem; color:var(--muted); margin:0.2rem 0 0">C 跳过状态 2：主与温备同时故障，灾备直接接手。</p>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">主 + 温备同时宕机 · 跳过温备 · 灾备直接接管</div>
---
layout: default
---

# 带宽与高可用要点

<div class="grid grid-cols-2 gap-7 mt-1">
<div>
<p style="font-size:.7rem; font-weight:700; letter-spacing:.12em; color:oklch(97% 0.005 30); background:var(--brand); display:inline-block; padding:.12rem .55rem; margin:0 0 .5rem">带宽</p>
<ul style="font-size:.84rem; line-height:1.85">
<li><strong>增量优先</strong>：带宽只与事务量相关，与数据总量无关</li>
<li><strong>链路限速</strong>：取专线可用带宽的 50%–70%</li>
<li><strong>全量错峰</strong>：夜间 / 周末，分批并限速</li>
<li><strong>断点续传</strong>：重启从位点继续，不重做全量</li>
</ul>
<p style="font-size:.76rem; color:var(--muted); margin:.2rem 0 0">2,000 TPS × 400 B ≈ 0.8 MB/s；1 TB / 6 h ≈ 48 MB/s。</p>
</div>
<div>
<p style="font-size:.7rem; font-weight:700; letter-spacing:.12em; color:oklch(97% 0.005 30); background:var(--brand); display:inline-block; padding:.12rem .55rem; margin:0 0 .5rem">高可用</p>
<ul style="font-size:.84rem; line-height:1.85">
<li><strong>控制面三节点</strong>：服务组内均衡，单点故障不影响链路</li>
<li><strong>链路漂移</strong>：节点不可达时组内重建并从位点续跑</li>
<li><strong>巡检自愈</strong>：异常进程自动拉起，恢复留痕</li>
<li><strong>不抖动</strong>：资源瞬时波动不触发链路搬迁</li>
</ul>
<p style="font-size:.76rem; color:var(--muted); margin:.2rem 0 0">切换时新任务重新选址，不受上一级任务占用节点影响。</p>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">带宽优先保障增量 · 故障收敛于组内</div>

---
layout: default
---

# FZS 的四个动作：建链 · 追平 · 演练 · 接管

<div class="grid grid-cols-4 gap-3 mt-1">
  <div style="border-top:2px solid var(--brand); padding-top:.55rem">
    <p style="font-size:.68rem; color:var(--brand); font-weight:700; margin:0">01</p>
    <p style="font-size:.9rem; font-weight:600; margin:.15rem 0 .25rem">建链</p>
    <p style="font-size:.78rem; color:var(--muted); line-height:1.6; margin:0">以信创库为源，建到温备库、采集库与异地灾备的链路。</p></div>
  <div style="border-top:2px solid var(--brand); padding-top:.55rem">
    <p style="font-size:.68rem; color:var(--brand); font-weight:700; margin:0">02</p>
    <p style="font-size:.9rem; font-weight:600; margin:.15rem 0 .25rem">追平</p>
    <p style="font-size:.78rem; color:var(--muted); line-height:1.6; margin:0">建链后持续追平；投产前把灾备追至可用状态。</p></div>
  <div style="border-top:2px solid var(--brand); padding-top:.55rem">
    <p style="font-size:.68rem; color:var(--brand); font-weight:700; margin:0">03</p>
    <p style="font-size:.9rem; font-weight:600; margin:.15rem 0 .25rem">演练</p>
    <p style="font-size:.78rem; color:var(--muted); line-height:1.6; margin:0">按 A / B / C 三条路径演练；检查单与耗时记录留存。</p></div>
  <div style="border-top:2px solid var(--brand); padding-top:.55rem">
    <p style="font-size:.68rem; color:var(--brand); font-weight:700; margin:0">04</p>
    <p style="font-size:.9rem; font-weight:600; margin:.15rem 0 .25rem">接管</p>
    <p style="font-size:.78rem; color:var(--muted); line-height:1.6; margin:0">投产切换后转入常态运行；故障时按场景切换，由灾备接管生产。</p></div>
</div>

<div class="mt-4 px-4 py-2.5" style="background: var(--brand-pale); font-size:0.84rem; color:var(--muted)">
<strong style="color:var(--brand)">本页只覆盖</strong>信创库侧的同步与接管；迁移与全量不在本方案范围。
</div>

<table class="mt-3" style="font-size:0.74rem; table-layout:fixed">
<thead><tr><th style="width:9%">动作</th><th style="width:47%">关键操作</th><th style="width:34%">检查项 / 产出</th><th style="width:10%">参考耗时</th></tr></thead>
<tbody>
<tr><td>建链</td><td>开通源端账号与端口，取 RootService 列表与 config-url；部署 Agent，按主 → 温备、主 → 采集、主 → 灾备建三条链路</td><td>连通性与权限通过；三条链路正常；首轮全量完成</td><td>0.5–1 天</td></tr>
<tr><td>追平</td><td>增量持续追平，盯延迟与积压；无唯一键表、大字段表逐表处置</td><td>延迟稳定在秒级、积压归零；抽样行数与内容一致</td><td>1–3 天</td></tr>
<tr><td>演练</td><td>按 A / B / C 三条路径演练：停 T1 启 T2 / T3，应用指向切换后再切回</td><td>检查单逐项签字；切换耗时与数据结果留档</td><td>2–4 小时</td></tr>
<tr><td>接管</td><td>故障时停上一级、启下一级；恢复后反向补数并复验</td><td>任一时刻单一写入源；切换记录 + 校验报告归档</td><td>分钟级</td></tr>
</tbody>
</table>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">建链 · 追平 · 演练 · 接管</div>

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
