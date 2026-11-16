import { ArrowUpRight } from 'lucide-react';
import { Language, SiteContent, WEB_APP_URL } from '../data/content';
import footProLogo from '../assets/images/footpro-logo.webp';

interface FooterProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  content: SiteContent['footer'];
  nav: SiteContent['nav'];
}

export function Footer({ language, onLanguageChange, content, nav }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#15241B] bg-[#050806] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand Summary */}
          <div className="lg:col-span-5">
            <a
              href="#top"
              className="inline-flex items-center gap-2.5 text-white transition-opacity duration-150 hover:opacity-90"
            >
              <img
                src={footProLogo}
                alt=""
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                className="h-8 w-8 shrink-0 rounded-lg object-contain"
              />
              <span className="font-display text-xl font-bold tracking-tight">
                FootPro <span className="text-[#16F572]">AI</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#92A69A]">
              {content.description}
            </p>
          </div>

          {/* Navigation Mirror */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wide text-white">
              {content.navigationTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[#9CB0A3]">
              <li>
                <a href="#about" className="transition-colors duration-150 hover:text-white">
                  {nav.overview}
                </a>
              </li>
              <li>
                <a href="#features" className="transition-colors duration-150 hover:text-white">
                  {nav.features}
                </a>
              </li>
              <li>
                <a href="#gallery" className="transition-colors duration-150 hover:text-white">
                  {nav.gallery}
                </a>
              </li>
              <li>
                <a href="#download" className="transition-colors duration-150 hover:text-white">
                  {nav.download}
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Access */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold tracking-wide text-white">
              {content.accessTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a
                  href={WEB_APP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-medium text-[#16F572] transition-colors duration-150 hover:text-[#2BFF84]"
                >
                  <span>{content.webAppLink}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </li>
              <li className="text-[#92A69A]">{content.androidNote}</li>
            </ul>
          </div>

          {/* Language Selection */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-semibold tracking-wide text-white">
              {content.languageTitle}
            </h3>
            <div className="mt-4 flex flex-col items-start gap-2">
              <button
                type="button"
                onClick={() => onLanguageChange('en')}
                className={`text-sm transition-colors duration-150 ${
                  language === 'en'
                    ? 'font-semibold text-[#16F572]'
                    : 'text-[#9CB0A3] hover:text-white'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onLanguageChange('ka')}
                className={`text-sm transition-colors duration-150 ${
                  language === 'ka'
                    ? 'font-semibold text-[#16F572]'
                    : 'text-[#9CB0A3] hover:text-white'
                }`}
              >
                ქართული
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[#14231A] pt-6 text-xs text-[#7B9083]">
          <p>
            © {currentYear} {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
