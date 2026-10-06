import { defineConfig, defineDocs } from 'fumadocs-mdx/config';
import dnaGrammar from './lib/dna.tmLanguage.json';

export const docs = defineDocs({
  dir: 'content/docs',
});

/**
 * ```dna fences are highlighted with the grammar the VS Code extension ships
 * (lib/dna.tmLanguage.json, copied from dreamnarrative-language-support/syntaxes), so the
 * docs colour a file exactly as the editor does.
 *
 * Lazy loading only ever loads the bundled languages, so a grammar of our own is
 * loaded by turning it off and naming every language the content uses: one the
 * list lacks fails the build with "Language `x` not found", which is the cue to
 * add it here. `text` needs no grammar.
 */
export default defineConfig({
  mdxOptions: {
    rehypeCodeOptions: {
      themes: {
        light: 'github-light',
        dark: 'github-dark',
      },
      lazy: false,
      langs: [
        { ...dnaGrammar, name: 'dna', aliases: ['dreamnarrative'] } as never,
        'cpp',
        'powershell',
        'bash',
        'ini',
        'json',
        'python',
        'ts',
        'tsx',
        'js',
        'yaml',
        'csharp',
      ],
    },
  },
});
