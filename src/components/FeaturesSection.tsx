import { useState, type ComponentType } from 'react';
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  CalendarDays,
  Check,
  Compass,
  Target,
  Timer,
  UserCheck,
} from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import {
  FeatureCategory,
  FeatureItem,
  SiteContent,
  WEB_APP_URL,
} from '../data/content';
import { Modal } from './Modal';

interface FeaturesSectionProps {
  content: SiteContent['features'];
}

const FEATURE_ICONS: Record<string, ComponentType<{ className?: string }>> = {
  'ai-coach': BrainCircuit,
  'performance-analytics': BarChart3,
  'player-profile': UserCheck,
  'personal-goals': Target,
  'training-timer': Timer,
  'tactical-learning': Compass,
  'weekly-planner': CalendarDays,
};

export function FeaturesSection({ content }: FeaturesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<FeatureCategory>('all');
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const filteredItems =
    activeFilter === 'all'
      ? content.items
      : content.items.filter((item) => item.category === activeFilter);

  const getColumnSpanClass = (index: number, total: number) => {
    if (total === 1) return 'md:col-span-2 lg:col-span-12';
    if (total === 2) return 'md:col-span-1 lg:col-span-6';
    if (total === 3) return 'md:col-span-1 lg:col-span-4';
    // 7 items Bento symmetry: 2 wide (6+6), 3 medium (4+4+4), 2 wide (6+6)
    if (index === 0 || index === 1 || index === 5 || index === 6) {
      return 'md:col-span-1 lg:col-span-6';
    }
    return 'md:col-span-1 lg:col-span-4';
  };

  return (
    <section id="features" className="border-t border-[#14231A] bg-[#070C09] py-20 sm:py-24 lg:py-28">
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
          </div>

          {/* Interactive category filter */}
          <div
            role="tablist"
            aria-label={content.kicker}
            className="flex flex-wrap items-center gap-1 self-start rounded-xl border border-[#1B2F23] bg-[#0B140F] p-1"
          >
            {content.filters.map((filter) => {
              const isActive = activeFilter === filter.id;
              return (
                <button
                  key={filter.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${
                    isActive
                      ? 'bg-[#16F572] text-[#050806]'
                      : 'text-[#A8B8AF] hover:bg-[#112017] hover:text-white'
                  }`}
                >
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-12">
          {filteredItems.map((item, idx) => {
            const Icon = FEATURE_ICONS[item.id] ?? Compass;
            const spanClass = getColumnSpanClass(idx, filteredItems.length);

            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setSelectedFeature(item)}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.28,
                  delay: shouldReduceMotion ? 0 : Math.min(idx * 0.04, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={`group flex flex-col justify-between rounded-2xl border border-[#192D21] bg-[#0B140F] p-6 sm:p-7 text-left transition-colors duration-150 hover:border-[#16F572]/50 hover:bg-[#0F1C14] ${spanClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-semibold tabular-nums text-[#8EA396]">
                      {item.index}.
                    </span>
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-[#1E3628] bg-[#112017] text-[#16F572] transition-colors duration-150 group-hover:border-[#16F572]/40">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                  </div>

                  <h3 className="mt-5 font-display text-2xl font-bold tracking-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#A3B5AA] sm:text-base">
                    {item.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#16F572]">
                  <span>{content.inspectLabel}</span>
                  <ArrowRight
                    className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Feature Inspection Modal */}
      <Modal
        isOpen={selectedFeature !== null}
        onClose={() => setSelectedFeature(null)}
        title={selectedFeature ? `${selectedFeature.index}. ${selectedFeature.title}` : ''}
        closeLabel={content.modalClose}
      >
        {selectedFeature && (
          <div>
            <p className="text-sm leading-relaxed text-[#C2D0C7] sm:text-base">
              {selectedFeature.detailDescription}
            </p>

            <div className="mt-6 border-t border-[#1A2E22] pt-5">
              <p className="text-xs font-semibold tracking-wide text-[#16F572]">
                {content.modalHighlightsTitle}
              </p>
              <ul className="mt-3 space-y-2.5">
                {selectedFeature.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2.5 text-sm text-[#E2EBE5]">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#16F572]"
                      aria-hidden="true"
                    />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-end gap-3">
              <button
                type="button"
                onClick={() => setSelectedFeature(null)}
                className="min-h-[42px] rounded-lg border border-[#203829] bg-[#0F1C14] px-4 py-2 text-xs font-semibold text-[#C2D0C7] transition-colors duration-150 hover:text-white"
              >
                {content.modalClose}
              </button>
              <a
                href={WEB_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[42px] items-center gap-1.5 rounded-lg bg-[#16F572] px-5 py-2 text-xs font-semibold text-[#050806] transition-colors duration-150 hover:bg-[#2BFF84]"
              >
                <span>{content.modalCta}</span>
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
