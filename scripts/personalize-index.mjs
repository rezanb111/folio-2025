import { readFileSync, writeFileSync } from 'fs'

const path = 'sources/index.html'
let html = readFileSync(path, 'utf8')

if (html.includes('[...]')) {
  throw new Error('index.html contains truncated SVG markers')
}

const reps = [
  ["<title>Bruno's</title>", '<title>Reza Nabavi</title>'],
  ["Bruno Simon's creative portfolio", 'Reza Nabavi — Creative Developer | Telegram @shibainuo'],
  ['content="Bruno Simon"', 'content="Reza Nabavi"'],
  ["content=\"Bruno's\"", 'content="Reza Nabavi"'],
  ['https://bruno-simon.com/social/share-image.png?cb=a', 'https://github.com/rezanb111/folio-2025/raw/main/static/social/share-image.png'],
  ['https://bruno-simon.com/', 'https://reza-nabavi-folio.vercel.app/'],
  ['og:site_name" content="Three.js Journey"', 'og:site_name" content="Reza Nabavi"'],
  ["Bruno's Home", "Reza's Home 🇮🇷"],
  [
    "My name is <strong>Bruno Simon</strong>, and I'm a <strong>creative developer</strong> (mostly for the web).",
    'My name is <strong>Reza Nabavi</strong> 🇮🇷 — creative developer specializing in immersive 3D web experiences.'
  ],
  [
    'This is my portfolio. Please drive around to learn more about me and discover the many secrets of this world.',
    'This is my portfolio. Drive around, explore, and for custom 3D/web projects message me on Telegram <strong>@shibainuo</strong>.'
  ],
  ['— Bruno', '— Reza Nabavi'],
  ['twitter:title" content="Bruno Simon"', 'twitter:title" content="Reza Nabavi"'],
  ["twitter:title\" content=\"Bruno's\"", 'twitter:title" content="Reza Nabavi"'],
  ['og:title" content="Bruno Simon"', 'og:title" content="Reza Nabavi"'],
  ["og:title\" content=\"Bruno's\"", 'og:title" content="Reza Nabavi"'],
]

for (const [a, b] of reps) {
  html = html.split(a).join(b)
}

writeFileSync(path, html)
console.log('personalized index.html', html.length, 'bytes')
