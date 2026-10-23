import { DocsShell } from '@/lib/docs-layout';
import type { ReactNode } from 'react';

export default function EnglishDocsLayout({ children }: { children: ReactNode }) {
  return <DocsShell locale="en">{children}</DocsShell>;
}
