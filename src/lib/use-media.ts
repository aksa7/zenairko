"use client";

import { useEffect, useState } from "react";

/**
 * Returns true once the viewport is >= 768px (matches Tailwind `md`).
 * Defaults to false during SSR/first paint so we never hydrate heavy
 * desktop-only animations on a phone.
 */
export function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 768px)");
    const apply = () => setIsDesktop(mql.matches);
    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  return isDesktop;
}
