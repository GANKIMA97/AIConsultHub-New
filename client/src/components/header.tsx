import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageSelector } from "@/components/language-selector";
import { useLanguage } from "@/lib/translations";
import logoPath from "@assets/AIConsult Hub Logo - Black with White Background - 5000x5000_1751191957519.png";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (header) {
        if (window.scrollY > 100) {
          header.classList.add("backdrop-blur-lg", "bg-white/10");
        } else {
          header.classList.remove("backdrop-blur-lg", "bg-white/10");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-white/20 transition-all duration-300">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-lg flex items-center justify-center p-1 sm:p-2">
              <img 
                src={logoPath} 
                alt="AIConsult Hub Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <h2 className="text-lg sm:text-2xl font-bold text-white drop-shadow-lg">AIConsult Hub</h2>
              <p className="text-xs sm:text-sm text-blue-200 font-medium hidden sm:block">Comprehensive Solutions</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              {t.home}
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              {t.services}
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              {t.about}
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-yellow-300 transition-colors duration-300"
            >
              {t.contact}
            </button>
          </div>

          {/* Language Selector and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Button
              onClick={() => scrollToSection("contact")}
              className="text-black font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ backgroundColor: "var(--accent-yellow)" }}
            >
              {t.getConsultation}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-white hover:text-yellow-300 transition-colors duration-300 text-left"
              >
                {t.home}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-white hover:text-yellow-300 transition-colors duration-300 text-left"
              >
                {t.services}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-white hover:text-yellow-300 transition-colors duration-300 text-left"
              >
                {t.about}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-white hover:text-yellow-300 transition-colors duration-300 text-left"
              >
                {t.contact}
              </button>
              <div className="flex flex-col space-y-3 mt-4">
                <LanguageSelector />
                <Button
                  onClick={() => scrollToSection("contact")}
                  className="text-black font-semibold w-full"
                  style={{ backgroundColor: "var(--accent-yellow)" }}
                >
                  {t.getConsultation}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}