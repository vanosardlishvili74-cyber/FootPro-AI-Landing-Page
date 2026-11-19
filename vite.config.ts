import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import fs from 'node:fs';
import path from 'node:path';
import {defineConfig, type Plugin} from 'vite';

const KA_TITLE = 'FootPro AI — საფეხბურთო ვარჯიშისა და პერფორმანსის პლატფორმა';
const KA_DESCRIPTION =
  'FootPro AI აერთიანებს საფეხბურთო ვარჯიშის ტაიმერს, მოთამაშის ანალიტიკას, პირად მიზნებს, ტაქტიკურ სწავლებას, კვირის გეგმასა და AI მწვრთნელს.';
const KA_KEYWORDS =
  'FootPro AI, საფეხბურთო ვარჯიში, მოთამაშის ანალიტიკა, პერფორმანსის კონტროლი, პირადი მიზნები, ტაქტიკური სწავლება, AI მწვრთნელი, ვარჯიშის ტაიმერი, კვირის გეგმა';
const EN_CANONICAL = 'https://footpro-ai-website.onrender.com/';
const KA_CANONICAL = 'https://footpro-ai-website.onrender.com/ka/';
const EN_TITLE = 'FootPro AI — Your Football Training &amp; Performance Platform';
const EN_DESCRIPTION =
  'FootPro AI delivers football training timers, player performance analytics, personal goals, tactical learning, weekly planning, and an AI Coach.';

function replaceMetaBlock(
  html: string,
  pattern: RegExp,
  replacement: string,
  label: string
): string {
  if (!pattern.test(html)) {
    throw new Error(`[bilingual-seo] Missing expected ${label} in built index.html`);
  }
  return html.replace(pattern, replacement);
}

function generateGeorgianHtmlPlugin(): Plugin {
  let outDir = 'dist';

  return {
    name: 'footpro-bilingual-ka-html',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir;
    },
    closeBundle() {
      const distRoot = path.resolve(__dirname, outDir);
      const enHtmlPath = path.join(distRoot, 'index.html');
      if (!fs.existsSync(enHtmlPath)) {
        throw new Error(`[bilingual-seo] Built index.html not found at ${enHtmlPath}`);
      }

      let kaHtml = fs.readFileSync(enHtmlPath, 'utf8');

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<html\s+lang="en"/,
        '<html lang="ka"',
        '<html lang="en">'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<title>[\s\S]*?<\/title>/,
        `<title>${KA_TITLE}</title>`,
        '<title>'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+name="description"[\s\S]*?content="[^"]*"\s*\/>/,
        `<meta name="description" content="${KA_DESCRIPTION}" />`,
        'meta[name="description"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+name="keywords"[\s\S]*?content="[^"]*"\s*\/>/,
        `<meta name="keywords" content="${KA_KEYWORDS}" />`,
        'meta[name="keywords"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<link\s+rel="canonical"\s+href="https:\/\/footpro-ai-website\.onrender\.com\/"\s*\/>/,
        `<link rel="canonical" href="${KA_CANONICAL}" />`,
        'link[rel="canonical"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+property="og:locale"\s+content="en_US"\s*\/>/,
        '<meta property="og:locale" content="ka_GE" />',
        'meta[property="og:locale"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+property="og:locale:alternate"\s+content="ka_GE"\s*\/>/,
        '<meta property="og:locale:alternate" content="en_US" />',
        'meta[property="og:locale:alternate"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+property="og:title"\s+content="[^"]*"\s*\/>/,
        `<meta property="og:title" content="${KA_TITLE}" />`,
        'meta[property="og:title"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+property="og:description"[\s\S]*?content="[^"]*"\s*\/>/,
        `<meta property="og:description" content="${KA_DESCRIPTION}" />`,
        'meta[property="og:description"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+property="og:url"\s+content="[^"]*"\s*\/>/,
        `<meta property="og:url" content="${KA_CANONICAL}" />`,
        'meta[property="og:url"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+name="twitter:url"\s+content="[^"]*"\s*\/>/,
        `<meta name="twitter:url" content="${KA_CANONICAL}" />`,
        'meta[name="twitter:url"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+name="twitter:title"\s+content="[^"]*"\s*\/>/,
        `<meta name="twitter:title" content="${KA_TITLE}" />`,
        'meta[name="twitter:title"]'
      );

      kaHtml = replaceMetaBlock(
        kaHtml,
        /<meta\s+name="twitter:description"[\s\S]*?content="[^"]*"\s*\/>/,
        `<meta name="twitter:description" content="${KA_DESCRIPTION}" />`,
        'meta[name="twitter:description"]'
      );

      kaHtml = kaHtml.replace(
        `"description": "${EN_DESCRIPTION}"`,
        `"description": "${KA_DESCRIPTION}"`
      );
      kaHtml = kaHtml.replace(
        `"inLanguage": ["en", "ka"]`,
        `"inLanguage": ["ka", "en"]`
      );
      kaHtml = kaHtml.replace(
        `"@id": "${EN_CANONICAL}#website",\n            "name": "FootPro AI",\n            "url": "${EN_CANONICAL}"`,
        `"@id": "${KA_CANONICAL}#website",\n            "name": "FootPro AI",\n            "url": "${KA_CANONICAL}"`
      );

      // Keep EN_TITLE referenced for sanity check
      void EN_TITLE;

      const kaDir = path.join(distRoot, 'ka');
      fs.mkdirSync(kaDir, {recursive: true});
      fs.writeFileSync(path.join(kaDir, 'index.html'), kaHtml, 'utf8');
    },
  };
}

export default defineConfig(() => {
  return {
    publicDir: 'public',
    plugins: [react(), tailwindcss(), generateGeorgianHtmlPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
