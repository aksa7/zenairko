"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

/** Access the shared Lenis instance (null on reduced-motion or before mount). */
export function getLenis() {
  return lenisInstance;
}

export function SmoothScroll() {
  useEffect(() => {
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    // Mobile gets a lighter Lenis config — smoothWheel only matters for
    // mouse/trackpad; on touch devices native momentum is already buttery
    // and `syncTouch` was the main source of scroll fighting `useScroll`.
    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    const lenis = new Lenis({
      duration: isCoarse ? 0.9 : 1.15,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      syncTouch: false,
    });
    lenisInstance = lenis;

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Route in-page anchor clicks through Lenis so native + smooth scroll
    // never fight each other (the cause of the scroll "flicker").
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return;
      const anchor = (e.target as HTMLElement)?.closest?.(
        'a[href^="#"]'
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      e.preventDefault();
      if (href === "#top") {
        lenis.scrollTo(0);
        return;
      }
      const target = document.querySelector(href);
      if (target) lenis.scrollTo(target as HTMLElement, { offset: -72 });
    };
    document.addEventListener("click", onClick);

    return () => {
      document.removeEventListener("click", onClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);

  return null;
}
