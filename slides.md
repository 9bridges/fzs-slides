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
  sans: 'PingFang SC'
  mono: 'Fira Code'
  provider: none
css: unocss
---

<div style="position: absolute; inset: 0; display: grid; grid-template-columns: 40% 60%">
  <div class="flex flex-col justify-center items-center gap-5 px-10" style="background: var(--brand)">
    <img src="/logo.png" alt="九桥同步" class="h-14" style="filter: brightness(0) invert(1); opacity: 0.93" />
    <div style="width: 2rem; height: 1px; background: oklch(72% 0.04 25)"></div>
    <p class="text-center" style="color: oklch(82% 0.045 25); font-size: 0.72rem; letter-spacing: 0.16em; text-transform: uppercase">数据库同步专家</p>
  </div>
  <div class="flex flex-col justify-center px-14 gap-3" style="background: var(--ground)">
    <p style="color: var(--brand); font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; font-weight: 600">产品能力介绍</p>
    <h1 style="font-size: 2.5rem; font-weight: 700; color: var(--ink); line-height: 1.1; letter-spacing: -0.015em; background: none; padding: 0; margin: 0">FZS 数据同步平台</h1>
    <p style="font-size: 0.88rem; color: var(--muted); line-height: 1.7; margin: 0">Financial-grade Zero-lag Sync<br>金融级零延迟数据库同步</p>
    <div style="margin-top: 2rem; padding-top: 1.25rem; border-top: 1px solid var(--divider); color: var(--muted); font-size: 0.78rem; letter-spacing: 0.04em">
      金融街证券 · 2026
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
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">02</span><span>典型应用场景</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">03</span><span>支持的数据库链路</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">04</span><span>三种同步模式</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">05</span><span>链路配置：五步向导</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">06</span><span>链路实时监控</span></div>
</div>
<div class="space-y-3">
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">07</span><span>告警管理</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">08</span><span>高可用 · 自动容灾</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">09</span><span>数据比对与校验</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">10</span><span>AI 助手</span></div>
<div class="flex items-baseline gap-3"><span style="color: var(--brand); font-weight: 700; font-size: 1.05rem; min-width: 1.8rem">11</span><span>管理控制台一览</span></div>
</div>
</div>

---
layout: default
zoom: 0.85
---

# 什么是 FZS？

FZS（**F**inancial-grade **Z**ero-lag **S**ync）是九桥同步自主研发的数据库同步平台，基于日志抓取（CDC）实现跨异构数据库的**实时**与**批量**一体化同步。

<div class="grid grid-cols-2 gap-8 mt-4">
<div>

### 核心原理

- **日志抓取**：直接读取源端事务日志（Oracle Redo / MySQL Binlog / PostgreSQL WAL 等），无业务侵入
- **异构转换**：在抓取层完成 DDL/DML 解析与类型映射，写入任意目标库
- **全量 + 增量**：同一链路统一调度，全量结束后自动切换增量，断点续传

</div>
<div>

### 五大组件

| 组件 | 形态 | 职责 |
|------|------|------|
| **FZS Agent** | C 二进制 | 抓取 + 装载（源/备端） |
| **FZS Web** | Node.js Web | 可视化管理控制台 |
| **FZS Web Server** | C++ REST | Agent 调度网关 |
| **FZS Daemon** | Node.js 服务 | 告警监控 + 自动重启 |
| **FZS Query** | Java Spring Boot | 数据比对与校验 |

</div>
</div>

---
layout: default
---

# 典型应用场景

<div class="grid mt-4" style="grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; gap: 0">

<div class="p-5" style="border: 1px solid var(--divider); border-right: none; border-bottom: none; background: var(--brand-pale)">
<div class="flex items-baseline gap-3 mb-2">
<span style="color: var(--brand); font-size: 1.2rem; font-weight: 700; line-height: 1">01</span>
<h3 class="font-bold" style="color: var(--ink)">实时容灾</h3>
</div>
<p style="font-size: 0.85rem; line-height: 1.6">将核心交易数据库（Oracle / 达梦）实时同步至同城或异地备库，持续增量延时 &lt; 1 秒，RPO ≈ 0，支持一键灾备切换。</p>
</div>

<div class="p-5" style="border: 1px solid var(--divider); border-bottom: none">
<div class="flex items-baseline gap-3 mb-2">
<span style="color: var(--muted); font-size: 1.2rem; font-weight: 700; line-height: 1">02</span>
<h3 class="font-bold" style="color: var(--ink)">数据集成</h3>
</div>
<p style="font-size: 0.85rem; line-height: 1.6">将业务数据库变更实时同步至 StarRocks / Doris / Kafka，支撑 T+0 报表分析与事件驱动架构，无需 ETL 批处理窗口。</p>
</div>

<div class="p-5" style="border: 1px solid var(--divider); border-right: none">
<div class="flex items-baseline gap-3 mb-2">
<span style="color: var(--muted); font-size: 1.2rem; font-weight: 700; line-height: 1">03</span>
<h3 class="font-bold" style="color: var(--ink)">信创迁移</h3>
</div>
<p style="font-size: 0.85rem; line-height: 1.6">Oracle → 达梦 / 金仓 / openGauss / 海量数据等国产库全链路支持，先做全量迁移，再开增量追平，业务停机窗口极短。</p>
</div>

<div class="p-5" style="border: 1px solid var(--divider)">
<div class="flex items-baseline gap-3 mb-2">
<span style="color: var(--muted); font-size: 1.2rem; font-weight: 700; line-height: 1">04</span>
<h3 class="font-bold" style="color: var(--ink)">数据分发</h3>
</div>
<p style="font-size: 0.85rem; line-height: 1.6">一个源端同时驱动多条链路（数据任务），将同一数据分发至多个下游系统，避免对源库的多次直连查询冲击。</p>
</div>

</div>

---
layout: default
zoom: 0.85
---

# 支持的数据库链路

<div class="grid grid-cols-2 gap-6 mt-4">
<div>

### 可作为数据源（Source）

通过 CDC 日志抓取，覆盖主流商业库与国产库：

<div class="columns-2 text-sm mt-2 gap-4">

- Oracle（LogMiner）
- MySQL / MariaDB
- PostgreSQL / openGauss
- SQL Server
- OceanBase（Oracle / MySQL 模式）
- 达梦 DM
- 金仓 KingBase
- 南大通用 GBase8s
- 崖山 YashanDB
- 科蓝 SUNDB
- 云和恩墨 MogDB
- 海量数据 Vastbase G100
- 恒生 LightDB
- GaussDB
- TiDB
- TDSQL（MySQL / PostgreSQL）
- StarRocks / Hive / Inceptor

</div>
</div>
<div>

### 可作为数据目标（Sink）

所有 Source 库均可作为目标；额外支持专属 Sink 目标：

<div class="text-sm mt-2">

| 目标类型 | 典型场景 |
|----------|---------|
| Apache Kafka | 事件流 / 下游消费 |
| Apache Doris | OLAP 分析 |
| Apache Iceberg | 湖仓一体 |
| Apache Paimon | 流批一体 |
| GoldenDB | 分布式金融库 |
| GaussDB DWS | 华为数仓 |
| PolarDB（MySQL/PG） | 阿里云 RDS |
| DB2 / Informix | 传统企业库 |

</div>
</div>
</div>

---
layout: default
zoom: 0.85
---

# 三种同步模式

<div class="grid grid-cols-3 gap-8 mt-4">

<div class="pr-6" style="border-right: 1px solid var(--divider)">
<p style="color: var(--brand); font-size: 1.45rem; font-weight: 700; line-height: 1">01</p>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 1rem">实时模式</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.8rem">全量 + 增量</p>
<ul class="mt-3 space-y-2" style="font-size: 0.88rem">
<li>先做全量快照，完成后自动切入 CDC 增量</li>
<li>中断后断点续传，不需重做全量</li>
<li>适合：数据容灾、实时集成</li>
</ul>
</div>

<div class="pr-6" style="border-right: 1px solid var(--divider)">
<p style="color: var(--brand); font-size: 1.45rem; font-weight: 700; line-height: 1">02</p>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 1rem">增量模式</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.8rem">仅增量</p>
<ul class="mt-3 space-y-2" style="font-size: 0.88rem">
<li>跳过全量，直接从指定位点开始抓取 CDC</li>
<li>适合：源/备端数据已对齐后的持续同步，及灾备库完成初始化后的接管</li>
</ul>
</div>

<div>
<p style="color: var(--brand); font-size: 1.45rem; font-weight: 700; line-height: 1">03</p>
<h3 class="font-bold mt-2" style="color: var(--ink); font-size: 1rem">迁移模式</h3>
<p class="mt-1" style="color: var(--muted); font-size: 0.8rem">仅全量</p>
<ul class="mt-3 space-y-2" style="font-size: 0.88rem">
<li>只做一次性全量快照，不开启增量</li>
<li>同步对象：表数据、序列、视图、存储过程、约束、权限、表空间等</li>
<li>适合：一次性数据迁移</li>
</ul>
</div>

</div>

<div class="mt-5 p-4" style="border: 1px solid var(--divider); background: var(--surface); font-size: 0.85rem">
<strong style="color: var(--brand)">定时调度</strong>：所有模式均支持 cron 调度与<strong>交易日历</strong>（非交易日自动暂停），满足金融行业合规要求。
</div>

---
layout: image-right
image: /fzs-create-link.png
backgroundSize: contain
---

# 链路配置：五步向导

创建一条数据链路只需五步配置：

<div class="mt-4 space-y-3">

**① 基础信息**  
配置链路拓扑：选择源端节点 → 备端节点，填写链路名称与描述

**② 同步对象**  
选择同步粒度：用户级 / 表级 / 列级；支持名称映射、类型映射、列过滤（WHERE 条件）及备端加列

**③ 同步策略**  
选择同步模式：实时模式（全量 + 增量）/ 仅增量 / 仅全量；配置定时调度与交易日历

**④ 同步配置**  
全量并发数、增量批次大小、网络压缩等高级参数

**⑤ 其它配置**  
告警绑定、分组归属、备注信息

</div>

---
layout: image-right
image: /fzs-link1.png
backgroundSize: contain
---

# 链路实时监控

每条链路提供三组实时监控图表：

<div class="mt-6 space-y-4">

**增量累计**  
统计 INSERT / UPDATE / DELETE / DDL 在抓取端与装载端的累计行数，两端对比可发现积压或数据丢失

**实时延时**  
以秒为单位独立展示抓取端与装载端的延时，快速定位性能瓶颈位于网络还是目标库

**全量统计**  
显示全量阶段各表的迁移进度、已同步行数与 QPS

</div>

<div class="mt-4" style="font-size: 0.85rem; color: var(--muted)">
链路操作（右上角）：启动 / 暂停 / 修复 / 强制重启 / 重置 / 全量重做，无需 CLI 干预
</div>

---
layout: image-right
image: /fzs-alert-settings.png
backgroundSize: contain
---

# 告警管理

FZS Daemon 每 **30 秒**轮询所有运行中的链路，支持三类告警策略：

<div class="mt-6 space-y-5" style="font-size: 0.92rem">

<div class="flex gap-3 items-start">
  <span class="shrink-0 rounded-full" style="width: 0.6rem; height: 0.6rem; background: var(--s-red); margin-top: 0.3rem"></span>
  <div><strong style="color: var(--ink)">报错告警</strong><br>链路进入异常状态时立即触发，零延迟感知同步中断</div>
</div>

<div class="flex gap-3 items-start">
  <span class="shrink-0 rounded-full" style="width: 0.6rem; height: 0.6rem; background: var(--s-amber); margin-top: 0.3rem"></span>
  <div><strong style="color: var(--ink)">延时告警</strong><br>增量延时超过自定义阈值（秒）时触发，可按业务 RPO 要求自定义</div>
</div>

<div class="flex gap-3 items-start">
  <span class="shrink-0 rounded-full" style="width: 0.6rem; height: 0.6rem; background: var(--s-blue); margin-top: 0.3rem"></span>
  <div><strong style="color: var(--ink)">空闲告警</strong><br>源端在阈值时间内无任何数据变化时触发，用于感知业务停摆或采集失效</div>
</div>

</div>

<div class="mt-5" style="font-size: 0.88rem; color: var(--muted)">
**通知渠道**：Webhook（企微 / 钉钉 / 飞书等）+ SMTP 邮件，可同时开启
</div>

---
layout: default
---

# 高可用 · 自动容灾

<div class="grid grid-cols-2 gap-8 mt-6">
<div>

### Daemon 自动重启

FZS Daemon 每 **30 秒**检测所有配置了 Agent 的节点是否可达：

1. 若 Agent 进程宕机 → 自动触发重启命令
2. 若链路运行中断 → 自动恢复同步（可配置）
3. 所有恢复动作均写入系统日志，可追溯

<p style="color: var(--muted); font-size: 0.88rem; margin-top: 0.75rem; line-height: 1.6">实现链路级故障的无人值守自恢复，降低人工介入成本。</p>

</div>
<div>

### 主备切换 / 灾备切换

| 操作 | 说明 |
|------|------|
| **激活备端** | 将备库切换为可读写状态 |
| **主备切换** | 交换源端与备端角色，链路反向同步 |
| **灾备切换** | 一键将容灾备库提升为主库，RTO < 10 分钟 |

以上操作均可通过 Web UI 或 AI 助手完成，操作前会要求二次确认。

</div>
</div>

---
layout: image-right
image: /fzs-data-task-detail.png
backgroundSize: contain
zoom: 0.85
---

# 数据比对与校验

通过 **FZS Query**（独立 Java 服务）提供两层数据一致性验证：

<div class="mt-4 space-y-4">

<div class="p-4" style="border: 1px solid var(--divider); background: var(--surface)">
<h3 class="font-bold" style="color: var(--brand)">快速行数比对</h3>
<p class="mt-1" style="font-size: 0.88rem">同时 COUNT 源端与备端同名表，秒级获取行数差异，即时判断数据是否一致</p>
<p class="mt-1" style="font-size: 0.78rem; color: var(--muted)">支持：Oracle、MySQL、PostgreSQL、GaussDB、达梦、金仓、openGauss、TiDB、TDSQL、StarRocks、Doris、Vastbase、PolarDB、SUNDB</p>
</div>

<div class="p-4" style="border: 1px solid var(--divider); background: var(--surface)">
<h3 class="font-bold" style="color: var(--brand)">逐行内容差异校验</h3>
<p class="mt-1" style="font-size: 0.88rem">在 SQL 层对比指定表的实际数据，生成差异 Excel 文件供下载，精确定位不一致行</p>
<p class="mt-1" style="font-size: 0.78rem; color: var(--muted)">结果文件可直接由 AI 助手读取并汇报摘要</p>
</div>

</div>

---
layout: image-right
image: /fzs-ai-chat.png
backgroundSize: contain
---

# AI 助手

内置 AI 助手，通过自然语言完成 FZS 平台绝大多数操作。

<div class="mt-4 space-y-3 text-sm">

**支持主流 LLM**  
DeepSeek · 豆包 Doubao · 千问 Qwen · Kimi · 智谱 GLM · MiniMax  
→ 支持私有部署地址，适合内网隔离环境

**覆盖的操作类别**

- Web Server、数据节点的增删改查
- 链路的创建、启停、修复、重置、主备切换、灾备切换
- 告警阈值与通知渠道配置
- 数据比对、日志查询、坏表检查
- 导航分组管理、系统概览与日志

**边界约束**  
AI 遵守当前用户权限；删除 / 切换等高风险操作会要求明确确认；不能访问业务明细数据

</div>

---
layout: image-right
image: /fzs-main.png
backgroundSize: contain
---

# 管理控制台一览

FZS Web 提供统一可视化管理界面：

<div class="mt-6 space-y-3 text-sm">

- **仪表盘**：全局链路状态（运行中 / 暂停 / 异常 / 闲置）、宿主机 CPU / 内存负载、活跃链路列表、系统日志
- **数据链路**：按分组管理，支持导航树快速定位，每条链路独立监控面板
- **数据任务**：一对多分发任务，含子链路管理与任务级数据比对
- **系统设置**：用户管理、告警策略、软件管理（Agent / License 上传）、导入导出
- **深色 / 浅色主题**：跟随系统或手动切换
- **刷新频率**：仪表盘与链路监控支持 10s / 30s / 60s 自定义刷新间隔

</div>

---
layout: center
class: text-center
title: 感谢聆听
---

<div style="position: absolute; inset: 0; background: var(--brand); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.5rem">
  <img src="/logo.png" alt="九桥同步" class="h-14" style="filter: brightness(0) invert(1); opacity: 0.92" />
  <div style="width: 2.5rem; height: 1px; background: oklch(70% 0.06 25)"></div>
  <h2 style="font-size: 2rem; font-weight: 600; color: oklch(97% 0.005 30); letter-spacing: 0.02em; margin: 0">感谢聆听</h2>
</div>
