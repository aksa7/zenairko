import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { ScrollShowcase } from "@/components/sections/scroll-showcase";
import { Categories } from "@/components/sections/categories";
import { FeaturedPerfumes } from "@/components/sections/featured-perfumes";
import { HomeScents } from "@/components/sections/home-scents";
import { WhyUs } from "@/components/sections/why-us";
import { Promotions } from "@/components/sections/promotions";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <ScrollShowcase />
      <Categories />
      <FeaturedPerfumes />
      <HomeScents />
      <WhyUs />
      <Promotions />
      <Contact />
      <Footer />
    </main>
  );
}
