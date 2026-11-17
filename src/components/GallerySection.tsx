import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import homeDashboardImg from '../assets/images/screenshots/01_home_dashboard.webp';
import matchHistoryImg from '../assets/images/screenshots/02_match_history.webp';
import playerProfileImg from '../assets/images/screenshots/03_player_profile.webp';
import trainingTimerImg from '../assets/images/screenshots/04_training_timer.webp';
import aiCoachImg from '../assets/images/screenshots/05_ai_coach.webp';
import { GalleryScreenId, SiteContent } from '../data/content';
import { Modal } from './Modal';

interface GallerySectionProps {
  content: SiteContent['gallery'];
}

const SCREENSHOT_IMAGES: Record<GalleryScreenId, string> = {
  'home-dashboard': homeDashboardImg,
  'match-history': matchHistoryImg,
  'player-profile': playerProfileImg,
  'training-timer': trainingTimerImg,
  'ai-coach': aiCoachImg,
};

export function GallerySection({ content }: GallerySectionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const totalSlots = content.slots.length;
  const selectedSlot = selectedIndex !== null ? content.slots[selectedIndex] : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev === null ? null : (prev + 1) % totalSlots));
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev === null ? null : (prev - 1 + totalSlots) % totalSlots));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, totalSlots]);

  const scrollMobileCarouselTo = (targetIdx: number) => {
    const clamped = (targetIdx + totalSlots) % totalSlots;
    setCarouselIndex(clamped);

    const container = carouselRef.current;
    if (!container) return;
    const card = container.children.item(clamped) as HTMLElement | null;
    if (!card) return;

    container.scrollTo({
      left: card.offsetLeft - container.offsetLeft,
      behavior: shouldReduceMotion ? 'auto' : 'smooth',
    });
  };

  const handleMobileScroll = () => {
    const container = carouselRef.current;
    if (!container) return;
    const scrollLeft = container.scrollLeft;
    let closestIndex = 0;
    let closestDist = Infinity;

    Array.from(container.children).forEach((child, idx) => {
      const el = child as HTMLElement;
      const dist = Math.abs(el.offsetLeft - container.offsetLeft - scrollLeft);
      if (dist < closestDist) {
        closestDist = dist;
        closestIndex = idx;
      }
    });

    if (closestIndex !== carouselIndex) {
      setCarouselIndex(closestIndex);
    }
  };

  return (
    <section id="gallery" className="border-t border-[#14231A] bg-[#050806] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-[#16F572]">{content.kicker}</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06] text-balance">
              {content.heading}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#A3B5AA]">
              {content.subtitle}
            </p>
          </div>

          {/* Mobile/Tablet Carousel Controls */}
          <div className="flex items-center gap-3 self-start md:hidden">
            <span className="text-xs font-semibold tabular-nums text-[#9CB0A3]">
              0{carouselIndex + 1} / 0{totalSlots}
            </span>
            <div className="inline-flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scrollMobileCarouselTo(carouselIndex - 1)}
                aria-label={content.previousLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2F23] bg-[#0B140F] text-white transition-colors duration-150 hover:border-[#16F572]/50 hover:text-[#16F572]"
              >
                <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scrollMobileCarouselTo(carouselIndex + 1)}
                aria-label={content.nextLabel}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#1B2F23] bg-[#0B140F] text-white transition-colors duration-150 hover:border-[#16F572]/50 hover:text-[#16F572]"
              >
                <ChevronRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile: Swipeable Snap Carousel | Tablet/Desktop: Responsive Grid */}
        <div
          ref={carouselRef}
          onScroll={handleMobileScroll}
          className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:gap-5 md:overflow-visible md:pb-0 lg:grid-cols-5"
        >
          {content.slots.map((slot, idx) => {
            const imgSrc = SCREENSHOT_IMAGES[slot.id];

            return (
              <motion.button
                key={slot.id}
                type="button"
                onClick={() => setSelectedIndex(idx)}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.28,
                  delay: shouldReduceMotion ? 0 : Math.min(idx * 0.04, 0.2),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex w-[76vw] max-w-[290px] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-[#192E21] bg-[#09120D] text-left transition-colors duration-150 hover:border-[#16F572]/55 hover:bg-[#0D1A12] md:w-auto md:max-w-none"
              >
                {/* Portrait Device Frame preserving exact 1080x2282 screenshot ratio */}
                <div className="relative w-full border-b border-[#16281D] bg-[#040705] p-2.5 sm:p-3">
                  <div className="relative aspect-[1080/2282] w-full overflow-hidden rounded-xl border border-[#1B3325] bg-[#050806]">
                    <img
                      src={imgSrc}
                      alt={slot.alt}
                      width={720}
                      height={1521}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="h-full w-full object-contain transition-transform duration-200 group-hover:scale-[1.015]"
                    />
                  </div>

                  <div className="absolute right-4 top-4 inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#1E3628] bg-[#0B140F]/90 text-[#9EB2A6] transition-colors duration-150 group-hover:border-[#16F572]/50 group-hover:text-[#16F572]">
                    <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                  </div>
                </div>

                {/* Screen Metadata & Caption */}
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-[#8DA296]">
                      <span className="tabular-nums font-semibold text-[#16F572]">
                        {slot.index}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{slot.shortLabel}</span>
                    </div>
                    <h3 className="mt-1.5 font-display text-xl font-bold tracking-tight text-white">
                      {slot.title}
                    </h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-[#A3B5AA] sm:text-sm">
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

      {/* Full-Screen Screenshot Lightbox Modal */}
      <Modal
        isOpen={selectedSlot !== null}
        onClose={() => setSelectedIndex(null)}
        title={selectedSlot ? `${selectedSlot.index}. ${selectedSlot.title}` : ''}
        closeLabel={content.modalClose}
      >
        {selectedSlot && selectedIndex !== null && (
          <div>
            <div className="flex justify-center rounded-xl border border-[#1A3022] bg-[#040705] p-3 sm:p-4">
              <img
                src={SCREENSHOT_IMAGES[selectedSlot.id]}
                alt={selectedSlot.alt}
                width={720}
                height={1521}
                decoding="async"
                referrerPolicy="no-referrer"
                className="max-h-[62vh] w-auto rounded-xl border border-[#1B3325] object-contain"
              />
            </div>

            <p className="mt-4 text-sm leading-relaxed text-[#C2D0C7]">
              {selectedSlot.caption}
            </p>

            <div className="mt-5 flex items-center justify-between gap-3 border-t border-[#1A2E22] pt-4">
              <div className="inline-flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setSelectedIndex((selectedIndex - 1 + totalSlots) % totalSlots)}
                  aria-label={content.previousLabel}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#203829] bg-[#0F1C14] text-white transition-colors duration-150 hover:border-[#16F572]/50 hover:text-[#16F572]"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <span className="min-w-[3.5rem] text-center text-xs font-semibold tabular-nums text-[#9CB0A3]">
                  0{selectedIndex + 1} / 0{totalSlots}
                </span>
                <button
                  type="button"
                  onClick={() => setSelectedIndex((selectedIndex + 1) % totalSlots)}
                  aria-label={content.nextLabel}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#203829] bg-[#0F1C14] text-white transition-colors duration-150 hover:border-[#16F572]/50 hover:text-[#16F572]"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              <button
                type="button"
                onClick={() => setSelectedIndex(null)}
                className="min-h-[40px] rounded-lg bg-[#16F572] px-5 py-2 text-xs font-semibold text-[#050806] transition-colors duration-150 hover:bg-[#2BFF84]"
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
