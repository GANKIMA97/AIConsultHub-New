import Header from "@/components/header";
import Hero from "@/components/hero";
import ServicesOverview from "@/components/services-overview";
import ITConsulting from "@/components/it-consulting";
import BusinessConsulting from "@/components/business-consulting";
import InternationalTrade from "@/components/international-trade";
import WhyChooseUs from "@/components/why-choose-us";
import About from "@/components/about";
import Contact from "@/components/contact";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <ServicesOverview />
      <ITConsulting />
      <BusinessConsulting />
      <InternationalTrade />
      <WhyChooseUs />
      <About />
      <Contact />
      <FAQ />
      <Footer />
      
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 w-12 h-12 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        style={{ backgroundColor: "var(--accent-blue)" }}
      >
        <ArrowUp className="w-5 h-5 mx-auto" />
      </button>
    </div>
  );
}
