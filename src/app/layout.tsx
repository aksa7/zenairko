import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { Toaster } from "@/components/ui/toaster";

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ZENA IR KO — Nišiniai kvepalai, kosmetika ir namų kvapai",
  description:
    "Originalūs nišiniai ir kolekciniai kvepalai vyrams ir moterims, profesionali plaukų priežiūra, prabangūs namų kvapai, žvakės ir dekoratyvinė kosmetika. Platus asortimentas, testeriai, akcijos.",
  openGraph: {
    title: "ZENA IR KO — Nišiniai kvepalai ir prabanga namams",
    description:
      "Originalūs nišiniai ir kolekciniai kvepalai, plaukų priežiūra, namų kvapai, žvakės ir dekoratyvinė kosmetika.",
    locale: "lt_LT",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="lt"
      className={`${serif.variable} ${sans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
