"use client";

import Image from "next/image";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function ScrollShowcase() {
  return (
    <section id="apie" className="bg-background">
      <ContainerScroll
        titleComponent={
          <>
            <h2 className="font-sans text-xs md:text-sm uppercase tracking-[0.4em] text-gold mb-4">
              Patirtis, ne pirkinys
            </h2>
            <h3 className="font-serif font-light text-3xl md:text-5xl text-foreground/90 leading-tight">
              Kvapas, kuris pasakoja istoriją
            </h3>
            <p className="font-serif font-semibold leading-none text-5xl md:text-[6.5rem] mt-3 gold-shimmer">
              ZENA IR KO
            </p>
          </>
        }
      >
        <Image
          src="/images/showcase.jpg"
          alt="Prabangūs nišiniai kvepalai"
          height={800}
          width={1600}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </section>
  );
}
