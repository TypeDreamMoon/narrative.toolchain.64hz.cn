# narrative.toolchain.64hz.cn — the DreamNarrative documentation site

文档维护采用插件原文同步、AI 中文翻译 PR 与人工合并发布，配置见 [DOCS_SYNC.md](DOCS_SYNC.md)。

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

## Updating documentation

The canonical plugin sources are English Markdown, organized by topic under `Docs/` with a `Docs/README.md` index.
The unified pipeline publishes English pages under `/en/docs`; the existing Chinese pages keep their `/docs` URLs
and are updated through reviewed AI translation PRs. The old `gen-diagnostics.mjs` is historical;
use [DOCS_SYNC.md](DOCS_SYNC.md).

## Deploying

```bash
cp .env.example .env       # fill in SFTP_PASSWORD or SFTP_KEY_PATH
npm run deploy:sftp        # build, then upload out/ to /www/wwwroot/narrative.toolchain.64hz.cn
```
