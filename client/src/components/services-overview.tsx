import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Globe, CheckCircle } from "lucide-react";
import { useLanguage } from "@/lib/translations";

export default function ServicesOverview() {
  const { t } = useLanguage();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: (
        <div className="text-white text-2xl font-bold" style={{ fontSize: '28px', fontFamily: 'monospace' }}>
          &lt;/&gt;
        </div>
      ),
      title: t.itTitle,
      description: t.itSubtitle,
      color: "var(--accent-blue)",
      secondaryColor: "var(--primary-blue)",
      features: [
        t.webDevelopment,
        t.aiToolsTraining,
        t.cybersecurity,
        t.cloudComputing,
      ],
      action: () => scrollToSection("it-consulting"),
    },
    {
      icon: <TrendingUp className="text-white text-2xl" size={32} />,
      title: t.businessTitle,
      description: t.businessSubtitle,
      color: "var(--accent-emerald)",
      secondaryColor: "var(--primary-teal)",
      features: [
        t.marketAnalysis,
        t.digitalMarketing,
        t.financeSupport,
        t.businessStrategy,
      ],
      action: () => scrollToSection("business-consulting"),
    },
    {
      icon: <Globe className="text-white text-2xl" size={32} />,
      title: t.tradeTitle,
      description: t.tradeSubtitle,
      color: "var(--accent-yellow)",
      secondaryColor: "#f97316",
      features: [
        t.productSourcing,
        t.proxyPurchasing,
        t.marketEntry,
        t.startTradeJourney,
      ],
      action: () => scrollToSection("international-trade"),
    },
  ];

  return (
    <section id="services" className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--charcoal)" }}>
            {t.servicesTitle}
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            {t.servicesSubtitle}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="hover-lift border-t-4 group cursor-pointer" style={{ borderTopColor: service.color }}>
              <CardHeader className="text-center">
                <div
                  className="w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${service.color} 0%, ${service.secondaryColor} 100%)`,
                  }}
                >
                  {service.icon}
                </div>
                <CardTitle className="text-2xl font-bold mb-3" style={{ color: "var(--charcoal)" }}>
                  {service.title}
                </CardTitle>
                <p className="text-gray-600">{service.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                      <CheckCircle className="mr-3" style={{ color: service.color }} size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={service.action}
                  className="w-full text-white py-3 rounded-xl font-semibold transition-colors duration-300"
                  style={{ backgroundColor: service.color }}
                >
                  {t.learnMore}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
