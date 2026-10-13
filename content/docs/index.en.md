---
title: "Overview"
description: "Stories, quests, chapters, dialogue and stages authored as text."
---

DreamNarrative is a narrative plugin for Unreal Engine 5.8. Stories, quests, chapters, dialogue and
stages live in `.dna` text; the compiler creates assets and the runtime executes them. Every edit
in the story view or stage timeline writes back to the corresponding source line.

Underneath is one **fact ledger**. Dialogue reads and writes it, quests observe it, chapters use it
as their gate, and saves, playthroughs and chapter selection operate on its scopes.

Text as the source of truth makes the whole story available to **static checks**, including dead
links, undeclared or unwritten facts, and reachability. **Tests** live beside the story in `test`
blocks. The **explorer** enumerates paths to find softlocks and other counterexamples.

- [Install the plugin](/en/docs/start/install)
- [Write your first story](/en/docs/start/first-story)
- [Language](/en/docs/language)
- [Stage language](/en/docs/stage)
- [Game integration](/en/docs/runtime)
- [Diagnostics](/en/docs/diagnostics)
