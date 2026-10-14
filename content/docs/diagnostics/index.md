---
title: "诊断码"
description: "编译器、校验器、测试与探索器报的每一个码。"
---

所有诊断码前缀 `DNS`,四位数字;码一旦发布不改语义。每条都说明什么情况下会报、为什么是错的、怎么改。

| 段 | 归属 | 说明 |
|---|---|---|
| [DNS1xxx](/docs/diagnostics/dns1xxx) | 词法 | 非法字符、未闭合字符串、缩进不一致 |
| [DNS2xxx](/docs/diagnostics/dns2xxx) | 语法 | 解析失败、意外的 token、块结构错误 |
| [DNS3xxx](/docs/diagnostics/dns3xxx) | 名字与引用 | 未声明的名字、找不到的目标、重名 |
| [DNS4xxx](/docs/diagnostics/dns4xxx) | 表达式与类型 | 类型不匹配、越界、不可比较 |
| [DNS5xxx](/docs/diagnostics/dns5xxx) | 图与可达性 | 不可达、软锁、探索器的断言 |
| [DNS7xxx](/docs/diagnostics/dns7xxx) | 演出 | 时序、遮罩、恢复、单位与时间基 |
| [DNS8xxx](/docs/diagnostics/dns8xxx) | 生成与写回 | 资产生成失败、写回冲突 |
| [DNS9xxx](/docs/diagnostics/dns9xxx) | 工具链 | 命令行、文件访问、测试与探索 |

共 74 个码。
