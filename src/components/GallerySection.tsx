import { useState } from 'react';
import { Expand, Image as ImageIcon, Monitor, Smartphone } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { GallerySlot, SiteContent } from '../data/content';
import { Modal } from './Modal';

interface GallerySectionProps {
  content: SiteContent['gallery'];
}

export function GallerySection({ content }: GallerySectionProps) {
  const [filter, setFilter] = useState<'all' | 'web' | 'mobile'>('all');
  const [selectedSlot, setSelectedSlot] = useState<GallerySlot | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const visibleSlots =
    filter === 'all'
      ? content.slots
      : content.slots.filter((slot) => slot.formFactor === filter);

  return (
    <section id="gallery" className="border-t border-[#14231A] bg-[#050806] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#16F572]">{content.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06] text-balance">
              {content.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#A3B5AA]">
              {content.subtitle}
            </p>
            <p className="mt-2.5 text-xs font-medium text-[#84998D]">
              {content.disclaimer}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={content.kicker}
            className="flex flex-wrap items-center gap-1 self-start rounded-xl border border-[#1B2F23] bg-[#0B140F] p-1"
          >
            {content.filters.map((item) => {
              const isActive = filter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setFilter(item.id)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#16F572] text-[#050806]'
                      : 'text-[#A8B8AF] hover:bg-[#112017] hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clearly Marked Placeholder Gallery Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleSlots.map((slot, idx) => {
            const FormIcon = slot.formFactor === 'mobile' ? Smartphone : Monitor;

            return (
              <motion.button
                key={slot.id}
                type="button"
                onClick={() => setSelectedSlot(slot)}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.28,
                  delay: shouldReduceMotion ? 0 : Math.min(idx * 0.04, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#1A2F22] bg-[#09110C] text-left transition-colors duration-150 hover:border-[#16F572]/50"
              >
                {/* Placeholder Frame Surface — clearly marked, zero invented UI */}
                <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-[#16281D] bg-[#070E0A]">
                  {/* Architectural wireframe pitch geometry */}
                  <svg
                    className="h-full w-full text-[#152B1E]"
                    viewBox="0 0 320 200"
                    fill="none"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <line x1="0" y1="50" x2="320" y2="50" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="0" y1="100" x2="320" y2="100" stroke="currentColor" strokeWidth="1" />
                    <line x1="0" y1="150" x2="320" y2="150" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
                    <line x1="160" y1="0" x2="160" y2="200" stroke="currentColor" strokeWidth="1" />
                    <circle cx="160" cy="100" r="34" stroke="currentColor" strokeWidth="1" />
                    <rect x="20" y="20" width="280" height="160" rx="8" stroke="currentColor" strokeWidth="1" strokeDasharray="6 6" />
                  </svg>

                  {/* Explicit placeholder overlay marker */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#213D2C] bg-[#0D1A12] text-[#16F572] transition-transform duration-150 group-hover:scale-105">
                      <ImageIcon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <p className="mt-3 text-xs font-semibold tracking-wide text-[#D8E5DD]">
                      {slot.placeholderLabel}
                    </p>
                    <p className="mt-1 text-[11px] text-[#83998C]">{slot.aspectSpec}</p>
                  </div>

                  <div className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#1E3628] bg-[#0B140F]/90 text-[#9EB2A6] transition-colors duration-150 group-hover:text-[#16F572]">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>

                {/* Slot Metadata */}
                <div className="flex flex-1 flex-col justify-between p-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs text-[#8DA296]">
                      <FormIcon className="h-3.5 w-3.5 text-[#16F572]" aria-hidden="true" />
                      <span>{slot.formFactorLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="tabular-nums">{slot.index}</span>
                    </div>
                    <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-white">
                      {slot.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#A3B5AA]">
                      {slot.caption}
                    </p>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-[#16F572]">
                    {content.inspectSlot}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Placeholder Detail Modal */}
      <Modal
        isOpen={selectedSlot !== null}
        onClose={() => setSelectedSlot(null)}
        title={selectedSlot ? selectedSlot.title : ''}
        closeLabel={content.modalClose}
      >
        {selectedSlot && (
          <div>
            <div className="rounded-xl border border-dashed border-[#284835] bg-[#070E0A] p-8 text-center">
              <ImageIcon className="mx-auto h-8 w-8 text-[#16F572]" aria-hidden="true" />
              <p className="mt-3 text-sm font-semibold text-white">
                {selectedSlot.placeholderLabel}
              </p>
              <p className="mt-1 text-xs text-[#91A69A]">{selectedSlot.aspectSpec}</p>
            </div>

            <div className="mt-5 space-y-2.5 border-t border-[#1A2E22] pt-4 text-sm">
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#8EA396]">{content.modalModuleLabel}</span>
                <span className="font-medium text-white">{selectedSlot.plannedModule}</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-[#8EA396]">{content.modalSpecLabel}</span>
                <span className="font-medium text-white">{selectedSlot.aspectSpec}</span>
              </div>
            </div>

            <p className="mt-4 text-xs leading-relaxed text-[#A3B5AA]">
              {content.modalPendingNotice}
            </p>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedSlot(null)}
                className="min-h-[42px] rounded-lg bg-[#16F572] px-5 py-2 text-xs font-semibold text-[#050806] transition-colors duration-150 hover:bg-[#2BFF84]"
              >
                {content.modalClose}
              </button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
