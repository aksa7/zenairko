"use client";

import { motion } from "motion/react";
import {
  Sparkles,
  Leaf,
  FlaskConical,
  Tag,
  Heart,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { whyUs, type Reason } from "@/lib/content";

const icons: Record<Reason["icon"], LucideIcon> = {
  sparkles: Sparkles,
  leaf: Leaf,
  flask: FlaskConical,
  tag: Tag,
  heart: Heart,
  gift: Gift,
};

export function WhyUs() {
  return (
    <section className="relative bg-black py-32 md:py-44 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(201,164,92,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Kodėl mes
          </span>
          <h2 className="mt-5 font-serif font-light text-4xl md:text-6xl text-foreground leading-[1.1]">
            Šeši dalykai, kuriais{" "}
            <span className="italic text-gold-soft">tikime</span>
          </h2>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-14">
          {whyUs.map((r, i) => {
            const Icon = icons[r.icon];
            return (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative group"
              >
                <div className="flex items-start gap-5">
                  <motion.span
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.1 + i * 0.08,
                      ease: "backOut",
                    }}
                    className="shrink-0 grid place-items-center size-14 rounded-full border border-gold/40 text-gold relative"
                  >
                    <span className="absolute inset-0 rounded-full bg-gold/0 group-hover:bg-gold/10 transition-colors duration-500" />
                    <Icon className="size-6 relative" strokeWidth={1.4} />
                  </motion.span>
                  <div className="pt-1">
                    <h3 className="font-serif text-2xl text-foreground">
                      {r.title}
                    </h3>
                    <p className="mt-2 text-foreground/60 leading-relaxed">
                      {r.body}
                    </p>
                  </div>
                </div>
                <span className="absolute left-[26px] top-14 bottom-0 w-px bg-gradient-to-b from-gold/20 to-transparent" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
