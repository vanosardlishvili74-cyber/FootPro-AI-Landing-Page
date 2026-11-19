import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { DownloadSection } from './components/DownloadSection';
import { FeaturesSection } from './components/FeaturesSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Navbar } from './components/Navbar';
import { Language, SITE_CONTENT } from './data/content';

const STORAGE_KEY = 'footpro_ai_site_lang';

function getLanguageFromPath(pathname: string): Language {
  return /^\/ka(\/|$)/.test(pathname) ? 'ka' : 'en';
}

function getPathForLanguage(lang: Language, hash: string): string {
  const basePath = lang === 'ka' ? '/ka/' : '/';
  return hash ? `${basePath}${hash}` : basePath;
}

function setMetaContent(selector: string, content: string) {
  const el = document.querySelector(selector);
  if (el) {
    el.setAttribute('content', content);
  }
}

export default function App() {
  const [language, setLanguage] = useState<Language>(() =>
    getLanguageFromPath(window.location.pathname)
  );
  const content = SITE_CONTENT[language];

  const handleLanguageChange = useCallback(
    (nextLang: Language) => {
      if (nextLang === language) return;

      setLanguage(nextLang);

      const targetUrl = getPathForLanguage(nextLang, window.location.hash);
      if (window.location.pathname + window.location.hash !== targetUrl) {
        window.history.pushState({ language: nextLang }, '', targetUrl);
      }
    },
    [language]
  );

  useEffect(() => {
    const handlePopState = () => {
      setLanguage(getLanguageFromPath(window.location.pathname));
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.meta.title;

    setMetaContent('meta[name="description"]', content.meta.description);
    setMetaContent('meta[property="og:title"]', content.meta.title);
    setMetaContent('meta[property="og:description"]', content.meta.description);
    setMetaContent('meta[property="og:url"]', content.meta.canonicalUrl);
    setMetaContent('meta[property="og:locale"]', content.meta.ogLocale);
    setMetaContent('meta[property="og:locale:alternate"]', content.meta.ogAlternateLocale);
    setMetaContent('meta[name="twitter:title"]', content.meta.title);
    setMetaContent('meta[name="twitter:description"]', content.meta.description);
    setMetaContent('meta[name="twitter:url"]', content.meta.canonicalUrl);

    const canonicalEl = document.querySelector('link[rel="canonical"]');
    if (canonicalEl) {
      canonicalEl.setAttribute('href', content.meta.canonicalUrl);
    }

    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage access errors
    }
  }, [language, content.meta]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050806] text-white">
        <Navbar
          language={language}
          onLanguageChange={handleLanguageChange}
          content={content.nav}
        />

        <main>
          <Hero content={content.hero} />
          <Introduction content={content.intro} />
          <FeaturesSection content={content.features} />
          <GallerySection content={content.gallery} />
          <DownloadSection content={content.download} />
        </main>

        <Footer
          language={language}
          onLanguageChange={handleLanguageChange}
          content={content.footer}
          nav={content.nav}
        />
      </div>
    </MotionConfig>
  );
}
