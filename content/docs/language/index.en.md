---
title: "Language"
description: "Mix all top-level declarations in one source file."
---

- A file may mix `file`, `character`, `fact`, `chapter`, `quest`, `dialogue`, `stage`, `channel`,
  `event`, `archive`, `test` and `explore` blocks.
- **Names are unique across the project.** Characters, facts, dialogue, quests, chapters, stages,
  channels, events and archives share one namespace.
- Indentation defines nesting; `//` begins a comment. Chinese identifiers and full-width punctuation
  (`：`, `，`, `（）`) are supported.
- The editor projects text: story-view and timeline edits write back to source, leaving unedited
  lines byte-identical.

Start with [characters and facts](/en/docs/language/facts), [dialogue](/en/docs/language/dialogue), [channels and events](/en/docs/language/channels),
[quests](/en/docs/language/quests), [chapters](/en/docs/language/chapters), [archives](/en/docs/language/archives) and [expressions](/en/docs/language/expressions).
Every error has a `DNS` code documented in the [diagnostic reference](/en/docs/plugin/diagnostics).
