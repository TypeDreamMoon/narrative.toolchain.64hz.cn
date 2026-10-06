import { homeOptions } from '@/lib/layout.shared';
import { SITE_DESCRIPTION_ZH, VSCODE_EXTENSION_URL } from '@/lib/site';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

const sample = `dialogue 老周_初见 for 老周 if not 见过老周
  老周: 你就是新来的守夜人?
  - 我去修。
      accept 修灯
  - 先歇一会儿。
  set 见过老周 = true

quest 修灯
  objective 找到的零件 >= 3
    show: 零件 {找到的零件}/3
  on complete
    play 灯亮

test 零件齐了灯就亮
  accept 修灯
  set 找到的零件 = 3
  expect 修灯.completed`;

const points = [
  ['剧本即结构', '对话、任务、章节、频道、演出写在一个文本语言里;名字、类型、可达性全项目静态检查,每个诊断码都有解释。'],
  ['一本账', '一切状态都是账本里的 fact:对话读写它,任务观察它,章节以它为门,存档、周目、选章都只是它的作用域。'],
  ['测得了', '故事里直接写 test 块;探索器把所有走法穷举一遍找软锁;手玩一遍就能录成回放测试。'],
  ['演出是事务', '镜头、灯光、遮罩、HUD、时间、动画、关卡序列按时间轴编排;无论怎么被打断,世界都放回原样。'],
  ['编辑器是投影', '故事视图、演出时间轴的每次拖动都写回源码的那一行,格式与注释原样保留。'],
  ['接得上游戏', 'GAS 双向桥、能力任务演演出、关卡序列导入、DreamGameplayTask 迁移、VS Code 扩展。'],
];

export default function HomePage() {
  return (
    <HomeLayout {...homeOptions('zh')}>
      <main className="dna-home">
        <section className="dna-hero">
          <h1>DreamNarrative</h1>
          <p className="dna-lede">{SITE_DESCRIPTION_ZH}</p>
          <div className="dna-actions">
            <Link className="dna-button dna-button-primary" href="/docs/start/install">开始</Link>
            <Link className="dna-button" href="/docs/language">语言</Link>
            <a className="dna-button" href={VSCODE_EXTENSION_URL}>VS Code 扩展</a>
          </div>
        </section>
        <section className="dna-sample">
          <pre><code>{sample}</code></pre>
        </section>
        <section className="dna-points">
          {points.map(([title, text]) => (
            <div key={title} className="dna-point">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          ))}
        </section>
      </main>
    </HomeLayout>
  );
}
