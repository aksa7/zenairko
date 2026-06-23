"use client";

import { motion } from "motion/react";
import { Sparkles } from "lucide-react";
import { promo } from "@/lib/content";

export function Promotions() {
  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-gold/20 bg-gradient-to-br from-surface to-black p-10 md:p-16"
        >
          {/* Shimmer line */}
          <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "100%" }}
            viewport={{ once: true }}
            transition={{ duration: 2.2, ease: "easeInOut", delay: 0.3 }}
            className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
          />

          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-14">
            <div className="shrink-0">
              <span className="grid place-items-center size-16 rounded-full border border-gold/40 text-gold">
                <Sparkles className="size-7" strokeWidth={1.4} />
              </span>
            </div>
            <div className="flex-1">
              <span className="text-xs uppercase tracking-[0.4em] text-gold">
                {promo.eyebrow}
              </span>
              <h3 className="mt-3 font-serif font-light text-3xl md:text-5xl text-foreground leading-tight">
                <span className="gold-shimmer">{promo.title}</span>
              </h3>
              <p className="mt-4 text-foreground/65 max-w-2xl">{promo.body}</p>
            </div>
            <a
              href="#kontaktai"
              className="shrink-0 inline-flex items-center justify-center h-12 px-8 rounded-full bg-gold text-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-soft transition-colors duration-500"
            >
              {promo.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
