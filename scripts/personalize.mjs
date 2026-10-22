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

// COMPLETELY replace options preview — no Bruno image at all
const newPreview = `<div class="js-preview preview options-preview" style="position:relative;overflow:hidden;background:linear-gradient(145deg,#1a1528 0%,#2d1f4e 45%,#3b2066 100%);display:flex;align-items:center;justify-content:center;">
                            <div style="text-align:center;padding:24px;">
                                <div style="color:#fff;font-weight:900;font-size:clamp(22px,5vw,40px);font-family:Nunito,Arial,sans-serif;letter-spacing:0.06em;text-shadow:0 4px 20px rgba(214,111,255,0.45);">REZA NABAVI</div>
                                <div style="color:#D66FFF;font-weight:700;font-size:clamp(13px,2.5vw,18px);font-family:Nunito,Arial,sans-serif;margin-top:10px;">🇮🇷 Creative Developer</div>
                                <div style="color:rgba(255,255,255,0.75);font-weight:600;font-size:clamp(12px,2vw,15px);font-family:Nunito,Arial,sans-serif;margin-top:8px;">Telegram @shibainuo</div>
                            </div>
                        </div>`

h = h.replace(
  /<div class="js-preview preview options-preview"[^>]*>[\s\S]*?<\/div>/,
  newPreview
)

// Also strip any leftover options.webp references in that block
h = h.replace(/ui\/previews\/options\.webp/g, 'ui/previews/home.webp')

writeFileSync(path, h)
console.log('personalized', h.length)
console.log('has Bruno img in options?', /options-preview[\s\S]{0,200}options\.webp/.test(h))
console.log('has REZA block', h.includes('REZA NABAVI'))
