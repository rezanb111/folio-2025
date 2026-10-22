import { readFileSync, writeFileSync } from 'fs'

const path = 'sources/index.html'
let h = readFileSync(path, 'utf8')

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

for (const [a, b] of reps) h = h.split(a).join(b)

// Fix broken options.webp (restore from jsDelivr Bruno) + cover name with overlay
h = h.replace(
  'src="ui/previews/options.webp"',
  'src="https://cdn.jsdelivr.net/gh/brunosimon/folio-2025@main/static/ui/previews/options.webp"'
)

const overlay = `<div class="js-preview preview options-preview" style="position:relative;overflow:hidden;">
                            <img class="background" src="https://cdn.jsdelivr.net/gh/brunosimon/folio-2025@main/static/ui/previews/options.webp" loading="lazy" draggable="false">
                            <div style="position:absolute;left:6%;right:6%;top:26%;height:30%;display:flex;flex-direction:column;align-items:center;justify-content:center;background:rgba(22,28,20,0.9);border-radius:14px;pointer-events:none;z-index:6;">
                                <div style="color:#fff;font-weight:900;font-size:clamp(16px,4.2vw,32px);font-family:Nunito,Arial,sans-serif;letter-spacing:0.05em;text-shadow:0 2px 10px rgba(0,0,0,0.55);">REZA NABAVI</div>
                                <div style="color:#D66FFF;font-weight:700;font-size:clamp(11px,2.1vw,15px);font-family:Nunito,Arial,sans-serif;margin-top:6px;">🇮🇷 @shibainuo</div>
                            </div>
                        </div>`

h = h.replace(
  /<div class="js-preview preview options-preview"[^>]*>\s*<img class="background"[^>]*>\s*<\/div>/,
  overlay
)

writeFileSync(path, h)
console.log('personalized', h.length, 'overlay', h.includes('REZA NABAVI') && h.includes('reza-name') || h.includes('@shibainuo'))
