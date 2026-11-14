import { useState } from 'react';
import { ArrowUpRight, Check, Clock, Globe, Smartphone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { SiteContent, WEB_APP_URL } from '../data/content';
import { Modal } from './Modal';

interface DownloadSectionProps {
  content: SiteContent['download'];
}

export function DownloadSection({ content }: DownloadSectionProps) {
  const [androidModalOpen, setAndroidModalOpen] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="download" className="border-t border-[#14231A] bg-[#070D09] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium text-[#16F572]">{content.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06] text-balance">
            {content.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#A3B5AA]">
            {content.subtitle}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Web App Card — Live */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between rounded-2xl border border-[#234731] bg-[#0D1A12] p-7 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold text-[#16F572]">
                  {content.webCard.status}
                </p>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#234731] bg-[#13261A] text-[#16F572]">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {content.webCard.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-[#C2D0C7] sm:text-base">
                {content.webCard.description}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-[#1D3827] pt-5">
                {content.webCard.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#E0EAE4]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#16F572]" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg bg-[#16F572] px-6 py-3 text-sm font-semibold text-[#050806] transition-colors duration-150 hover:bg-[#2BFF84] sm:w-auto"
              >
                <span>{content.webCard.cta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <p className="mt-3 text-xs text-[#8FA497]">{content.webCard.urlNote}</p>
            </div>
          </motion.div>

          {/* Android App Card — Coming Soon (no fake APK) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.3,
              delay: shouldReduceMotion ? 0 : 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="flex flex-col justify-between rounded-2xl border border-[#192D21] bg-[#0A120D] p-7 sm:p-8"
          >
            <div>
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold text-[#9CB0A3]">
                  {content.androidCard.status}
                </p>
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#1E3427] bg-[#0F1B14] text-[#9CB0A3]">
                  <Smartphone className="h-5 w-5" aria-hidden="true" />
                </div>
              </div>

              <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {content.androidCard.title}
              </h3>

              <p className="mt-2 inline-flex items-center gap-2 text-sm font-semibold text-[#16F572]">
                <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{content.androidCard.badgeText}</span>
              </p>

              <p className="mt-3 text-sm leading-relaxed text-[#A3B5AA] sm:text-base">
                {content.androidCard.description}
              </p>

              <ul className="mt-6 space-y-2.5 border-t border-[#182B1F] pt-5">
                {content.androidCard.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-sm text-[#C1CFC6]">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#7A9183]" aria-hidden="true" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={() => setAndroidModalOpen(true)}
                className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-lg border border-[#244030] bg-[#101D15] px-6 py-3 text-sm font-semibold text-white transition-colors duration-150 hover:border-[#16F572]/55 hover:bg-[#14251B] sm:w-auto"
              >
                <span>{content.androidCard.cta}</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Android Browser Usage Guide Modal */}
      <Modal
        isOpen={androidModalOpen}
        onClose={() => setAndroidModalOpen(false)}
        title={content.androidCard.modalTitle}
        closeLabel={content.androidCard.modalClose}
      >
        <div>
          <p className="text-sm leading-relaxed text-[#C2D0C7] sm:text-base">
            {content.androidCard.modalBody}
          </p>

          <ol className="mt-5 space-y-3 border-t border-[#1A2E22] pt-5">
            {content.androidCard.modalSteps.map((step, idx) => (
              <li key={step} className="flex items-start gap-3 text-sm text-[#E2EBE5]">
                <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-[#244230] bg-[#101F16] text-xs font-semibold tabular-nums text-[#16F572]">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => setAndroidModalOpen(false)}
              className="min-h-[42px] rounded-lg border border-[#203829] bg-[#0F1C14] px-4 py-2 text-xs font-semibold text-[#C2D0C7] transition-colors duration-150 hover:text-white"
            >
              {content.androidCard.modalClose}
            </button>
            <a
              href={WEB_APP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-[#16F572] px-5 py-2 text-xs font-semibold text-[#050806] transition-colors duration-150 hover:bg-[#2BFF84]"
            >
              <span>{content.androidCard.modalPrimaryCta}</span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </Modal>
    </section>
  );
}
