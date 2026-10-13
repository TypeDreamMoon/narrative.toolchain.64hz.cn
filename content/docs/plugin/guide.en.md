---
title: "DreamNarrative guide"
description: "Installation, authoring, integration, testing and staging."
---

# DreamNarrative guide

Write stories, quests, chapters, dialogue and stages in `.dna` text. The compiler turns them into assets,
the runtime executes them, and the editor presents a projection of the text.
This guide covers installation, authoring a story, game integration, testing and staging.
See the [architecture decisions](/en/docs/plugin/architecture) for the reasoning, the
[diagnostic reference](/en/docs/plugin/diagnostics) for every error code, and
[Lighthouse](https://github.com/TypeDreamMoon/DreamNarrative/blob/d48e14e6ef1103a9ca13702a8d1e17e98c2a88a5/Examples/Lighthouse/%E7%81%AF%E5%A1%94.dna) for a complete original example. Chinese identifiers and dialogue in the
examples are intentional: the language supports Unicode names and multilingual narrative text.

## Read the guide

1. [Install the plugin](/en/docs/start/install).
2. [Write your first story](/en/docs/start/first-story), then use the [language reference](/en/docs/language).
3. [Author a stage](/en/docs/stage) and use the [timeline and generators](/en/docs/stage/editing).
4. [Integrate the runtime and voice](/en/docs/runtime), with the optional [GAS bridge](/en/docs/runtime/gas).
5. [Write tests and explore paths](/en/docs/language/tests); run them with [dnc](/en/docs/tools/dnc).
6. Use the [editor](/en/docs/tools/editor), [localization tools](/en/docs/tools/localization) and [VS Code extension](/en/docs/tools/vscode).

Each topic has one maintained source page. This overview replaces the former combined guide without
duplicating those chapters.
