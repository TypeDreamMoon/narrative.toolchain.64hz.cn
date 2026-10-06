/**
 * Generates content/docs/diagnostics from the plugin's Docs/Diagnostics.md -- the one source of
 * every code's summary and explanation. One page per segment (DNS1xxx ... DNS9xxx), an index with the
 * segment table. Run after the plugin's code table changes:
 *
 *   node scripts/gen-diagnostics.mjs [path/to/Diagnostics.md]
 *
 * The default path is the plugin as it sits next to the test host on the author's machine.
 */
import fs from 'node:fs';
import path from 'node:path';

const source = process.argv[2] ?? 'I:/UnrealProject_Moon/DEV_58/DreamNarrativeTestHost/Plugins/DreamNarrative/Docs/Diagnostics.md';
const out = path.resolve('content/docs/diagnostics');
const text = fs.readFileSync(source, 'utf8').replace(/\r\n/g, '\n');

const segments = {
	1: ['词法', '非法字符、未闭合字符串、缩进不一致'],
	2: ['语法', '解析失败、意外的 token、块结构错误'],
	3: ['名字与引用', '未声明的名字、找不到的目标、重名'],
	4: ['表达式与类型', '类型不匹配、越界、不可比较'],
	5: ['图与可达性', '不可达、软锁、探索器的断言'],
	6: ['本地化与资源', '行 ID、配音、资产引用'],
	7: ['演出', '时序、遮罩、恢复、单位与时间基'],
	8: ['生成与写回', '资产生成失败、写回冲突'],
	9: ['工具链', '命令行、文件访问、测试与探索'],
};

/** MDX reads `{` and `<` as code; outside code spans they are escaped. */
function escapeProse(line) {
	return line
		.split(/(`[^`]*`)/g)
		.map((part) => (part.startsWith('`') ? part : part.replace(/[{}]/g, (c) => `\\${c}`).replace(/</g, '&lt;')))
		.join('');
}

const entries = [];
let current;
let inFence = false;
for (const line of text.split('\n')) {
	const heading = /^### (DNS(\d)\d{3})\s*$/.exec(line);
	if (heading && !inFence) {
		current = { code: heading[1], segment: Number(heading[2]), lines: [] };
		entries.push(current);
		continue;
	}
	if (/^## /.test(line) && !inFence) {
		current = undefined;
		continue;
	}
	if (!current) continue;
	if (line.startsWith('```')) inFence = !inFence;
	current.lines.push(inFence || line.startsWith('```') ? line : escapeProse(line.replace(/^\*\*中文散文\*\*[:：]/, '')));
}

fs.mkdirSync(out, { recursive: true });
const pages = ['index'];
for (const [digit, [title, summary]] of Object.entries(segments)) {
	const mine = entries.filter((entry) => entry.segment === Number(digit));
	if (mine.length === 0) continue;
	const name = `dns${digit}xxx`;
	pages.push(name);
	const body = mine.map((entry) => `## ${entry.code}\n\n${entry.lines.join('\n').trim()}\n`).join('\n');
	fs.writeFileSync(path.join(out, `${name}.mdx`),
		`---\ntitle: "DNS${digit}xxx · ${title}"\ndescription: "${summary}"\n---\n\n由 \`scripts/gen-diagnostics.mjs\` 从插件的 \`Docs/Diagnostics.md\` 生成。\n\n${body}`);
}
const rows = Object.entries(segments)
	.filter(([digit]) => entries.some((entry) => entry.segment === Number(digit)))
	.map(([digit, [title, summary]]) => `| [DNS${digit}xxx](/docs/diagnostics/dns${digit}xxx) | ${title} | ${summary} |`)
	.join('\n');
fs.writeFileSync(path.join(out, 'index.mdx'),
	`---\ntitle: 诊断码\ndescription: 编译器、校验器、测试与探索器报的每一个码。\n---\n\n` +
	`所有诊断码前缀 \`DNS\`,四位数字;码一旦发布不改语义。每条都说明什么情况下会报、为什么是错的、怎么改。\n\n` +
	`| 段 | 归属 | 说明 |\n|---|---|---|\n${rows}\n\n共 ${entries.length} 个码。\n`);
fs.writeFileSync(path.join(out, 'meta.json'), JSON.stringify({ title: '诊断码', pages }, null, 2) + '\n');
console.log(`${entries.length} codes into ${pages.length - 1} pages`);
