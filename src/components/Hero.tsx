import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import heroPitchImg from '../assets/images/hero_stadium_pitch_1794571560317.jpg';
import { SiteContent, WEB_APP_URL } from '../data/content';

interface HeroProps {
  content: SiteContent['hero'];
}

export function Hero({ content }: HeroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[calc(100svh-4rem)] max-h-[880px] items-center overflow-hidden bg-[#050806]"
    >
      {/* Background atmospheric stadium pitch visual with measured dark scrim */}
      <div className="absolute inset-0 -z-10">
        <img
          src={heroPitchImg}
          alt=""
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover object-center opacity-65"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#050806]/80 via-[#050806]/60 to-[#050806]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-[#050806]/90 via-[#050806]/55 to-transparent"
          aria-hidden="true"
        />
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="text-sm font-medium tracking-wide text-[#16F572]">
            {content.kicker}
          </p>

          <h1 className="mt-4 font-display text-[clamp(2.75rem,6.5vw,5rem)] font-bold leading-[0.98] tracking-tight text-white text-balance">
            {content.headline}
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#D0DDD5] sm:text-lg">
            {content.subheadline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-[#16F572] px-6 py-3 text-sm font-semibold text-[#050806] whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#2BFF84]"
            >
              <span>{content.primaryCta}</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </a>

            <a
              href="#features"
              className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-[#244030] bg-[#0B140F]/85 px-6 py-3 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-[#16F572]/60 hover:bg-[#101E16]"
            >
              <span>{content.secondaryCta}</span>
              <ChevronDown className="h-4 w-4 text-[#16F572]" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-6 text-xs text-[#9BB0A3] sm:text-sm">
            {content.availabilityNote}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
