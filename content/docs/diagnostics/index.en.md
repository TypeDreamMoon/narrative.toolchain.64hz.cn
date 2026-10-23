---
title: "Diagnostics"
description: "Diagnostic ranges and links to every code group."
---

| Range | Owner | Description |
| --- | --- | --- |
| 1000–1999 | Lexer | Invalid characters, unterminated strings, inconsistent indentation |
| 2000–2999 | Parser | Parse failures, unexpected tokens, invalid block structure |
| 3000–3999 | Names and references | Undeclared facts, missing nodes, duplicate IDs, missing jump targets |
| 4000–4999 | Expressions and types | Type mismatches, undefined operations, incomparable values |
| 5000–5999 | Graph and reachability | Dead links, unreachable branches or chapters, incomplete clue chains, orphaned content |
| 6000–6999 | Localization and assets | Duplicate localization keys, missing voice references, missing assets |
| 7000–7999 | Stage | Track timing outside bounds, unmasked camera cuts, missing restoration |
| 8000–8999 | Generation and write-back | Asset generation failure, source conflicts, round-trip differences |
| 9000–9999 | Toolchain | Command-line arguments, file access, watcher and multiple-editor conflicts |

## Read the codes

- [DNS1xxx — Lexer](/en/docs/diagnostics/dns1xxx)
- [DNS2xxx — Parser](/en/docs/diagnostics/dns2xxx)
- [DNS3xxx — Names and references](/en/docs/diagnostics/dns3xxx)
- [DNS4xxx — Expressions and types](/en/docs/diagnostics/dns4xxx)
- [DNS5xxx — Graph and reachability](/en/docs/diagnostics/dns5xxx)
- [DNS6xxx — Localization and assets](/en/docs/plugin/diagnostics#localization-and-assets)
- [DNS7xxx — Stage](/en/docs/diagnostics/dns7xxx)
- [DNS8xxx — Generation and write-back](/en/docs/diagnostics/dns8xxx)
- [DNS9xxx — Toolchain](/en/docs/diagnostics/dns9xxx)
