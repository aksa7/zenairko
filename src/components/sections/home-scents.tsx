"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Flame, Check } from "lucide-react";
import { homeScents } from "@/lib/content";

export function HomeScents() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section
      id="namu-kvapai"
      ref={ref}
      className="relative bg-background py-32 md:py-44 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 order-2 lg:order-1"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            {homeScents.eyebrow}
          </span>
          <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
            {homeScents.title}
          </h2>
          <p className="mt-6 text-foreground/65 leading-relaxed">
            {homeScents.body}
          </p>

          <ul className="mt-10 space-y-4">
            {homeScents.bullets.map((b, i) => (
              <motion.li
                key={b}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.08 }}
                className="flex items-start gap-3 text-foreground/85"
              >
                <span className="mt-1 shrink-0 size-5 rounded-full border border-gold/50 grid place-items-center">
                  <Check className="size-3 text-gold" />
                </span>
                <span>{b}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Image with parallax + flicker glow */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 order-1 lg:order-2 relative"
        >
          <div className="relative aspect-[5/6] md:aspect-[4/5] rounded-3xl overflow-hidden bg-surface border border-white/5">
            <motion.div style={{ y: yImg }} className="absolute inset-0">
              <Image
                src={homeScents.image}
                alt={homeScents.title}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover scale-110"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
            {/* Floating flame glow */}
            <div className="absolute bottom-10 right-10 flicker">
              <div className="relative">
                <div className="absolute inset-0 -m-4 rounded-full bg-gold/30 blur-2xl" />
                <span className="relative grid place-items-center size-14 rounded-full bg-black/60 border border-gold/40 text-gold">
                  <Flame className="size-6" />
                </span>
              </div>
            </div>
          </div>

          {/* Subtle floating card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="hidden md:flex absolute -bottom-6 -left-6 max-w-xs gap-4 items-center rounded-2xl bg-surface-2/90 backdrop-blur-xl border border-white/10 p-5"
          >
            <span className="font-serif text-4xl text-gold leading-none">7</span>
            <span className="text-xs uppercase tracking-[0.25em] text-foreground/70 leading-snug">
              Aromatų šeimos
              <br /> namams
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
