"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useMemo, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { brand } from "@/lib/content";
import { useIsDesktop } from "@/lib/use-media";

const titleWords = brand.tagline.split(" ");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const isDesktop = useIsDesktop();
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  // Parallax only on desktop. On mobile the wrapper stays at y=0 so we
  // avoid a continuously-repainting transform layer behind everything.
  const yBgRaw = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacityRaw = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const yBg = isDesktop && !reduceMotion ? yBgRaw : undefined;
  const opacity = !reduceMotion ? opacityRaw : undefined;

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black"
    >
      {/* Background image with Ken Burns (desktop only via CSS) + optional parallax */}
      <motion.div
        style={yBg ? { y: yBg, willChange: "transform" } : undefined}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 kenburns">
          <Image
            src="/images/hero.jpg"
            alt="Prabangūs nišiniai kvepalai"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-60"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)]" />
      </motion.div>

      {/* Floating gold particles — desktop only */}
      {isDesktop && !reduceMotion && <Particles />}

      {/* Content */}
      <motion.div
        style={opacity ? { opacity } : undefined}
        className="relative z-10 h-full flex flex-col items-center justify-center px-6 pb-28 sm:pb-0 text-center"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xs md:text-sm uppercase tracking-[0.45em] text-gold/90 mb-8"
        >
          Nišinė parfumerija · Kaunas
        </motion.span>

        <h1 className="font-serif font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground leading-[1.05] max-w-5xl">
          {titleWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45 + i * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.3 }}
          className="mt-8 max-w-2xl text-base md:text-lg text-foreground/70 leading-relaxed font-light"
        >
          {brand.intro}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="mt-12 flex flex-col sm:flex-row items-center gap-5"
        >
          <a
            href="#kontaktai"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gold text-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-soft transition-colors duration-300 active:scale-95"
          >
            Susisiekite
          </a>
          <a
            href="#kategorijos"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-gold/40 text-gold text-xs uppercase tracking-[0.25em] font-medium hover:border-gold hover:bg-gold/5 transition-colors duration-300"
          >
            Peržiūrėti asortimentą
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-5 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.35em] text-foreground/40">
            Slinkti žemyn
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="text-gold/70"
          >
            <ChevronDown className="size-4" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

const PARTICLE_COUNT = 12;

function Particles() {
  // Stable, memoised seeds — no Math.random, no re-creation per render.
  const dots = useMemo(
    () =>
      Array.from({ length: PARTICLE_COUNT }, (_, i) => ({
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        delay: (i * 0.5) % 6,
        size: 1 + (i % 4) * 0.6,
        duration: 8 + (i % 5),
      })),
    []
  );
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((d, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-gold/70"
          style={{
            left: `${d.left}%`,
            top: `${d.top}%`,
            width: `${d.size}px`,
            height: `${d.size}px`,
            willChange: "transform, opacity",
          }}
          initial={{ opacity: 0, y: 0 }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -60, -120],
          }}
          transition={{
            duration: d.duration,
            delay: d.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
