"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { brand } from "@/lib/content";

const titleWords = brand.tagline.split(" ");

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative h-[100svh] min-h-[640px] w-full overflow-hidden bg-black"
    >
      {/* Background image with Ken Burns + parallax */}
      <motion.div style={{ y: yBg }} className="absolute inset-0">
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

      {/* Floating gold particles */}
      <Particles />

      {/* Content */}
      <motion.div
        style={{ opacity }}
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
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{
                duration: 0.9,
                delay: 0.45 + i * 0.12,
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
            className="inline-flex items-center justify-center h-12 px-8 rounded-full bg-gold text-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-soft transition-all duration-500 active:scale-95"
          >
            Susisiekite
          </a>
          <a
            href="#kategorijos"
            className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-gold/40 text-gold text-xs uppercase tracking-[0.25em] font-medium hover:border-gold hover:bg-gold/5 transition-all duration-500"
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

function Particles() {
  const dots = Array.from({ length: 24 });
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {dots.map((_, i) => {
        const left = (i * 37) % 100;
        const top = (i * 53) % 100;
        const delay = (i * 0.4) % 6;
        const size = 1 + (i % 4) * 0.6;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-gold/70 blur-[1px]"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: `${size}px`,
              height: `${size}px`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.6, 0],
              y: [0, -60, -120],
              x: [0, 8, -6],
            }}
            transition={{
              duration: 8 + (i % 5),
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
