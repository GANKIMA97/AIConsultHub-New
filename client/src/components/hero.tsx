import { Button } from "@/components/ui/button";
import { Rocket, MessageCircle } from "lucide-react";
import { useLanguage } from "@/lib/translations";

export default function Hero() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080"
          alt="Modern technology background"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-teal-900/90"></div>

      {/* Floating Elements */}
      <div className="absolute top-10 sm:top-20 right-4 sm:right-20 w-16 sm:w-32 h-16 sm:h-32 bg-blue-500/20 rounded-full animate-float"></div>
      <div 
        className="absolute bottom-20 sm:bottom-40 left-4 sm:left-20 w-12 sm:w-24 h-12 sm:h-24 bg-emerald-500/20 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t.heroTitle.comprehensive}{" "}
            <span style={{ color: "var(--accent-yellow)" }}>{t.heroTitle.technology}</span>
            {t.heroTitle.business && <><span>,{" "}</span><span style={{ color: "var(--accent-emerald)" }}>{t.heroTitle.business}</span></>}
            {t.heroTitle.globalTrade && <><span>,{" "}</span><span style={{ color: "var(--accent-blue)" }}>{t.heroTitle.globalTrade}</span></>}
          </h1>

          <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto animate-slide-up">
            {t.heroSubtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
            <Button
              onClick={() => scrollToSection("services")}
              className="text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover-lift"
              style={{ backgroundColor: "var(--accent-blue)" }}
            >
              <Rocket className="mr-2" size={20} />
              {t.exploreServices}
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              className="border-2 border-white bg-transparent text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-xl hover-lift"
            >
              <MessageCircle className="mr-2 text-white hover:text-blue-900 transition-colors duration-300" size={20} />
              <span className="text-white hover:text-blue-900 transition-colors duration-300">{t.contactUs}</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
