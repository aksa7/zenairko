"use client";

import { motion } from "motion/react";
import { brand, nav, contact } from "@/lib/content";

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </svg>
  );
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="relative bg-black border-t border-white/5 pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12"
        >
          <div className="md:col-span-5">
            <span className="font-serif text-3xl tracking-[0.2em] text-foreground">
              {brand.name}
            </span>
            <p className="mt-6 text-foreground/55 leading-relaxed max-w-sm">
              Nišinė kvepalų ir prabangos parduotuvė. Originali produkcija,
              testeriai vietoje, asmeninis dėmesys kiekvienam klientui.
            </p>
            <div className="mt-8 flex gap-4">
              <SocialLink href="#" label="Instagram">
                <InstagramIcon className="size-4" />
              </SocialLink>
              <SocialLink href="#" label="Facebook">
                <FacebookIcon className="size-4" />
              </SocialLink>
            </div>
          </div>

          <div className="md:col-span-3">
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
              Naršyti
            </span>
            <ul className="mt-5 space-y-3">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-foreground/70 hover:text-gold transition-colors"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <span className="text-[10px] uppercase tracking-[0.35em] text-gold/80">
              Kontaktai
            </span>
            <ul className="mt-5 space-y-3 text-foreground/70">
              <li>
                <a href={contact.phoneHref} className="hover:text-gold">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={contact.emailHref} className="hover:text-gold">
                  {contact.email}
                </a>
              </li>
              <li>{contact.address}</li>
              <li className="text-sm">{contact.hours}</li>
            </ul>
          </div>
        </motion.div>

        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-foreground/45">
          <span>© {new Date().getFullYear()} {brand.name}. Visos teisės saugomos.</span>
          <span>Nišinė kvepalų parduotuvė · Kaunas</span>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="grid place-items-center size-10 rounded-full border border-white/10 text-foreground/70 hover:border-gold hover:text-gold transition-all duration-500"
    >
      {children}
    </a>
  );
}
