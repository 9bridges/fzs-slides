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
    <img src="/logo.png" alt="九桥同步" class="h-14" style="filter: brightness(0) invert(1); opacity: 0.93" />
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

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.78rem; letter-spacing: 0.08em; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">金融级 CDC · 异构同步 · 可视化运维 · AI 助手一体化</div>

---
layout: default
---

# 什么是 FZS？

FZS（**F**inancial-grade **Z**ero-lag **S**ync）是九桥同步自主研发的数据库同步平台，基于日志抓取（CDC）实现跨异构数据库的**实时**与**批量**一体化同步。

<div class="grid grid-cols-2 gap-8">
<div>

<p style="font-size: 0.7rem; font-weight: 700; letter-spacing: 0.14em; color: oklch(97% 0.005 30); background: var(--brand); display: inline-block; padding: 0.15rem 0.6rem; margin-bottom: 0.5rem">核心原理</p>

- **日志抓取**：直接读取源端事务日志（Oracle Redo / MySQL Binlog / PostgreSQL WAL 等），无业务侵入
- **异构转换**：在抓取层完成 DDL/DML 解析与类型映射，写入任意目标库
- **全量 + 增量**：同一链路统一调度，全量结束后自动切换增量，断点续传（checkpoint）

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

<div style="margin: auto -3.5rem -2.5rem; padding: 0.65rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.82rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">无业务侵入 · 全量 + 增量统一调度 · 断点续传 · 五大组件协同部署</div>

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
<p style="font-size: 0.83rem; line-height: 1.6; color: var(--muted)">Oracle / 达梦实时同步至备库，增量延时 &lt; 1 秒，RPO ≈ 0；故障时 Web UI 一键提升备库，RTO &lt; 10 分钟。</p>
</div>

<div class="p-4" style="border: 1px solid var(--divider); border-top: none; border-right: none">
<div class="flex items-baseline gap-2 mb-2">
<span style="color: var(--muted); font-size: 1rem; font-weight: 700; line-height: 1">03</span>
<h3 class="font-bold" style="color: var(--ink); font-size: 0.95rem">信创迁移</h3>
</div>
<p style="font-size: 0.83rem; line-height: 1.6; color: var(--muted)">Oracle → 达梦 / 金仓 / openGauss 全链路覆盖，全量完成后自动切入增量同步，业务切换停机窗口可缩短至分钟级。</p>
</div>

<div class="p-4" style="border: 1px solid var(--divider); border-top: none">
<div class="flex items-baseline gap-2 mb-2">
<span style="color: var(--muted); font-size: 1rem; font-weight: 700; line-height: 1">04</span>
<h3 class="font-bold" style="color: var(--ink); font-size: 0.95rem">数据分发</h3>
</div>
<p style="font-size: 0.83rem; line-height: 1.6; color: var(--muted)">一次 CDC 抓取驱动多条下游链路，变更数据同时分发至报表库、缓存、消息队列，源库读压力不随消费方数量增加。</p>
</div>

</div>

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
- SQL Server
- OceanBase（Oracle / MySQL 模式）
- 达梦 DM · 金仓 KingBase · 崖山 YashanDB
- TiDB / TDSQL（MySQL / PostgreSQL）
- 海量数据 Vastbase G100 · MogDB

</div>

<p style="font-size: 0.78rem; color: var(--muted); margin-top: 0.5rem">另支持 GBase8s · SUNDB · StarRocks · Hive 等，共 17 种数据源</p>

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
| GoldenDB | 分布式金融库 |
| GaussDB DWS | 华为数仓 |
| PolarDB（MySQL/PG） | 阿里云 RDS |
| DB2 / Informix | 传统企业库 |

</div>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.8rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">17 种数据源 · 异构全覆盖 · 所有 Source 库均可作为 Sink 目标</div>

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
<li>适合：一次性数据迁移</li>
</ul>
</div>

</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.7rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.85rem">
<strong>定时调度</strong>：所有模式均支持 cron 调度与<strong>交易日历</strong>（非交易日自动暂停），满足金融行业合规要求。
</div>

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

**⑤ 其它配置**：告警绑定、分组归属、备注信息

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-create-link.png" alt="链路配置向导" style="width: 100%; display: block" />
</div>
</div>


---
layout: default
---

# 链路实时监控

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

**增量累计**：统计 INSERT / UPDATE / DELETE / DDL 在抓取端与装载端的累计行数，两端对比可发现积压或数据丢失

**实时延时**：独立展示抓取端与装载端的秒级延时，快速定位瓶颈位于网络还是目标库

**全量统计**：显示全量阶段各表的迁移进度、已同步行数与 QPS

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-link1.png" alt="链路实时监控" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.82rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">抓取端 / 装载端双端延时独立监控 · 秒级定位瓶颈 · 全量 QPS 实时可见</div>

---
layout: default
---

# 告警管理

<div class="flex gap-8 mt-3 items-start">
<div style="flex: 0 0 42%">
<div class="space-y-3 text-sm">

<div class="flex gap-3 items-start">
  <span class="shrink-0 rounded-full" style="width: 0.6rem; height: 0.6rem; background: var(--s-red); margin-top: 0.3rem"></span>
  <div><strong>报错告警</strong>：链路进入异常状态时立即触发，最长 30 秒内感知同步中断</div>
</div>

<div class="flex gap-3 items-start">
  <span class="shrink-0 rounded-full" style="width: 0.6rem; height: 0.6rem; background: var(--s-amber); margin-top: 0.3rem"></span>
  <div><strong>延时告警</strong>：增量延时超过自定义阈值（秒）时触发，可按业务 RPO 要求自定义</div>
</div>

<div class="flex gap-3 items-start">
  <span class="shrink-0 rounded-full" style="width: 0.6rem; height: 0.6rem; background: var(--s-blue); margin-top: 0.3rem"></span>
  <div><strong>空闲告警</strong>：源端在阈值时间内无数据变化时触发，检测业务停摆或上游采集失效</div>
</div>

</div>
</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-alert-settings.png" alt="告警管理" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.85rem">
<strong>通知渠道</strong>：Webhook（企微 / 钉钉 / 飞书 / 短信平台）+ SMTP 邮件
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

<div style="margin: auto -3.5rem -2.5rem; padding: 1rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif">
  <p style="font-size: 1rem; font-weight: 700; margin: 0 0 0.2rem; line-height: 1.2">RTO &lt; 10 分钟 · RPO ≈ 0</p>
  <p style="font-size: 0.78rem; margin: 0; opacity: 0.8; font-weight: 400">无人值守自恢复 · Web UI 一键切换 · 操作前二次确认</p>
</div>

---
layout: default
---

# 数据比对与校验

<div class="flex gap-8 mt-3 items-start">
<div class="space-y-2 text-sm" style="flex: 0 0 42%">

通过 **FZS Query**（独立 Java 服务）提供两层验证：

**快速行数比对**：并行查询源端与备端同名表的行数，秒级获取差异，即时判断是否一致

**逐行内容差异校验**：SQL 层对比实际数据，生成差异 Excel 文件供下载，精确定位不一致行；结果可由 AI 助手汇报摘要

<p style="font-size: 0.78rem; color: var(--muted); margin-top: 0.25rem">支持：Oracle、MySQL、PostgreSQL、GaussDB、达梦、金仓、openGauss、TiDB、TDSQL、StarRocks、Doris、Vastbase、PolarDB、SUNDB</p>

</div>
<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-data-task-detail.png" alt="数据比对与校验" style="width: 100%; display: block" />
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.82rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">行数比对秒级完成 · 差异明细导出 Excel · 支持 14 种数据库</div>

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
    <img src="/ai-chatbox.png" alt="AI 对话" style="width: 100%; display: block" />
  </div>
  <div style="border: 1px solid var(--divider); overflow: hidden; grid-column: 2; grid-row: 1">
    <img src="/ai-llm-config.png" alt="AI 模型配置" style="width: 100%; display: block" />
  </div>
  <div style="border: 1px solid var(--divider); overflow: hidden; grid-column: 2; grid-row: 2">
    <img src="/ai-llm-config-dialog.png" alt="添加 AI 配置" style="width: 100%; display: block" />
  </div>
</div>
</div>

<div style="margin: auto -3.5rem -2.5rem; padding: 0.6rem 3.5rem; background: var(--brand); color: oklch(97% 0.005 30); font-size: 0.82rem; font-family: 'Kaiti SC', STKaiti, 'KaiTi', serif; font-weight: 600">支持私有部署 · 适配内网隔离 · 权限约束 · 高风险操作需二次确认</div>

---
layout: default
---

# 管理控制台一览

<div class="flex gap-8 mt-3 items-start">

<div class="space-y-2 text-sm" style="flex: 0 0 42%">

- **仪表盘**：链路状态总览（运行 / 暂停 / 异常 / 闲置）、CPU / 内存负载、活跃链路列表
- **数据链路**：按分组管理，导航树快速定位，每条链路独立监控面板
- **数据任务**：一对多分发，含子链路管理与任务级数据比对
- **系统设置**：用户管理、告警策略、License 与 Agent 软件管理
- **深色 / 浅色主题**：跟随系统或手动切换
- **刷新频率**：10s / 30s / 60s 可配置
- **部署模式**：本地独立部署，无外部依赖

</div>

<div style="flex: 1; border: 1px solid var(--divider); overflow: hidden">
  <img src="/fzs-main.png" alt="FZS 管理控制台" style="width: 100%; display: block" />
</div>

</div>

---
layout: center
class: text-center
title: 感谢聆听
---

<div style="position: absolute; inset: 0; background: var(--brand); display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 1.2rem">
  <img src="/logo.png" alt="九桥同步" class="h-14" style="filter: brightness(0) invert(1); opacity: 0.92" />
  <div style="width: 2.5rem; height: 1px; background: oklch(70% 0.06 25)"></div>
  <h2 style="font-size: 2rem; font-weight: 600; color: oklch(97% 0.005 30); letter-spacing: 0.02em; margin: 0">感谢聆听</h2>
  <div style="width: 2.5rem; height: 1px; background: oklch(70% 0.06 25)"></div>
  <p style="font-size: 0.82rem; color: oklch(82% 0.04 25); letter-spacing: 0.06em; margin: 0">如需 POC 方案或进一步演示，请联系九桥同步售前团队</p>
  <p style="font-size: 0.78rem; color: oklch(72% 0.035 25); margin: 0; letter-spacing: 0.04em">九桥同步 · 9bridges.cn</p>
</div>
