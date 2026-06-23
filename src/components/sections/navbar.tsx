"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { nav, brand } from "@/lib/content";
import { cn } from "@/lib/utils";
import { getLenis } from "@/components/smooth-scroll";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock background scroll while the mobile menu is open to avoid jitter.
  useEffect(() => {
    const lenis = getLenis();
    if (open) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }
    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/70 border-b border-white/5"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="group flex items-center gap-3">
          <span className="font-serif text-2xl tracking-[0.18em] text-foreground">
            {brand.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-xs uppercase tracking-[0.22em] text-foreground/70 hover:text-gold transition-colors duration-300 py-2"
            >
              <span>{item.label}</span>
              <span className="absolute left-0 right-0 -bottom-0.5 h-px bg-gold origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
            </a>
          ))}
        </nav>

        <a
          href="#kontaktai"
          className="hidden md:inline-flex items-center text-xs uppercase tracking-[0.22em] text-gold border-b border-gold/40 hover:border-gold pb-0.5 transition-colors"
        >
          Susisiekti
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden text-foreground p-2"
          aria-label="Meniu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            style={{ willChange: "transform, opacity" }}
            className="md:hidden origin-top border-t border-white/5 bg-background/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {nav.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.08 + i * 0.05 }}
                  className="text-sm uppercase tracking-[0.22em] text-foreground/80"
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.a
                href="#kontaktai"
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.08 + nav.length * 0.05 }}
                className="text-sm uppercase tracking-[0.22em] text-gold"
              >
                Susisiekti
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
