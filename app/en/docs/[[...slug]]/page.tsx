import { DocsPageContent, docsMetadata, docsStaticParams } from '@/lib/docs-page';
import type { Metadata } from 'next';

type Props = { params: Promise<{ slug?: string[] }> };

export function generateStaticParams() {
  return docsStaticParams('en');
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return docsMetadata('en', (await params).slug);
}

export default async function Page({ params }: Props) {
  return <DocsPageContent locale="en" slug={(await params).slug} />;
}
