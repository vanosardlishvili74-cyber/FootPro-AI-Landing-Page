import { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Language, SiteContent, WEB_APP_URL } from '../data/content';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  content: SiteContent['nav'];
}

export function Navbar({ language, onLanguageChange, content }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const navLinks = [
    { href: '#about', label: content.overview },
    { href: '#features', label: content.features },
    { href: '#gallery', label: content.gallery },
    { href: '#download', label: content.download },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#16271D] bg-[#050806]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8 lg:px-8">
        {/* Zone 1: Single-line brand wordmark */}
        <a
          href="#top"
          onClick={handleLinkClick}
          className="inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 text-white transition-opacity duration-150 hover:opacity-90"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="shrink-0"
          >
            <rect x="1" y="1" width="26" height="26" rx="6" fill="#0D1912" stroke="#1E3828" strokeWidth="1.5" />
            <circle cx="14" cy="14" r="6" stroke="#16F572" strokeWidth="1.75" />
            <path d="M14 4V8M14 20V24M4 14H8M20 14H24" stroke="#16F572" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="14" cy="14" r="1.75" fill="#16F572" />
          </svg>
          <span className="font-display text-xl font-bold tracking-tight text-white">
            FootPro <span className="text-[#16F572]">AI</span>
          </span>
        </a>

        {/* Zone 2: Concise single-line nav links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative py-1 text-sm font-medium text-[#B3C2B9] whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-white after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-[#16F572] after:transition-transform after:duration-200 hover:after:scale-x-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language switcher + Primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <div
            role="group"
            aria-label={content.languageLabel}
            className="inline-flex items-center rounded-lg border border-[#1B2F23] bg-[#0B130E] p-0.5"
          >
            <button
              type="button"
              onClick={() => onLanguageChange('en')}
              aria-pressed={language === 'en'}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                language === 'en'
                  ? 'bg-[#16F572] text-[#050806]'
                  : 'text-[#9FB0A6] hover:text-white'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange('ka')}
              aria-pressed={language === 'ka'}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-md transition-colors duration-150 whitespace-nowrap shrink-0 ${
                language === 'ka'
                  ? 'bg-[#16F572] text-[#050806]'
                  : 'text-[#9FB0A6] hover:text-white'
              }`}
            >
              KA
            </button>
          </div>

          <a
            href={WEB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-lg bg-[#16F572] px-4 py-2 text-xs font-semibold text-[#050806] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#2BFF84]"
          >
            <span>{content.openWebApp}</span>
            <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? content.closeMenu : content.openMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#1B2F23] bg-[#0B130E] text-white transition-colors duration-150 hover:border-[#16F572]/50 md:hidden"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -6 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.16, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-[#16271D] bg-[#070D0A] px-4 pb-5 pt-3 md:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={handleLinkClick}
                  className="flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium text-[#D6E0DA] transition-colors duration-150 hover:bg-[#0F1C14] hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-3 pt-3 border-t border-[#16271D]">
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick}
                className="flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#16F572] px-4 py-2.5 text-sm font-semibold text-[#050806] transition-colors duration-150 hover:bg-[#2BFF84]"
              >
                <span>{content.openWebApp}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
