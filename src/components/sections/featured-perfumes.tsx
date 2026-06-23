"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { featuredPerfumes } from "@/lib/content";
import { useIsDesktop } from "@/lib/use-media";

export function FeaturedPerfumes() {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();
  const parallaxOn = isDesktop && !reduceMotion;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yTitleRaw = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yBgRaw = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const yTitle = parallaxOn ? yTitleRaw : undefined;
  const yBg = parallaxOn ? yBgRaw : undefined;

  return (
    <section
      id="kvepalai"
      ref={ref}
      className="relative bg-black py-32 md:py-44 overflow-hidden"
    >
      {/* Parallax decorative big text — desktop only.
          On mobile the huge 18vw text was being repainted on every scroll
          frame, which is the worst case for mobile compositors. */}
      {parallaxOn && (
        <motion.div
          style={{ y: yBg, willChange: "transform" }}
          aria-hidden
          className="absolute -top-20 left-1/2 -translate-x-1/2 select-none pointer-events-none whitespace-nowrap font-serif text-[18vw] leading-none text-white/[0.025] uppercase tracking-tighter"
        >
          Parfum · Niche
        </motion.div>
      )}

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          style={yTitle ? { y: yTitle, willChange: "transform" } : undefined}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.4em] text-gold">
              Atrinkti kvepalai
            </span>
            <h2 className="mt-5 font-serif font-light text-4xl md:text-6xl text-foreground leading-[1.1]">
              Keturi kvapai.
              <br />
              <span className="italic text-gold-soft">Keturios istorijos.</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15 }}
            className="text-foreground/60 max-w-md leading-relaxed"
          >
            Mūsų kolekcijos akcentai — kvepalai, kurie pastaruoju metu sukuria
            daugiausiai šnabždesių parduotuvėje.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredPerfumes.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{
                duration: 0.7,
                delay: i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-gradient-to-b from-surface-2 to-black border border-white/5 group-hover:border-gold/30 transition-colors duration-500">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-transform duration-700 ease-out float-slow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
              <div className="mt-6">
                <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
                  {p.family}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-foreground">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-foreground/55">{p.notes}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <a
            href="#kontaktai"
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-gold border-b border-gold/40 hover:border-gold pb-1 transition-colors"
          >
            Pasiteirauti dėl kvapo
            <span aria-hidden>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
