# narrative.toolchain.64hz.cn — the DreamNarrative documentation site

中英文文档都在插件仓库维护。AI 配置留在本站，翻译 PR 开到插件仓库，人工合并后网站同步发布；见 [DOCS_SYNC.md](DOCS_SYNC.md)。

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
and are generated from the plugin’s `Docs/zh-CN/` after translation PRs are reviewed and merged in the plugin repository. AI settings remain on this website, and website-only notes stay after `<!-- docs-sync:notes -->`. The old `gen-diagnostics.mjs` is historical;
use [DOCS_SYNC.md](DOCS_SYNC.md).

## Deploying

```bash
cp .env.example .env       # fill in SFTP_PASSWORD or SFTP_KEY_PATH
npm run deploy:sftp        # build, then upload out/ to /www/wwwroot/narrative.toolchain.64hz.cn
```
