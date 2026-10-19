/**
 * 多 deck 构建 → 单一 dist/，供 GitHub Pages 发布。
 *
 * 路径约定：/{客户}-{月份}/
 *   /jinrongjie-202606/   ← jinrongjie-202606.md（金融街版）
 *   /huajin-202610/       ← huajin-202610.md（华金版）
 *
 * 换月份：改下面 DECKS 里的 dir 即可。
 */
import { execFileSync } from 'node:child_process'
import { rmSync, existsSync, writeFileSync } from 'node:fs'

const DECKS = [
  { entry: 'jinrongjie-202606.md', dir: 'jinrongjie-202606', title: '金融街证券 · 产品介绍', note: '2026-06' },
  { entry: 'huajin-202610.md', dir: 'huajin-202610', title: '华金证券 · 产品介绍与 OceanBase 同步原理', note: '2026-10' },
]

if (existsSync('dist')) rmSync('dist', { recursive: true, force: true })

for (const d of DECKS) {
  const base = `/${d.dir}/`
  console.log(`\n▶ ${d.entry}  →  ${base}`)
  execFileSync('npx', ['slidev', 'build', d.entry, '--base', base, '--out', `dist${base}`], {
    stdio: 'inherit',
  })
}

// 站点根：索引页（列出所有 deck）
const cards = DECKS.map(
  (d) => `    <a class="deck" href="/${d.dir}/">
      <span class="name">${d.title}</span>
      <span class="meta">${d.note}　·　/${d.dir}/</span>
    </a>`,
).join('\n')

writeFileSync(
  'dist/index.html',
  `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>九桥同步 · 产品资料</title>
<style>
  html,body{height:100%;margin:0}
  body{display:flex;align-items:center;justify-content:center;background:#faf8f7;color:#1c1917;
       font-family:'Kaiti SC','Songti SC',serif}
  .wrap{width:min(34rem,88vw)}
  h1{font-size:1.7rem;font-weight:700;margin:0 0 .4rem}
  .bar{width:3rem;height:3px;background:#8f1f1b;margin:0 0 1.6rem}
  .deck{display:flex;flex-direction:column;gap:.25rem;padding:.9rem 1.1rem;margin-bottom:.7rem;
        border:1px solid #e7e2df;background:#fff;text-decoration:none;color:inherit;
        transition:border-color .15s}
  .deck:hover{border-color:#8f1f1b}
  .name{font-size:1rem;font-weight:600}
  .meta{font-size:.78rem;color:#78716c;font-family:'Fira Code',monospace}
  .foot{margin-top:1.4rem;font-size:.78rem;color:#a8a29e}
</style>
</head>
<body>
  <div class="wrap">
    <h1>九桥同步 · 产品资料</h1>
    <div class="bar"></div>
${cards}
    <div class="foot">如需其他版本或 POC 材料，请联系九桥同步售前团队。</div>
  </div>
</body>
</html>`,
)

// 站点级 404：GitHub Pages 子路径不做 SPA 重写，刷新单页链接会落到这里
writeFileSync(
  'dist/404.html',
  `<!doctype html>
<html lang="zh-CN"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>页面不存在 · 九桥同步</title>
<style>
  html,body{height:100%;margin:0}
  body{display:flex;align-items:center;justify-content:center;background:#faf8f7;color:#1c1917;
       font-family:'Kaiti SC','Songti SC',serif}
  .box{text-align:center;padding:0 2rem}
  .bar{width:3rem;height:3px;background:#8f1f1b;margin:1.2rem auto}
  h1{font-size:1.4rem;margin:0}
  p{color:#78716c;font-size:.9rem;line-height:1.9;margin:.6rem 0 0}
  a{color:#8f1f1b;text-decoration:none}
</style></head>
<body><div class="box">
  <h1>页面不存在</h1>
  <div class="bar"></div>
  <p>可能是链接已更新，或直接访问了某一页。<br><a href="/">返回资料索引</a></p>
</div></body></html>`,
)

console.log('\n✓ 构建完成')
for (const d of DECKS) console.log(`  https://slides.9bridges.cn/${d.dir}/   ${d.title}`)
console.log('  https://slides.9bridges.cn/            索引页')
