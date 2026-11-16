import { useEffect, useState } from 'react';
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

function getInitialLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'ka' || saved === 'en') {
      return saved;
    }
  } catch {
    // Ignore storage access errors in restricted frames
  }
  return 'en';
}

export default function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);
  const content = SITE_CONTENT[language];

  useEffect(() => {
    document.documentElement.lang = language;
    document.title = content.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', content.meta.description);
    }
    try {
      window.localStorage.setItem(STORAGE_KEY, language);
    } catch {
      // Ignore storage access errors
    }
  }, [language, content.meta.title, content.meta.description]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#050806] text-white">
        <Navbar
          language={language}
          onLanguageChange={setLanguage}
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
          onLanguageChange={setLanguage}
          content={content.footer}
          nav={content.nav}
        />
      </div>
    </MotionConfig>
  );
}
