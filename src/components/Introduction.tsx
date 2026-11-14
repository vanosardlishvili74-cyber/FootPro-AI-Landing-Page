import { motion, useReducedMotion } from 'motion/react';
import turfDetailImg from '../assets/images/training_turf_detail_1794571560796.jpg';
import { SiteContent } from '../data/content';

interface IntroductionProps {
  content: SiteContent['intro'];
}

export function Introduction({ content }: IntroductionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="border-t border-[#14231A] bg-[#050806] py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Narrative & Pillars */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between lg:col-span-7"
          >
            <div>
              <p className="text-sm font-medium text-[#16F572]">{content.kicker}</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.06] text-balance">
                {content.heading}
              </h2>
              <p className="mt-5 text-base font-medium leading-relaxed text-[#E3ECE6] sm:text-lg">
                {content.lead}
              </p>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#A3B5AA]">
                {content.body}
              </p>
            </div>

            <div className="mt-10 divide-y divide-[#16281D] border-t border-b border-[#16281D]">
              {content.pillars.map((pillar) => (
                <div key={pillar.index} className="grid grid-cols-1 gap-2 py-5 sm:grid-cols-12 sm:gap-4">
                  <div className="sm:col-span-4">
                    <span className="text-xs font-semibold tabular-nums text-[#16F572]">
                      {pillar.index}.
                    </span>
                    <h3 className="mt-1 text-base font-semibold text-white">{pillar.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#A3B5AA] sm:col-span-8">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Editorial Photography Panel */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.35, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-[#1B3123] bg-gradient-to-br from-[#0D1A12] via-[#09120C] to-[#050806]">
              <img
                src={turfDetailImg}
                alt={content.imageAlt}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="h-full w-full object-cover object-center lg:h-full"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#050806]/60 via-transparent to-transparent"
                aria-hidden="true"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
