# narrative.toolchain.64hz.cn — the DreamNarrative documentation site

The manual for [DreamNarrative](https://github.com/TypeDreamMoon/DreamNarrative): stories, quests, chapters,
dialogue and stages for Unreal Engine 5.8, authored as `.dna` text. Chinese.

Same stack as its sister sites (shader / fx / gui.toolchain.64hz.cn): Next.js + fumadocs, a static
export, an SFTP deploy. `.dna` fences are highlighted with the grammar the VS Code extension ships
(`lib/dna.tmLanguage.json`).

## Running it

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # static export into out/
```

## The diagnostics pages

`content/docs/diagnostics` is generated from the plugin's `Docs/Diagnostics.md`:

```bash
node scripts/gen-diagnostics.mjs path/to/DreamNarrative/Docs/Diagnostics.md
```

## Deploying

```bash
cp .env.example .env       # fill in SFTP_PASSWORD or SFTP_KEY_PATH
npm run deploy:sftp        # build, then upload out/ to /www/wwwroot/narrative.toolchain.64hz.cn
```
