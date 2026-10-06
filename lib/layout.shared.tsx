import type { HomeLayoutProps } from 'fumadocs-ui/layouts/home';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import type { Locale } from './i18n';
import { localizedPath } from './i18n';
import { GITHUB_URL, VSCODE_EXTENSION_URL } from './site';

function DreamNarrativeTitle() {
  return (
    <span className="dna-brand" aria-label="DreamNarrative">
      DreamNarrative
    </span>
  );
}

export function baseOptions(locale: Locale = 'zh'): BaseLayoutProps {
  return {
    nav: {
      title: <DreamNarrativeTitle />,
      url: localizedPath(locale, '/'),
    },
  };
}

/** Props for the home page's layout. */
export function homeOptions(locale: Locale): HomeLayoutProps {
  return {
    ...baseOptions(locale),
    githubUrl: GITHUB_URL,
    links: [
      { text: '文档', url: localizedPath(locale, '/docs'), active: 'nested-url' },
      { text: '语言', url: localizedPath(locale, '/docs/language'), active: 'nested-url' },
      { text: '演出', url: localizedPath(locale, '/docs/stage'), active: 'nested-url' },
      { text: '诊断码', url: localizedPath(locale, '/docs/diagnostics'), active: 'nested-url' },
      { text: 'VS Code', url: VSCODE_EXTENSION_URL, external: true },
    ],
  };
}
