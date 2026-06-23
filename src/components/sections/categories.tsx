"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/content";

export function Categories() {
  return (
    <section
      id="kategorijos"
      className="relative bg-background py-32 md:py-40 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Asortimentas
          </span>
          <h2 className="mt-5 font-serif font-light text-4xl md:text-6xl text-foreground leading-[1.1]">
            Šešios kolekcijos.
            <br />
            <span className="italic text-gold-soft">Vienas standartas — </span>
            tikras.
          </h2>
          <p className="mt-6 text-foreground/60 max-w-xl leading-relaxed">
            Nuo nišinių kvepalų iki interjero kvapų — kiekviena kategorija
            atrinkta dėmesingai, su minimum reikalavimu: originalumas ir
            jausmas.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((c, i) => {
            const dir = i % 2 === 0 ? -60 : 60;
            return (
              <motion.a
                key={c.id}
                href={`#${c.id}`}
                initial={{ opacity: 0, x: dir, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.85,
                  delay: (i % 3) * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -8 }}
                className="group relative block aspect-[4/5] overflow-hidden rounded-2xl bg-surface border border-white/5 hover:border-gold/40 transition-colors duration-500"
              >
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 p-7 md:p-8 flex flex-col justify-end">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
                        Kategorija {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="mt-3 font-serif font-light text-2xl md:text-3xl text-foreground leading-tight">
                        {c.title}
                      </h3>
                    </div>
                    <span className="shrink-0 size-10 rounded-full border border-gold/40 grid place-items-center text-gold group-hover:bg-gold group-hover:text-black transition-all duration-500">
                      <ArrowUpRight className="size-4" />
                    </span>
                  </div>
                  <p className="mt-4 text-sm text-foreground/65 leading-relaxed max-w-sm">
                    {c.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
