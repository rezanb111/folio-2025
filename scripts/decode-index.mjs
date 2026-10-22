import { readFileSync, writeFileSync, existsSync } from 'fs'
const parts = []
for (let i = 0; i < 8; i++) {
  const p = `sources/index.part${i}.b64`
  if (!existsSync(p)) break
  parts.push(readFileSync(p, 'utf8').replace(/\s+/g, ''))
}
if (!parts.length) {
  console.log('no parts, skip decode')
  process.exit(0)
}
const html = Buffer.from(parts.join(''), 'base64')
writeFileSync('sources/index.html', html)
console.log('decoded sources/index.html', html.length, 'bytes')
