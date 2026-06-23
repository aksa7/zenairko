"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import { contact } from "@/lib/content";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function Contact() {
  const [pending, setPending] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setPending(true);
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const reach = String(data.get("reach") || "").trim();
    if (!name || !reach) {
      toast.error("Užpildykite vardą ir kontaktą.");
      setPending(false);
      return;
    }
    // Simulate (no backend) — show success toast and reset
    setTimeout(() => {
      toast.success("Ačiū! Susisieksime artimiausiu metu.");
      (e.target as HTMLFormElement).reset();
      setPending(false);
    }, 600);
  }

  return (
    <section
      id="kontaktai"
      className="relative bg-background py-32 md:py-44 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(201,164,92,0.06),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-12 gap-14 lg:gap-20">
        {/* Left — text + contact info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            {contact.eyebrow}
          </span>
          <h2 className="mt-5 font-serif font-light text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1]">
            {contact.title}
          </h2>
          <p className="mt-6 text-foreground/65 leading-relaxed max-w-md">
            {contact.body}
          </p>

          <div className="mt-12 space-y-6">
            <ContactItem
              icon={<Phone className="size-4" />}
              label="Telefonas"
              value={contact.phone}
              href={contact.phoneHref}
            />
            <ContactItem
              icon={<Mail className="size-4" />}
              label="El. paštas"
              value={contact.email}
              href={contact.emailHref}
            />
            <ContactItem
              icon={<MapPin className="size-4" />}
              label="Adresas"
              value={contact.address}
            />
            <ContactItem
              icon={<Clock className="size-4" />}
              label="Darbo laikas"
              value={contact.hours}
            />
          </div>
        </motion.div>

        {/* Right — form */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-7 relative rounded-3xl border border-white/10 bg-surface/40 backdrop-blur-sm p-8 md:p-12"
        >
          <h3 className="font-serif text-3xl text-foreground">Užklausos forma</h3>
          <p className="mt-2 text-sm text-foreground/55">
            Atsakome darbo dienomis per kelias valandas.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <Label htmlFor="name">Vardas</Label>
              <Input
                id="name"
                name="name"
                required
                placeholder="Jūsų vardas"
              />
            </div>
            <div>
              <Label htmlFor="reach">Telefonas arba el. paštas</Label>
              <Input
                id="reach"
                name="reach"
                required
                placeholder="+370 ... arba pastas@..."
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="product">Dominantis produktas</Label>
              <Input
                id="product"
                name="product"
                placeholder="Pvz. nišinis kvepalas, žvakė, dovanų rinkinys"
              />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message">Žinutė</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Papasakokite, ko ieškote — su mielu noru patarsime."
              />
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
            <p className="text-xs text-foreground/45 leading-relaxed max-w-sm">
              Paspausdami „Siųsti užklausą" sutinkate, kad susisieksime su
              jumis dėl jūsų užklausos. Duomenų niekur neperduodame.
            </p>
            <button
              type="submit"
              disabled={pending}
              className="group inline-flex items-center justify-center gap-3 h-12 px-8 rounded-full bg-gold text-black text-xs uppercase tracking-[0.25em] font-medium hover:bg-gold-soft disabled:opacity-60 transition-colors duration-500"
            >
              {pending ? "Siunčiame…" : "Siųsti užklausą"}
              <Send className="size-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function ContactItem({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-start gap-4">
      <span className="shrink-0 mt-1 grid place-items-center size-10 rounded-full border border-gold/40 text-gold group-hover:bg-gold group-hover:text-black transition-colors duration-500">
        {icon}
      </span>
      <div>
        <span className="block text-[10px] uppercase tracking-[0.35em] text-foreground/50">
          {label}
        </span>
        <span className="block mt-1 font-serif text-xl text-foreground group-hover:text-gold-soft transition-colors">
          {value}
        </span>
      </div>
    </div>
  );
  return href ? <a href={href}>{content}</a> : content;
}
