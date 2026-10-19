/**
 * 导出单个 deck 为 PDF，默认输出到 export/ 目录。
 *
 *   npm run export -- huajin-202610.md
 *     → export/huajin-202610.pdf
 *
 *   npm run export -- huajin-202610.md --output /tmp/x.pdf
 *     → 尊重显式指定的输出路径
 *
 * Slidev 自身的默认行为是把 <entry>-export.pdf 写到当前目录，这里做了归一化。
 */
import { execFileSync } from 'node:child_process'
import { mkdirSync } from 'node:fs'
import { basename } from 'node:path'

const args = process.argv.slice(2)
const entries = args.filter((a) => a.endsWith('.md'))
const entry = entries[0] ?? 'jinrongjie-202606.md'
const rest = args.filter((a) => a !== entry)

const hasOutput = rest.some((a) => a === '--output' || a.startsWith('--output=') || a === '-o')
const passthrough = ['slidev', 'export', entry]

if (!hasOutput) {
  mkdirSync('export', { recursive: true })
  const out = `export/${basename(entry, '.md')}.pdf`
  passthrough.push('--output', out)
  console.log(`▶ ${entry}  →  ${out}`)
} else {
  console.log(`▶ ${entry}  （使用指定的输出路径）`)
}

execFileSync('npx', [...passthrough, ...rest], { stdio: 'inherit' })
